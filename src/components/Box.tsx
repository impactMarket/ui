import { GeneratedPropTypes } from '../types';
import { generateProps } from 'styled-gen';
import styled, { css } from 'styled-components';

export const Box = styled.div<{ bgImg?: string } & GeneratedPropTypes>`
    ${({ bgImg }) =>
        !!bgImg &&
        css`
            background-image: url('${bgImg}');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
        `}
    ${generateProps};
`;
