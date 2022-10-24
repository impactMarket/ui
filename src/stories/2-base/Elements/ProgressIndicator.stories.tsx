/* eslint-disable sort-keys */
import {
    ProgressIndicator as BaseProgressIndicator,
    ProgressIndicatorProps
} from '../../../components/ProgressIndicator';
import { Box } from '../../../components/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}ProgressIndicator`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as ProgressIndicatorProps;

    return (
        <Box padding={3}>
            <Box w={40}>
                <BaseProgressIndicator {...props} />
            </Box>
        </Box>
    );
};

export const ProgressIndicator = Template.bind({});
ProgressIndicator.storyName = 'ProgressIndicator';
ProgressIndicator.args = {
    steps: 3,
    // eslint-disable-next-line no-alert
    onStepClick: step => alert(`Clicked in step ${step}`),
    currentStep: 2
};
