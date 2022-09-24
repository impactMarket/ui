import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { colors, imageIconShadow } from '../theme';
import { ease, generateProps, transitions } from 'styled-gen';
import React from 'react';
import styled from 'styled-components';

export const ImgWrapper = styled.img<GeneratedPropTypes>`
    ${generateProps};
`;

export const ImgClickWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;

    &:hover {
        & div:last-child {
            opacity: 1;
            visibility: visible;
        }
    }
`;

const IconWrapper = styled.div`
    background: ${colors.n01};
    border: 0.063rem solid ${colors.g300};
    border-radius: 0.5rem;
    cursor: pointer;
    left: 50%;
    opacity: 0;
    padding: 0.563rem 0.625rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    visibility: hidden;

    ${imageIconShadow};
    ${transitions(['background', 'opacity'], 350, ease.inOutCubic)};

    &:hover {
        background: ${colors.g300};
    }
`;

export type ImgProps = {
    alt?: string;
    handleClick?: any;
    icon?: string;
    url: string;
} & GeneratedPropTypes;

export const Img = (props: ImgProps) => {
    const { alt, url, ...forwardProps } = props;

    return <ImgWrapper alt={alt} src={url} {...forwardProps} />;
};

export const ImgClick = (props: ImgProps) => {
    const { alt, handleClick, icon, url, ...forwardProps } = props;

    return (
        <ImgClickWrapper>
            <ImgWrapper alt={alt} src={url} style={{ height: '100%', width: '100%' }} {...forwardProps} />
            {handleClick && !!icon && typeof handleClick === 'function' && (
                <IconWrapper onClick={handleClick}>
                    <Icon icon={icon} />
                </IconWrapper>
            )}
        </ImgClickWrapper>
    );
};
