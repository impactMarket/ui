/* eslint-disable sort-keys */
import { BoolProps, GeneratedPropTypes } from '../types';
import { Dot } from './Dot';
import { colors } from '../theme';
import { generateProps, variations } from 'styled-gen';
import { size } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

export const avatarSizeVariations = {
    default: css`
        ${size('2.5rem')};
    `,

    large: css`
        ${size('7.5rem')};
    `,

    medium: css`
        ${size('5.313rem')};
    `,

    small: css`
        ${size('4.125rem')};
    `,

    extrasmall: css`
        ${size('2rem')};
    `
};

const Wrapper = styled.div<AvatarProps>`
    flex-shrink: 0;
    position: relative;

    ${variations(avatarSizeVariations)};
    ${generateProps};
`;

const Image = styled.div<{ url?: string }>`
    ${({ url }) =>
        !!url &&
        css`
            background-image: url('${url}');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        `}

    background-color: ${colors.g200};
    border-radius: 50%;
    height: 100%;
    overflow: hidden;
    width: 100%;
`;

const DotWrapper = styled.div`
    background-color: ${colors.n01};
    border: 0.094rem solid ${colors.n01};
    border-radius: 50%;
    bottom: 0;
    position: absolute;
    right: 0;
`;

export type AvatarProps = {
    dot?: string;
    url?: string;
} & GeneratedPropTypes &
    BoolProps<typeof avatarSizeVariations>;

export const Avatar: React.FC<AvatarProps> = props => {
    const { dot, url, ...otherProps } = props;

    return (
        <Wrapper {...otherProps}>
            <Image url={url} />
            {!!dot && (
                <DotWrapper>
                    <Dot {...{ [dot]: true }} h={0.625} w={0.625} />
                </DotWrapper>
            )}
        </Wrapper>
    );
};
