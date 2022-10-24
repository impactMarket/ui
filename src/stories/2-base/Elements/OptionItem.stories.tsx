/* eslint-disable sort-keys */
import { OptionItem as BaseOptionItem, OptionItemProps } from '../../../components/OptionItem';
import { Box } from '../../../components/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
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
    title: `Components/${base.replace('/src/stories/2-base/', '')}OptionItem`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as OptionItemProps;

    return (
        <Box padding={3}>
            <Box w={25}>
                <BaseOptionItem {...props} />
            </Box>
        </Box>
    );
};

export const OptionItem = Template.bind({});
OptionItem.storyName = 'OptionItem';
OptionItem.args = {
    content: 'Natus error sit voluptatem accusantium.',
    isActive: true,
    // eslint-disable-next-line no-alert
    onClick: () => alert('Clicked!')
};
