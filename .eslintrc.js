module.exports = {
    extends: ['eslint-config-impact-market/web', 'plugin:storybook/recommended'],
    rules: {
        'no-undef': 'error',
        'no-unused-vars': 'error',
        'prettier/prettier': [
            'error',
            {
                arrowParens: 'avoid',
                bracketSameLine: false,
                printWidth: 120,
                semi: true,
                singleQuote: true,
                tabWidth: 4,
                trailingComma: 'none'
            }
        ]
    }
};
