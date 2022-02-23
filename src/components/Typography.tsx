import { BoolProps, GeneratedPropTypes } from '../types';
import { fonts, typography } from '../theme';
import { generateProps, variations } from 'styled-gen';
import { setSizeVariations, setWeightVariations } from '../utils/typographyHelpers';
import styled, { css } from 'styled-components';

const overflowVariations = {
    ellipsis: css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `
};

const commonStyle = css`
    font-family: ${fonts.families.sans};

    ${variations(overflowVariations)};
    ${variations(setWeightVariations(fonts.weights))};

    ${generateProps};
`;

type CommonProps = GeneratedPropTypes & BoolProps<typeof overflowVariations> & BoolProps<typeof fonts.weights>;

/*
 * Display
 */

export type DisplayProps = CommonProps & BoolProps<typeof typography.display>;

export const Display = styled.h1<DisplayProps>`
    ${commonStyle};

    ${variations(setSizeVariations(typography.display as any, 'small'))};
`;

/*
 * Text
 */

export type TextProps = CommonProps & BoolProps<typeof typography.text>;

export const Text = styled.p<TextProps>`
    ${commonStyle};

    ${variations(setSizeVariations(typography.text as any))};
`;
