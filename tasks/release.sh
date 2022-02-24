#!/usr/bin/env sh

release() {
    local PREV='';
    re="\"(version)\": \"([^\"]*)\"";

    while read -r l; do
        if [[ $l =~ $re ]]; then
            value="${BASH_REMATCH[2]}";
            PREV="$value";
        fi
    done < package.json;

    local version=$(echo ${PREV} | awk -F. -v OFS=. 'NF==1{print ++$NF}; NF>1{if(length($NF+1)>length($NF))$(NF-1)++; $NF=sprintf("%0*d", length($NF), ($NF+1)%(10^length($NF))); print}')

    echo Setting ${version} version.

    # Build lib
    yarn build

    # Build storybook project
    yarn build-storybook

    # Generate icons
    yarn generate:icons

    # Everything's ok...
    # Change package.json
    sed -i '' "s/${PREV}/${version}/" package.json

    # Generate changelog using auto-changelog
    yarn generate:changelog

    # Create a branch for the release
    #git checkout -b release/${version}

    # Adds modified files
    #git add package.json CHANGELOG.md src/icons

    # Comit release
    #git commit -m "Release ${version}"

    echo ${version} successfully created! push it:
    echo "git push origin release/${version}"
}

release
