/* eslint-disable no-nested-ternary */
import { Breakpoint, GeneratedPropTypes, MqProp } from '../types';
import { generateProps } from 'styled-gen';
import React from 'react';
import applyMqProps from '../utils/applyMqProps';
import styled, { css } from 'styled-components';

type Props = {
    colSpan: MqProp<number | number[]>;
    colProps?: GeneratedPropTypes;
    cols: MqProp<number>;
    reverse?: Breakpoint;
};

const units = 'rem';

const Wrapper = styled.div<Props & GeneratedPropTypes>`
    display: flex;
    flex-wrap: wrap;

    ${({ reverse }) =>
        reverse &&
        applyMqProps(
            { [reverse]: true },
            css`
                flex-direction: row-reverse;
            `
        )}

    ${({ colSpan }) =>
        typeof colSpan !== undefined &&
        applyMqProps(
            colSpan as MqProp<number | number[]>,
            (value: number) => css`
                margin: -${(Array.isArray(value) ? value[0] : value || 0) / 2}${units} -${(Array.isArray(value)
                        ? typeof value[1] !== undefined
                            ? value[1]
                            : value[0]
                        : value || 0) / 2}${units};
            `
        )}

    & > * {
        ${({ cols, colSpan }) => css`
            ${applyMqProps(
                cols,
                (value: number) => css`
                    width: ${!!value && `${100 / value}%`};
                `
            )};

            ${applyMqProps(
                colSpan as MqProp<number | number[]>,
                (value: number) => css`
                    padding: ${Array.isArray(value) ? value[0] / 2 : value / 2 || 0}${units} ${Array.isArray(value)
                            ? (typeof value[1] !== undefined ? value[1] : value[0]) / 2
                            : value / 2 || 0}${units};
                `
            )}
        `}
    }

    ${generateProps}
`;

const Col = styled.div<GeneratedPropTypes>`
    flex-shrink: 0;

    ${generateProps}
`;

export const Grid: React.FC<Props> = props => {
    const { children, colProps, ...forwardProps } = props;

    return (
        <Wrapper {...forwardProps}>
            {React.Children.toArray(children).map((child, index) => (
                <Col {...colProps} key={index}>
                    {child}
                </Col>
            ))}
        </Wrapper>
    );
};

Grid.defaultProps = {
    colProps: undefined,
    colSpan: 2,
    cols: 3,
    reverse: undefined
};
