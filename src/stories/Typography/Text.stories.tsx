/* eslint-disable sort-keys */
import { Text as BaseText, TextProps } from '../../components/Typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import { typography } from '../../theme';
import React from 'react';
import base from 'paths.macro';
import getTypographyArgTypes from '../../helpers/getTypographyArgTypes';

export default {
    argTypes: {
        ...getTypographyArgTypes({ sizes: Object.keys(typography.text) }),
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/', '')}Text`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { children, ...forwardProps } = args;
    const props = Object.values(forwardProps).reduce(
        (results, prop) => ({ ...(results as any), [prop as string]: true }),
        { children, ...getGeneratedPropArgs(args) }
    ) as TextProps;

    return <BaseText {...props} />;
};

export const Text = Template.bind({});
Text.args = {
    children:
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.'
};
