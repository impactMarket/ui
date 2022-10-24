/* eslint-disable no-alert */
import { ProgressCard as BaseProgressCard, ProgressCardProps } from '../../components/ProgressCard';
import { Box } from '../../components/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Display } from '../../components/Typography';
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
    title: `Components/${base.replace('/src/stories/4-composed/', '')}ProgressCard`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as ProgressCardProps;

    return (
        <Box margin="3" w={22}>
            <BaseProgressCard {...props}>
                <Display semibold>
                    1 <span style={{ fontWeight: 400 }}>of</span> 2
                </Display>
            </BaseProgressCard>
        </Box>
    );
};

export const ProgressCard = Template.bind({});
ProgressCard.storyName = 'ProgressCard';
ProgressCard.args = {
    label: 'Levels Completed',
    progress: 66
};
