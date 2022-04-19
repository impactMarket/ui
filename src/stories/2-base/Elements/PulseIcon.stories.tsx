/* eslint-disable sort-keys */
import { PulseIcon as BasePulseIcon } from '../../../components/PulseIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { colors } from '../../../theme';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';
import icons from '../../../icons/ui';

export default {
    argTypes: {
        borderColor: {
            control: { type: 'select' },
            options: Object.keys(colors)
        },
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
    title: `Components/${base.replace('/src/stories/2-base/', '')}PulseIcon`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    return (
        <>
            <BasePulseIcon {...getGeneratedPropArgs(args)} />
        </>
    );
};

export const PulseIcon = Template.bind({});
PulseIcon.storyName = 'PulseIcon';
PulseIcon.args = {
    borderColor: 'g50',
    icon: 'upload',
    namedProps: 'bgG100 g600',
    size: 2.75
};
