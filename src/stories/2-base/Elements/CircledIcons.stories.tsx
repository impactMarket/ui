/* eslint-disable sort-keys */
import {
    CircledIcon as BaseCircledIcon,
    CircledIconProps,
    circledIconSizeVariations
} from '../../../components/CircledIcon';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import { stateTypes } from '../../../helpers/applyStateColor';
import React from 'react';
import base from 'paths.macro';
import icons from '../../../icons/ui';

export default {
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: Object.keys(icons)
        },
        state: {
            control: { type: 'radio' },
            description: 'Pass as bool prop',
            options: stateTypes
        },
        size: {
            control: { type: 'radio' },
            description: 'Pass as bool prop',
            options: Object.keys(circledIconSizeVariations)
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}CircledIcon`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as CircledIconProps;

    return (
        <>
            <BaseCircledIcon {...props} />
        </>
    );
};

export const CircledIcon = Template.bind({});
CircledIcon.storyName = 'CircledIcon';
CircledIcon.args = {
    icon: 'arrowRight'
};
