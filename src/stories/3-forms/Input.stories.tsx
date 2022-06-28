/* eslint-disable no-alert */
import { Input as BaseInput } from '../../components/Input';
import { Button } from '../../components/Button';
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
    const { showExampleButton, wrapperProps, ...otherProps } = args;

    let buttonProps = otherProps;

    if (showExampleButton) {
        buttonProps = {
            ...buttonProps,
            button: (
                <Button icon="send" onClick={() => alert('You clicked the button!!!')}>
                    Save
                </Button>
            )
        };
    }

    return <BaseInput wrapperProps={wrapperProps} {...buttonProps} />;
};

export const Input = Template.bind({});
Input.args = {
    disabled: false,
    hint: 'This is a hint text to help user.',
    icon: '',
    placeholder: 'Write something here...',
    prefix: '$',
    rows: 0,
    showExampleButton: false,
    suffix: 'USD',
    withError: false,
    wrapperProps: {
        mt: 2
    }
};
