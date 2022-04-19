import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { colors } from '../theme';
import { generateProps } from 'styled-gen';
import { size } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

type PulseIconProps = {
    icon: string;
    size?: number;
    borderColor?: keyof typeof colors;
} & GeneratedPropTypes;

type WrapperProps = { baseSize: number; borderColor: string; borderSize: number } & GeneratedPropTypes;

const PulseIconWrapper = styled.div<WrapperProps>`
    ${({ baseSize, borderColor, borderSize }) => css`
        ${size(`${baseSize}rem`)};

        box-shadow: inset 0 0 0 ${borderSize}rem ${borderColor};
    `}

    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    ${generateProps};
`;

export const PulseIcon: React.FC<PulseIconProps> = props => {
    const { borderColor: colorCode, icon, size, ...forwardProps } = props;

    const borderColor = colors[colorCode || 'g50'];

    const baseSize = size || 2.75;
    const borderSize = baseSize / 7;
    const iconSize = baseSize / 2.25;

    return (
        <PulseIconWrapper {...forwardProps} baseSize={baseSize} borderColor={borderColor} borderSize={borderSize}>
            <Icon icon={icon} size={iconSize} />
        </PulseIconWrapper>
    );
};
