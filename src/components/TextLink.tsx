import { BoolProps, GeneratedPropTypes } from '../types';
import { colors, fonts } from '../theme';
import { ease, generateProps, mq, transitions, variations } from 'styled-gen';
import { setWeightVariations } from '../utils/typographyHelpers';
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

export type TextLinkProps = ColorVariations & BoolProps<typeof fonts.weights> & GeneratedPropTypes;

export const TextLink = styled.a<TextLinkProps>`
    ${transitions('color', 250, ease.outSine)};

    cursor: pointer;
    font-size: inherit;

    ${variations(colorVariations)};
    ${variations(setWeightVariations(fonts.weights))}
    ${generateProps};
`;
