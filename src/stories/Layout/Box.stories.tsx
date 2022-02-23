/* eslint-disable sort-keys */
import { Box as BaseBox } from '../../components/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../components/Typography';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: setGeneratedPropArgs(),
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/', '')}Box`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    return (
        <>
            <BaseBox {...getGeneratedPropArgs(args)}>
                <Text>Use generated props and play with me...</Text>
            </BaseBox>
        </>
    );
};

export const Box = Template.bind({});
Box.args = {};
