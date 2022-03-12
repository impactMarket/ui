/* eslint-disable sort-keys */
import {
    Button as BaseButton,
    ButtonProps,
    buttonColorVariations,
    buttonSizeVariations
} from '../../../components/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';
import icons from '../../../icons/ui';

export default {
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: Object.keys(icons)
        },
        color: {
            control: { type: 'radio' },
            description: 'Pass as bool prop',
            options: Object.keys(buttonColorVariations)
        },
        size: {
            control: { type: 'radio' },
            description: 'Pass as bool prop',
            options: Object.keys(buttonSizeVariations)
        },
        isLoading: {
            control: { type: 'boolean' },
            description: 'Pass as bool prop'
        },
        reverse: {
            control: { type: 'boolean' },
            description: 'Pass as bool prop'
        },
        fluid: {
            control: { type: 'select', options: ['xs', 'sm', 'md', 'lg'] },
            description: `Pass one of 'xs', 'sm', 'md', 'lg'`
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}Button`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { children, ...forwardProps } = args;
    const props = Object.values(forwardProps).reduce(
        (results, prop) => ({ ...(results as any), [prop as string]: true }),
        { ...getGeneratedPropArgs(args) }
    ) as ButtonProps;

    return (
        <>
            <BaseButton {...props}>{children}</BaseButton>
        </>
    );
};

export const Button = Template.bind({});
Button.args = {
    isLoading: false,
    reverse: false,
    icon: 'arrowRight',
    children: 'Label'
};
