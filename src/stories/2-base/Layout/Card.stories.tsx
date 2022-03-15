/* eslint-disable sort-keys */
import { Card as BaseCard } from '../../../components/Card';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Display, Text } from '../../../components/Typography';
import { Divider } from '../../../components/Divider';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: setGeneratedPropArgs(),
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}Card`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    return (
        <>
            <BaseCard {...getGeneratedPropArgs(args)}>
                <Display>My Awesome Title!</Display>
                <Divider />
                <Text small>Use generated props and play with me...</Text>
            </BaseCard>
        </>
    );
};

export const Card = Template.bind({});
Card.args = {};
