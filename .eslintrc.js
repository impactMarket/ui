module.exports = {
    extends: ['eslint-config-impact-market/web', 'plugin:storybook/recommended'],
    globals: {
        JSX: true
    },
    rules: {
        'no-undef': 'error',
        'no-unused-vars': 'off',
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
        ],
        'react/require-default-props': 0
    }
};
