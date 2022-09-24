import { Img as BaseImg, ImgClick, ImgProps } from '../../../components/Img';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../../components/Typography';
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
    title: `Components/${base.replace('/src/stories/2-base/', '')}Img`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as ImgProps;

    return (
        <>
            <Text>Img: Simple Image</Text>
            <BaseImg {...props} />
            <Text mt={1}>ImgClick: Image with click event</Text>
            <div style={{ height: '120px', width: '120px' }}>
                <ImgClick {...props} />
            </div>
        </>
    );
};

export const Img = Template.bind({});
Img.args = {
    alt: 'This is an example',
    // eslint-disable-next-line no-alert
    handleClick: () => alert('You clicked the image'),
    icon: 'trash',
    url: 'https://picsum.photos/120'
};
