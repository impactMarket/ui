/* eslint-disable sort-keys */
import { ProgressBar as BaseProgressBar, ProgressBarProps } from '../../../components/ProgressBar';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import { stateTypes } from '../../../helpers/applyStateColor';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
        progress: {
            control: { type: 'number' },
            description: 'Up to 100'
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
    title: `Components/${base.replace('/src/stories/2-base/', '')}ProgressBar`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as ProgressBarProps;

    return <BaseProgressBar {...props} />;
};

export const ProgressBar = Template.bind({});
ProgressBar.storyName = 'ProgressBar';
ProgressBar.args = {
    progress: 50
};
