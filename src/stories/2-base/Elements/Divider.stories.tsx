/* eslint-disable sort-keys */
import { Divider as BaseDivider } from '../../../components/Divider';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Display, Text } from '../../../components/Typography';
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
    title: `Components/${base.replace('/src/stories/2-base/', '')}Divider`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as GeneratedPropTypes;

    return (
        <>
            <Display>My nice heading!</Display>
            <BaseDivider {...props} />
            <Text as="div">
                <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                    Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a,
                    pede.
                </p>
                <p>
                    Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                    dignissim pellentesque felis.
                </p>
            </Text>
        </>
    );
};

export const Divider = Template.bind({});
Divider.args = {
    variableProps: { margin: '2 0' }
};
