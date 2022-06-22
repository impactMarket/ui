import { Typing as BaseTyping } from '../../../components/Typing';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { GeneratedPropTypes } from '../../../types';
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
    title: `Components/${base.replace('/src/stories/2-base/', '')}Typing`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as GeneratedPropTypes;

    return <BaseTyping {...props} />;
};

export const Typing = Template.bind({});
