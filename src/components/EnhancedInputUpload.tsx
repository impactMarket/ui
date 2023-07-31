import { Box } from './Box';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { GeneratedPropTypes } from '../types';
import { PulseIcon } from './PulseIcon';
import { Text } from './Typography';
import { colors } from '../theme/colors';
import { generateProps } from 'styled-gen';
import { inputWrapperStyle } from '../theme/fx';
import { mq } from 'styled-gen';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

export type EnhancedInputUploadProps = {
    cancelUploadText: string;
    children?: any;
    disabled?: boolean;
    handleFiles: Function;
    removeFiles: Function;
    hint?: string;
    name?: string;
    uploadText?: string;
    uploadedText?: string;
    uploadingText?: string;
    withError?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & DropzoneOptions;

const InputBoxWrapper = styled.a<GeneratedPropTypes & { [key: string]: any } & { disabled?: boolean }>`
    align-items: start;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')} !important;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    visibility: hidden;

    .default {
        background: linear-gradient(to left, ${colors.n01} 50%, ${colors.p25} 50%) right;
        background-size: 200% 100%;
        border-radius: 12px;
        border: 1px solid ${colors.g200};
        position: absolute;
        transition: background-position 0.5s ease-in-out;
    }

    .show {
        position: relative;
        visibility: visible;
    }

    .uploaded {
        background-position: left;
    }

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

const ActionsWrapper = styled(Box)`
    align-items: center;
    display: flex;
`;

const LoadedText = styled(Text)`
    ${mq.phone(css`
          display: none;
    `)};
`;

const Loader = styled(Box)`
    animation: rotateAnimation 4s linear infinite;

    @keyframes rotateAnimation {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

export const EnhancedInputUpload: React.FC<EnhancedInputUploadProps> = props => {
    const {
        children,
        cancelUploadText,
        disabled,
        handleFiles,
        removeFiles,
        hint,
        name,
        uploadText,
        uploadedText,
        uploadingText,
        withError,
        wrapperProps,
        ...dropzoneOptions
    } = props;

    const [isUploading, setIsUploading] = useState(false);

    const { getRootProps, getInputProps, open } = useDropzone({
        disabled,
        accept: ['image/jpeg', 'image/png'],
        maxFiles: 1,
        maxSize: 10485760,
        noKeyboard: true,
        ...dropzoneOptions,
        onDrop: async file => {
            setIsUploading(true);
            await handleFiles(file);
            setIsUploading(false);
        }
    });

    return (
        <>
            {
                <InputBoxWrapper
                    disabled={disabled}
                    {...wrapperProps}
                    {...getRootProps()}
                    onClick={open}
                    withError={withError}
                >
                    <Box
                        w="100%"
                        className={`${!!children ? 'uploaded' : ''} ${!!children || isUploading ? 'show' : ''} default`}
                        padding="1.5rem 1rem"
                        flex
                        fLayout="between"
                    >
                        <Box flex>
                            <PulseIcon bgP100 borderColor="p50" p600 icon="upload" mr="1rem" />
                            {!!children && <Box mt={0.75}>{children}</Box>}
                        </Box>
                        {!!children && (
                            <ActionsWrapper>
                                <LoadedText sColor={colors.g700} medium>
                                    {uploadedText}
                                </LoadedText>
                                <Box onClick={(e: any) => removeFiles(e)}>
                                    <Icon icon="trash" />
                                </Box>
                            </ActionsWrapper>
                        )}
                        {isUploading && (
                            <ActionsWrapper>
                                <LoadedText sColor={colors.g700} medium>
                                    {uploadingText}
                                </LoadedText>
                                <Loader fLayout="end">
                                    <Icon p600 icon="loader" />
                                </Loader>
                            </ActionsWrapper>
                        )}
                        <InputElement name={name} {...getInputProps()} />
                    </Box>
                </InputBoxWrapper>
            }
            <Box flex>
                {!children && (
                    <Box flex fLayout="center start" fWrap="wrap">
                        <ClickableElement flex fLayout="center" onClick={() => open()}>
                            <Icon p600 icon="upload" />
                            <Text sColor={colors.p500} medium>
                                {uploadText}
                            </Text>
                            <Divider>·</Divider>
                        </ClickableElement>
                        {!!hint && (
                            <Text sColor={withError ? colors.e500 : colors.g500} small fWrap="wrap" maxW="100%">
                                {hint}
                            </Text>
                        )}
                    </Box>
                )}
                {!!children && (
                    <Box flex fLayout="center start">
                        <ClickableElement flex fLayout="center" onClick={(e: any) => removeFiles(e)}>
                            <Text sColor={colors.p500} mt=".5rem" medium>
                                {cancelUploadText}
                            </Text>
                        </ClickableElement>
                    </Box>
                )}
            </Box>
        </>
    );
};

EnhancedInputUpload.displayName = 'EnhancedInputUpload';
