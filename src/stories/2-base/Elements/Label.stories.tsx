/* eslint-disable sort-keys */
import { Label as BaseLabel, LabelProps } from '../../../components/Label';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import { stateTypes } from '../../../helpers/applyStateColor';
import React from 'react';
import base from 'paths.macro';
import icons from '../../../icons/ui';

export default {
    argTypes: {
        dot: {
            control: { type: 'select' },
            options: stateTypes
        },
        icon: {
            control: { type: 'select' },
            options: Object.keys(icons)
        },
        state: {
            control: { type: 'radio' },
            description: 'Pass as bool prop',
            options: stateTypes
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}Label`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as LabelProps;

    return <BaseLabel {...props} />;
};

export const Label = Template.bind({});
Label.args = {
    content: 'Test Label',
    icon: 'arrowRight'
};
