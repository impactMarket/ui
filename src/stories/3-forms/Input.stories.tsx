import { Input as BaseInput } from '../../components/Input';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';
import icons from '../../icons/ui';

export default {
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: Object.keys(icons)
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/Forms/${base.replace('/src/stories/3-forms/', '')}Input`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { wrapperProps, ...otherProps } = args;

    return <BaseInput wrapperProps={wrapperProps} {...otherProps} />;
};

export const Input = Template.bind({});
Input.args = {
    disabled: false,
    icon: '',
    placeholder: 'Write something here...',
    rows: 0,
    withError: false,
    wrapperProps: {
        mt: 2
    }
};
