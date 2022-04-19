/* eslint-disable sort-keys */
import { Countdown as BaseCountdown, CountdownProps } from '../../components/Countdown';
import { Box } from '../../components/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/4-composed/', '')}Countdown`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as CountdownProps;

    return (
        <Box w={props?.withDays ? 30 : 22}>
            <BaseCountdown {...props} />
        </Box>
    );
};

export const Countdown = Template.bind({});
Countdown.args = {
    withDays: false,
    date: '2022-3-17 12:00:00'
};
