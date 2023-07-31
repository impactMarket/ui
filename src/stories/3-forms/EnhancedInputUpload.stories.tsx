import { EnhancedInputUpload as BaseInputUpload } from '../../components/EnhancedInputUpload';
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

    const handleFiles = files => setTimeout(() => {
        console.log(files);
    }, 2000);

    return <BaseInputUpload handleFiles={handleFiles} wrapperProps={wrapperProps} {...otherProps} />;
};

export const EnhancedInputUpload = Template.bind({});
EnhancedInputUpload.storyName = 'EnhancedInputUpload';
EnhancedInputUpload.args = {
    children: 'Pass any content here',
    disabled: false,
    hint: 'Accepted formats: JPG, PNG - Maximum file size: 10 MB',
    uploadText: 'Upload',
    withError: false,
    wrapperProps: {
        mt: 2
    }
};
