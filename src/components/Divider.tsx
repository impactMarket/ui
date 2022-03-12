import { GeneratedPropTypes } from '../types';
import { colors } from '../theme/colors';
import { generateProps } from 'styled-gen';
import styled from 'styled-components';

export const Divider = styled.div<GeneratedPropTypes>`
    background-color: ${colors.g200};
    display: block;
    height: 0.0625rem;
    margin: 1rem 0;
    width: 100%;

    ${generateProps};
`;
