import { CircleFlag } from 'react-circle-flags';
import { GeneratedPropTypes } from '../types';
import { generateProps } from 'styled-gen';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<{ size?: number | number[] | undefined } & GeneratedPropTypes>`
    display: inline-flex;
    width: auto;

    ${generateProps};
`;

export type CountryFlagProps = {
    countryCode: string;
    height?: number;
} & GeneratedPropTypes;

export const CountryFlag: React.FC<CountryFlagProps> = props => {
    const { countryCode, height, ...forwardProps } = props;

    return (
        <Wrapper {...forwardProps}>
            <CircleFlag countryCode={countryCode.toLowerCase()} height={height ? height * 16 : 24} />
        </Wrapper>
    );
};
