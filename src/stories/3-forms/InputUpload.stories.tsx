import { InputUpload as BaseInputUpload } from '../../components/InputUpload';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import base from 'paths.macro';

export default {
    parameters: {
        generator: true
    },
    title: `Components/Forms/${base.replace('/src/stories/3-forms/', '')}InputUpload`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { wrapperProps, ...otherProps } = args;

    const handleFiles = files => console.log(files);

    return <BaseInputUpload handleFiles={handleFiles} wrapperProps={wrapperProps} {...otherProps} />;
};

export const InputUpload = Template.bind({});
InputUpload.storyName = 'InputUpload';
InputUpload.args = {
    children: 'Pass any content here',
    disabled: false,
    hint: 'This is a hint text to help user.',
    withError: false,
    wrapperProps: {
        mt: 2
    }
};
