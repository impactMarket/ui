/* eslint-disable no-alert */
import { ComposedCard as BaseComposedCard, ComposedCardProps } from '../../components/ComposedCard';
import { Box } from '../../components/Box';
import { Button } from '../../components/Button';
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
    title: `Components/${base.replace('/src/stories/4-composed/', '')}ComposedCard`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as ComposedCardProps;

    return (
        <Box padding={3}>
            <Box w={22}>
                <BaseComposedCard {...props}>
                    <Button fluid secondary xl>
                        Continue
                    </Button>
                </BaseComposedCard>
            </Box>
        </Box>
    );
};

export const ComposedCard = Template.bind({});
ComposedCard.storyName = 'ComposedCard';
ComposedCard.args = {
    content: 'Level 1  · 5 lessons · Earn up to 500 PACTS',
    heading: 'What is crypto and Blockchain?',
    image: 'https://picsum.photos/300',
    label: 'Beginner'
};
