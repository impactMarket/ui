import { GeneratedPropTypes } from '../types';
import { colors } from '../theme';
import { ease, generateProps } from 'styled-gen';
import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

const load = keyframes`
     from {
        left: -100%;
    }

    to {
        left: 100%;
    }
`;

export type SkeletonElementProps = {
    overColor?: boolean;
} & GeneratedPropTypes;

export const SkeletonElement = styled.div<SkeletonElementProps>`
    background-color: ${({ overColor }: any) => (overColor ? rgba(colors.g200, 0.5) : colors.g100)};
    border-radius: 0.5rem;
    width: 100%;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        display: block;
        position: absolute;
        left: -100%;
        top: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(to right, transparent 0%, ${colors.g200} 50%, transparent 100%);
        animation: ${load} 1s ${ease.inOutCirc} infinite;
    }

    ${generateProps};
`;
