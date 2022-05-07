/* eslint-disable no-nested-ternary */
import { Breakpoint, GeneratedPropTypes, MqProp } from '../types';
import { generateProps } from 'styled-gen';
import React from 'react';
import applyMqProps from '../utils/applyMqProps';
import styled, { css } from 'styled-components';

export type RowProps = {
    colSpan?: MqProp<number | number[]>;
    colProps?: GeneratedPropTypes;
    cols?: MqProp<number>;
    reverse?: Breakpoint;
} & GeneratedPropTypes;

const units = 'rem';

export const Row = styled.div<{ auto?: boolean } & RowProps & GeneratedPropTypes>`
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

    ${({ colSpan = 2 }) =>
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

    ${({ auto, cols }) =>
        auto &&
        css`
            & > .grid-col {
                ${applyMqProps(
                    cols,
                    (value: number) => css`
                        width: ${!!value && `${100 / value}%`};
                    `
                )};
            }
        `}

    & > * {
        ${({ colSpan = 2 }) => css`
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

const GridCol = styled.div<GeneratedPropTypes>`
    flex-shrink: 0;

    ${generateProps}
`;

export const Col = styled.div<{ colSize?: MqProp<number | boolean | string> } & GeneratedPropTypes>`
    flex-shrink: 0;

    ${({ colSize }) => css`
        ${applyMqProps(
            colSize as MqProp<number>,
            (value: number) => css`
                display: ${typeof value === 'boolean' && !value && 'none'};
                width: ${typeof value === 'number' ? `${(value / 12) * 100}%` : value};
            `
        )};
    `};

    ${generateProps}
`;

export const Grid: React.FC<RowProps> = props => {
    const { children, colProps, ...forwardProps } = props;

    return (
        <Row {...forwardProps} auto>
            {React.Children.toArray(children).map((child: any, index) => (
                <GridCol className="grid-col" {...colProps} key={index}>
                    {child}
                </GridCol>
            ))}
        </Row>
    );
};

Grid.defaultProps = {
    colProps: undefined,
    colSpan: 2,
    cols: 3,
    reverse: undefined
};
