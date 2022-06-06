import { GeneratedPropTypes, MqProp } from '../types';
import { generateProps } from 'styled-gen';
import applyMqProps from '../utils/applyMqProps';
import styled, { css } from 'styled-components';

export const Box = styled.div<{ bgImg?: string; borderRadius?: MqProp<string | number> } & GeneratedPropTypes>`
    ${({ bgImg }) =>
        !!bgImg &&
        css`
            background-image: url('${bgImg}');
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            overflow: hidden;
        `}

    ${({ borderRadius }) =>
        typeof borderRadius !== undefined &&
        applyMqProps(
            borderRadius as string | number,
            (value: number) => css`
                border-radius: ${value};
            `
        )}
    ${generateProps};
`;
