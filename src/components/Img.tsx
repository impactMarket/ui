import { GeneratedPropTypes } from '../types';
import { generateProps } from 'styled-gen';
import React from 'react';
import styled from 'styled-components';

export type ImgProps = {
    alt?: string;
    url: string;
} & GeneratedPropTypes;

export const ImgWrapper = styled.img<GeneratedPropTypes>`
    ${generateProps};
`;

export const Img = (props: ImgProps) => {
    const { alt, url, ...forwardProps } = props;

    return <ImgWrapper alt={alt} src={url} {...forwardProps} />;
};
