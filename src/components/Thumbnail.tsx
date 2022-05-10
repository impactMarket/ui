import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { colors, imageIconShadow } from '../theme';
import { ease, generateProps, transitions } from 'styled-gen';
import React from 'react';
import styled, { css } from 'styled-components';

// #region ====== style ===
const ImgWrapper = styled.div<GeneratedPropTypes>`
    height: 5.25rem;
    position: relative;
    width: 5.25rem;

    &:hover {
        & div:last-child {
            opacity: 1;
            visibility: visible;
        }
    }

    ${generateProps};
`;

const Img = styled.div<ThumbnailProps>`
    ${({ url }) =>
        !!url &&
        css`
            background-image: url('${url}');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        `}

    background-color: ${colors.g200};
    border-radius: 0.5rem;
    height: 100%;
    width: 100%;
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
// #endregion === style ===

export type ThumbnailProps = {
    handleClick?: any;
    icon?: string;
    url?: string;
} & GeneratedPropTypes;

export const Thumbnail = (props: ThumbnailProps) => {
    const { handleClick, icon, url, ...forwardProps } = props;

    return (
        <ImgWrapper {...forwardProps}>
            <Img url={url} />
            {!!icon && typeof handleClick === 'function' && (
                <IconWrapper onClick={handleClick}>
                    <Icon icon={icon} />
                </IconWrapper>
            )}
        </ImgWrapper>
    );
};
