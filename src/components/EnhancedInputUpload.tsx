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

export type EnhancedInputUploadProps = {
    children?: any;
    disabled?: boolean;
    handleFiles: Function;
    hint?: string;
    name?: string;
    uploadText?: string;
    withError?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & DropzoneOptions;

const InputBoxWrapper = styled.a<GeneratedPropTypes & { [key: string]: any } & { disabled?: boolean }>`
    align-items: start;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')} !important;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;

    ${inputWrapperStyle};

    padding: 0rem;

    ${generateProps}
`;

const InputElement = styled.input``;

const Icon = styled(PulseIcon)`
    box-shadow: none;
`;

const Divider = styled.span`
    margin: 0 0.5rem;
`;

const ClickableElement = styled(Box)<{ disabled?: boolean }>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')} !important;
`;

export const EnhancedInputUpload: React.FC<EnhancedInputUploadProps> = props => {
    const { children, disabled, handleFiles, hint, name, uploadText, withError, wrapperProps, ...dropzoneOptions } =
        props;

    const { acceptedFiles, getRootProps, getInputProps, open } = useDropzone({
        // Disable click and keydown behavior
        disabled,
        noClick: true,
        noKeyboard: true,
        ...dropzoneOptions
    });

    useEffect(() => {
        handleFiles(acceptedFiles);
    }, [acceptedFiles]);

    return (
        <>
            <InputBoxWrapper
                disabled={disabled}
                {...wrapperProps}
                {...getRootProps()}
                onClick={open}
                withError={withError}
            >
                <Box w="35%" bgP25 padding="1.5rem 1rem" flex>
                    <PulseIcon bgP100 borderColor="p50" p600 icon="upload" mr="1rem" />
                    {!!children && <Box mt={0.75}>{children}</Box>}
                    <InputElement name={name} {...getInputProps()} />
                </Box>
            </InputBoxWrapper>
            <Box flex>
                <Box flex fLayout="center">
                    <ClickableElement flex fLayout="center" onClick={open}>
                        <Icon p600 icon="upload" />
                        <Text sColor={colors.p500} medium>
                            {uploadText}
                        </Text>
                        <Divider>·</Divider>
                    </ClickableElement>
                    {!!hint && (
                        <Text sColor={withError ? colors.e500 : colors.g500} small>
                            {hint}
                        </Text>
                    )}
                </Box>
            </Box>
        </>
    );
};

EnhancedInputUpload.displayName = 'EnhancedInputUpload';
