import { BoolProps, GeneratedPropTypes } from '../types';
import { fonts } from '../theme';
import { generateProps, variations } from 'styled-gen';
import styled, { css } from 'styled-components';

export const badgeSizeVariations = {
    default: css`
        border-radius: 1rem;
        font-size: 0.875rem;
        font-weight: ${fonts.weights.medium};
        padding: 0.25rem 0.75rem;
    `
};

export type BadgeProps = GeneratedPropTypes & BoolProps<typeof badgeSizeVariations>;

export const Badge = styled.div<GeneratedPropTypes>`
    display: inline-Flex;
    line-height: 1.25;

    ${variations(badgeSizeVariations)}

    ${generateProps};
`;
