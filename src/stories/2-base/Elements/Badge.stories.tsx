/* eslint-disable sort-keys */
import { BadgeProps, Badge as BaseBadge, badgeSizeVariations } from '../../../components/Badge';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
        size: {
            control: { type: 'radio' },
            description: 'Pass as bool prop',
            options: Object.keys(badgeSizeVariations)
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}Badge`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as BadgeProps;

    return <BaseBadge {...props}>Beginner</BaseBadge>;
};

export const Badge = Template.bind({});
Badge.args = {
    namedProps: 'bgP50 p700'
};
