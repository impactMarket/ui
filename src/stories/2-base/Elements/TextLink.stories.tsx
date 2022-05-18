/* eslint-disable sort-keys */
import { TextLink as BaseTextLink, TextLinkProps } from '../../../components/TextLink';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { fonts, typography } from '../../../theme';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';
import getTypographyArgTypes from '../../../helpers/getTypographyArgTypes';

export default {
    argTypes: {
        weight: {
            control: { type: 'radio' },
            description: 'Pass as bool prop',
            options: Object.keys(fonts?.weights)
        },
        ...getTypographyArgTypes({ sizes: Object.keys(typography.text) }),
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}TextLink`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = ({ text, ...args }) => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as TextLinkProps;

    return <BaseTextLink {...props}>{text}</BaseTextLink>;
};

export const TextLink = Template.bind({});
TextLink.storyName = 'TextLink';
TextLink.args = {
    text: 'My link'
};
