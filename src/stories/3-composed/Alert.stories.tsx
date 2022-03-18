/* eslint-disable sort-keys */
import { AlertProps, Alert as BaseAlert } from '../../components/Alert';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../components/Typography';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import { stateTypes } from '../../helpers/applyStateColor';
import React from 'react';
import base from 'paths.macro';
import icons from '../../icons/ui';

export default {
    argTypes: {
        allowClose: {
            control: { type: 'boolean' },
            description: 'Pass as bool prop'
        },
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
    const { message, ...otherProps } = args;

    const props = Object.values(otherProps).reduce(
        (results, prop) => ({ ...(results as any), [prop as string]: true }),
        {
            ...getGeneratedPropArgs(otherProps)
        }
    ) as AlertProps;

    return (
        <BaseAlert {...props}>
            <Text>{message}</Text>
        </BaseAlert>
    );
};

export const Alert = Template.bind({});
Alert.args = {
    allowClose: true,
    icon: 'alertTriangle',
    message: 'Community funds will run out in 3 days. You will not be able to claim until funds will be restored.'
};
