/* eslint-disable sort-keys */
import { Spinner as BaseSpinner, SpinnerProps } from '../../../components/Spinner';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
        isActive: {
            control: { type: 'boolean' },
            description: 'Pass as bool prop'
        },
        size: {
            control: { type: 'number' },
            description: 'Units: rem'
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}Spinner`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as SpinnerProps;

    return <BaseSpinner {...props} />;
};

export const Spinner = Template.bind({});
Spinner.args = {
    isActive: true,
    size: 2,
    namedProps: 'p700'
};
