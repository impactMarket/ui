/* eslint-disable sort-keys */
import { Icon as BaseIcon } from '../../components/Icon';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';
import icons from '../../icons/ui';

export default {
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: Object.keys(icons)
        },
        size: {
            control: { type: 'object' }
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/', '')}Icon`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    return (
        <>
            <BaseIcon {...getGeneratedPropArgs(args)} />
        </>
    );
};

export const Icon = Template.bind({});
Icon.args = {
    icon: 'arrowRight',
    size: [2, 2]
};
