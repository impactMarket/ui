/* eslint-disable sort-keys */
import { Grid as BaseGrid } from '../../../components/Grid';
import { Box } from '../../../components/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Display, Text } from '../../../components/Typography';
import { Divider } from '../../../components/Divider';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
        colSpan: {
            control: { type: 'object' },
            description: 'Use as mq props'
        },
        colProps: {
            control: { type: 'object' },
            description: 'Pass generator props for cols'
        },
        cols: {
            control: { type: 'object' },
            description: 'Use as mq props'
        },
        reverse: {
            control: { type: 'inline-radio', options: ['xs', 'sm', 'md', 'lg'] }
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}Grid`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { items, ...forGenerated } = args;

    const itemsArr = new Array(items).fill('').map(index => index);

    return (
        <>
            <Display>Grid</Display>
            <Divider />
            <Text>Automatic grid where we can set the amount of columns</Text>
            <Divider />
            <BaseGrid {...getGeneratedPropArgs(forGenerated)}>
                {itemsArr?.map((_, index) => (
                    <Box bgG100 fLayout="center" flex key={index} padding={3} radius={1}>
                        <Text inlineFlex large>
                            {index + 1}
                        </Text>
                    </Box>
                ))}
            </BaseGrid>
        </>
    );
};

export const Grid = Template.bind({});
Grid.args = {
    colSpan: 2,
    cols: 3,
    items: 5,
    reverse: false
};
