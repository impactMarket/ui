/* eslint-disable no-alert */
/* eslint-disable sort-keys */
import { AlertProps, Alert as BaseAlert } from '../../components/Alert';
import { Button } from '../../components/Button';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import { stateTypes } from '../../helpers/applyStateColor';
import React from 'react';
import base from 'paths.macro';
import icons from '../../icons/ui';

export default {
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: Object.keys(icons)
        },
        state: {
            control: { type: 'radio' },
            description: 'Pass as bool prop',
            options: stateTypes
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/3-composed/', '')}Alert`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { showExampleButton, ...otherProps } = args;

    let alertProps = otherProps;

    if (showExampleButton) {
        alertProps = {
            ...alertProps,
            button: (
                <Button icon="alertCircle" onClick={() => alert('You clicked the button!!!')}>
                    Test Button
                </Button>
            )
        };
    }

    const props = Object.values(alertProps).reduce(
        (results, prop) => ({ ...(results as any), [prop as string]: true }),
        {
            ...getGeneratedPropArgs(alertProps)
        }
    ) as AlertProps;

    return <BaseAlert {...props} />;
};

export const Alert = Template.bind({});
Alert.args = {
    showExampleButton: true,
    icon: 'alertTriangle',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    message:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec sodales tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris ut sodales ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis ut nisi metus. Nunc dapibus nec lectus et rutrum.'
};
