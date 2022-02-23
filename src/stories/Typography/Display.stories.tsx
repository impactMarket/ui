/* eslint-disable sort-keys */
import { Display as BaseDisplay, DisplayProps } from '../../components/Typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import { typography } from '../../theme';
import React from 'react';
import base from 'paths.macro';
import getTypographyArgTypes from '../../helpers/getTypographyArgTypes';

export default {
    argTypes: {
        ...getTypographyArgTypes({ sizes: Object.keys(typography.display) }),
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/', '')}Display`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { children, ...forwardProps } = args;
    const props = Object.values(forwardProps).reduce(
        (results, prop) => ({ ...(results as any), [prop as string]: true }),
        {
            children,
            ...getGeneratedPropArgs(args)
        }
    ) as DisplayProps;

    return <BaseDisplay {...props} />;
};

export const Display = Template.bind({});
Display.args = {
    children: 'Donec odio quisque volutpat'
};
