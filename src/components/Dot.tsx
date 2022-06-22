import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { applyDotStateColor, stateTypes } from '../helpers/applyStateColor';
import { generateProps, variations } from 'styled-gen';
import styled from 'styled-components';

const dotColorVariations = stateTypes.reduce(
    (results, type) => ({ ...results, [type === 'info' ? 'default' : type]: applyDotStateColor(type) }),
    {}
);

export type DotProps = BoolPropsFromArray<typeof stateTypes> & GeneratedPropTypes;

export const Dot = styled.div<DotProps>`
    border-radius: 50%;
    height: 0.5rem;
    width: 0.5rem;

    ${variations(dotColorVariations)};
    ${generateProps};
`;
