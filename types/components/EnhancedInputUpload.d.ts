import { DropzoneOptions } from 'react-dropzone';
import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type InputUploadProps = {
    children?: any;
    disabled?: boolean;
    handleFiles: Function;
    hint?: string;
    name?: string;
    uploadText?: string;
    withError?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & DropzoneOptions;
export declare const EnhancedInputUpload: React.FC<InputUploadProps>;
