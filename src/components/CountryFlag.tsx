import { GeneratedPropTypes } from '../types';
import { generateProps } from 'styled-gen';
import React from 'react';
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
    display: inline-block;
    width: auto;

    & .fi {
        ${({ size }) => setSize(size)};
        border-radius: 50%;
    }

    ${generateProps};
`;

export type CountryFlagProps = {
    countryCode: string;
    size?: number | number[] | undefined;
} & GeneratedPropTypes;

export const CountryFlag: React.FC<CountryFlagProps> = props => {
    const { countryCode, ...forwardProps } = props;

    return (
        <Wrapper {...forwardProps}>
            <span className={`fi fi-${countryCode.toLowerCase()} fis`} />
        </Wrapper>
    );
};
