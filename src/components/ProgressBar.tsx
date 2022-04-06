/* eslint-disable no-nested-ternary */
import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { applyProgressBarStateColor, stateTypes } from '../helpers/applyStateColor';
import { colors } from '../theme/colors';
import { ease, generateProps, transitions, variations } from 'styled-gen';
import { position } from 'polished';
import styled from 'styled-components';

const alertColorVariations = stateTypes.reduce(
    (results, type) => ({ ...results, [type === 'info' ? 'default' : type]: applyProgressBarStateColor(type) }),
    {}
);

export type ProgressBarProps = {
    progress: number | string;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;

export const ProgressBar = styled.div<ProgressBarProps>`
    background-color: ${colors.p50};
    border-radius: 0.25rem;
    height: 0.5rem;
    overflow: hidden;
    position: relative;

    &::before {
        ${position('absolute', 0, null, 0, 0)};
        ${transitions('width', 250, ease.inOutCirc)};
        ${variations(alertColorVariations)};

        border-radius: 0.25rem;
        content: '';
        height: 100%;
        width: ${({ progress }) => (!isNaN(+progress) ? (+progress > 100 ? 100 : +progress) : 0)}%;
    }

    ${generateProps};
`;
