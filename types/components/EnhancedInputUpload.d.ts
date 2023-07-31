import { DropzoneOptions } from 'react-dropzone';
import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type EnhancedInputUploadProps = {
    cancelUploadText: string;
    children?: any;
    disabled?: boolean;
    handleFiles: Function;
    hint?: string;
    name?: string;
    removeFiles: Function;
    uploadedText?: string;
    uploadingText?: string;
    uploadText?: string;
    withError?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & DropzoneOptions;
export declare const EnhancedInputUpload: React.FC<EnhancedInputUploadProps>;
