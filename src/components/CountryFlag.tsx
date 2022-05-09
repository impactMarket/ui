import { GeneratedPropTypes } from '../types';
import { colors } from '../theme';
import { generateProps } from 'styled-gen';
import React from 'react';
// import flags from '../../flags';
import styled, { css } from 'styled-components';

const setSize = (size: number | number[] | undefined) => {
    const baseSize = 1.25;

    if (Array.isArray(size)) {
        return css`
            height: ${size?.[0] || baseSize}rem;
            width: ${size?.[1] || baseSize}rem;
        `;
    }

    return css`
        height: ${size || baseSize}rem;
        width: ${size || baseSize}rem;
    `;
};

const Wrapper = styled.div<{ size?: number | number[] | undefined } & GeneratedPropTypes>`
    display: inline-flex;
    width: auto;

    img {
        ${({ size }) => setSize(size)};

        background-color: ${colors.g200};
        border-radius: 50%;
    }

    ${generateProps};
`;

export type CountryFlagProps = {
    // countryCode: keyof typeof flags;
    size?: number | number[] | undefined;
} & GeneratedPropTypes;

export const CountryFlag: React.FC<CountryFlagProps> = props => {
    const { ...forwardProps } = props;

    // const img = flags[countryCode];

    // if (!img) {
    //     return null;
    // }

    return (
        <Wrapper {...forwardProps}>
            <img src="https://picsum.photos/120" />
        </Wrapper>
    );
};
