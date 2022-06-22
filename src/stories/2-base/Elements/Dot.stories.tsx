import { Dot as BaseDot, DotProps } from '../../../components/Dot';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import { stateTypes } from '../../../helpers/applyStateColor';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
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
    title: `Components/${base.replace('/src/stories/2-base/', '')}Dot`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as DotProps;

    return <BaseDot {...props} />;
};

export const Dot = Template.bind({});
