import { Box } from './Box';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { GeneratedPropTypes } from '../types';
import { PulseIcon } from './PulseIcon';
import { Text } from './Typography';
import { colors } from '../theme/colors';
import { generateProps } from 'styled-gen';
import { inputWrapperStyle } from '../theme/fx';
import React, { useEffect } from 'react';
import styled from 'styled-components';

export type InputUploadProps = {
    children?: any;
    handleFiles: Function;
    hint?: string;
    name?: string;
    withError?: boolean;
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

export const InputUpload: React.FC<InputUploadProps> = props => {
    const { children, handleFiles, hint, name, withError, wrapperProps, ...dropzoneOptions } = props;

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
        <>
            <InputBoxWrapper {...wrapperProps} {...getRootProps()} onClick={open} withError={withError}>
                <PulseIcon bgG100 borderColor="g50" g600 icon="upload" />
                {!!children && <Box mt={0.75}>{children}</Box>}
                <InputElement name={name} {...getInputProps()} />
            </InputBoxWrapper>
            {!!hint && (
                <Text pt={0.375} sColor={withError ? colors.e500 : colors.g500} small>
                    {hint}
                </Text>
            )}
        </>
    );
};

InputUpload.displayName = 'InputUpload';
