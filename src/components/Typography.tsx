import { BoolProps, GeneratedPropTypes } from '../types';
import { fonts, typography } from '../theme';
import { generateProps, variations } from 'styled-gen';
import { setSizeVariations, setWeightVariations } from '../utils/typographyHelpers';
import styled, { css } from 'styled-components';

const miscVariations = {
    ellipsis: css`
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    `,

    uppercase: css`
        text-transform: uppercase;
    `
};

const commonStyle = css`
    flex-shrink: 0;
    font-family: ${fonts.families.sans};
    white-space: pre-wrap;
    word-break: break-word;

    ${variations(miscVariations)};
    ${variations(setWeightVariations(fonts.weights))};

    ${generateProps};
`;

type CommonProps = { children?: any | any[] } & GeneratedPropTypes &
    BoolProps<typeof miscVariations> &
    BoolProps<typeof fonts.weights>;

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
