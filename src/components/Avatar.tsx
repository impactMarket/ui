import { BoolProps, GeneratedPropTypes } from '../types';
import { colors } from '../theme';
import { generateProps, variations } from 'styled-gen';
import { size } from 'polished';
import styled, { css } from 'styled-components';

export const avatarSizeVariations = {
    default: css`
        ${size('2.5rem')};
    `,

    large: css`
        ${size('7.5rem')};
    `,

    small: css`
        ${size('2rem')};
    `
};

export type AvatarProps = {
    url?: string;
} & GeneratedPropTypes &
    BoolProps<typeof avatarSizeVariations>;

export const Avatar = styled.div<AvatarProps>`
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
    flex-shrink: 0;
    overflow: hidden;

    ${variations(avatarSizeVariations)};
    ${generateProps};
`;
