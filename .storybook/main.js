module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        './generator/register',
        '@storybook/addon-postcss'
    ],
    framework: '@storybook/react'
};
