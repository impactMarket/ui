/* eslint-disable sort-keys */
import { SkeletonElement as BaseSkeletonElement, SkeletonElementProps } from '../../../components/SkeletonElement';
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
    title: `Components/${base.replace('/src/stories/2-base/', '')}SkeletonElement`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = ({ overColor, ...args }) => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as SkeletonElementProps;

    const boxProps = overColor ? {} : { bgN01: true };

    return (
        <Box {...boxProps} padding={4}>
            <BaseSkeletonElement {...props} overColor={overColor} />
        </Box>
    );
};

export const SkeletonElement = Template.bind({});
SkeletonElement.storyName = 'SkeletonElement';
SkeletonElement.args = {
    overColor: false,
    variableProps: {
        h: 1,
        w: 10
    }
};
