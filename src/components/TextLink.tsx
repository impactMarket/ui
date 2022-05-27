import { BoolProps, GeneratedPropTypes } from '../types';
import { colors, fonts, typography } from '../theme';
import { ease, generateProps, mq, transitions, variations } from 'styled-gen';
import { setSizeVariations, setWeightVariations } from '../utils/typographyHelpers';
import styled, { css } from 'styled-components';

const setColorVariation = (color: string, hover: string) => css`
    color: ${color};

    ${mq.tabletLandscape(css`
        &:not(:disabled) {
            &:hover {
                color: ${hover};
            }
        }
    `)}
`;

const colorVariations = {
    default: setColorVariation(colors.p600, colors.p700)
};

type ColorVariations = BoolProps<typeof colorVariations>;

export type TextLinkProps = { disabled?: boolean } & ColorVariations &
    BoolProps<typeof fonts.weights> &
    BoolProps<typeof typography.text> &
    GeneratedPropTypes;

export const TextLink = styled.a<TextLinkProps>`
    ${transitions('color', 250, ease.outSine)};

    cursor: pointer;

    ${({ disabled }) => disabled && `opacity: 0.5; pointer-events: none;`};

    ${variations(colorVariations)};
    ${variations(setWeightVariations(fonts.weights))};
    ${variations(setSizeVariations(typography.text as any))};
    ${generateProps};
`;
