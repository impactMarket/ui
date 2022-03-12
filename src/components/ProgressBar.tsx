/* eslint-disable no-nested-ternary */
import { GeneratedPropTypes } from '../types';
import { colors } from '../theme/colors';
import { ease, generateProps, transitions } from 'styled-gen';
import { position } from 'polished';
import styled from 'styled-components';

export type ProgressBarProps = {
    progress: number | string;
} & GeneratedPropTypes;

export const ProgressBar = styled.div<ProgressBarProps>`
    background-color: ${colors.p50};
    border-radius: 0.25rem;
    height: 0.5rem;
    overflow: hidden;
    position: relative;

    &::before {
        ${position('absolute', 0, null, 0, 0)};
        ${transitions('width', 250, ease.inOutCirc)};

        background-color: ${colors.p400};
        border-radius: 0.25rem;
        content: '';
        height: 100%;
        width: ${({ progress }) => (!isNaN(+progress) ? (+progress > 100 ? 100 : +progress) : 0)}%;
    }

    ${generateProps};
`;
