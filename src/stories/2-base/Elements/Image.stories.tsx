/* eslint-disable no-alert */
import { Image as BaseImage, ImageProps } from '../../../components/Image';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';
import icons from '../../../icons/ui';

export default {
    argTypes: {
        icon: {
            control: { type: 'select' },
            options: Object.keys(icons)
        },
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/2-base/', '')}Image`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const handleClick = () => alert('You clicked the icon!');

    const props = Object.values({ ...args, handleClick }).reduce(
        (results, prop) => ({ ...(results as any), [prop as string]: true }),
        {
            ...getGeneratedPropArgs({ ...args, handleClick })
        }
    ) as ImageProps;

    return <BaseImage {...props} />;
};

export const Image = Template.bind({});
Image.args = {
    icon: 'trash',
    url: 'https://picsum.photos/120'
};
