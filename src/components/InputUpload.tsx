import { Box } from './Box';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { GeneratedPropTypes } from '../types';
import { PulseIcon } from './PulseIcon';
import { generateProps } from 'styled-gen';
import { inputWrapperStyle } from '../theme/fx';
import React, { useEffect } from 'react';
import styled from 'styled-components';

export type InputUploadProps = {
    children?: any;
    handleFiles: Function;
    wrapperProps?: GeneratedPropTypes;
} & DropzoneOptions;

const InputBoxWrapper = styled.a<GeneratedPropTypes & { [key: string]: any }>`
    align-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    ${inputWrapperStyle};

    padding: 1rem;

    ${generateProps}
`;

const InputElement = styled.input``;

export const InputUpload = React.forwardRef((props: InputUploadProps, ref) => {
    const { children, handleFiles, wrapperProps, ...dropzoneOptions } = props;

    const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
        // Disable click and keydown behavior
        noClick: true,
        noKeyboard: true,
        ...dropzoneOptions
    });

    useEffect(() => {
        handleFiles(acceptedFiles);
    }, [acceptedFiles]);

    return (
        <InputBoxWrapper {...wrapperProps} {...getRootProps()} onClick={open}>
            <PulseIcon bgG100 borderColor="g50" g600 icon="upload" />
            {!!children && <Box mt={0.75}>{children}</Box>}
            <InputElement {...getInputProps()} ref={ref} />
        </InputBoxWrapper>
    );
});

InputUpload.displayName = 'InputUpload';
