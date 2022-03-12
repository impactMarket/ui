import { GeneratedPropTypes } from '../types';
import { baseShadow } from '../theme';
import { colors } from '../theme/colors';
import { generateProps } from 'styled-gen';
import styled from 'styled-components';

export const Card = styled.div<GeneratedPropTypes>`
    ${baseShadow};

    background-color: ${colors.n01};
    border-radius: 0.5rem;
    display: inline-flex;
    padding: 1rem;
    width: 100%;

    ${generateProps};
`;
