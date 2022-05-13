/* eslint-disable no-nested-ternary */
import { Box } from './Box';
import { Divider } from './Divider';
import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from './Typography';
import { baseShadow, colors } from '../theme';
import { generateProps } from 'styled-gen';
import React from 'react';
import styled from 'styled-components';

// #region ====== style ===
const TableWrapper = styled.div<GeneratedPropTypes>`
    border: 0.063rem solid ${colors.g200};
    border-radius: 0.5rem;
    overflow: hidden;

    ${baseShadow};
    ${generateProps};
`;

const TableOverflow = styled.div`
    display: block;
    overflow-x: auto;
`;

const BaseTable = styled.table`
    background: ${colors.n01};
    width: 100%;
`;

const TableHeader = styled.thead`
    background: ${colors.g50};
`;

const TableBody = styled.tbody`
    & tr:last-child {
        & td {
            border-bottom: 0;
        }
    }
`;

const TableRow = styled.tr``;

const THColumn = styled.th<GeneratedPropTypes>`
    border-bottom: 0.063rem solid ${colors.g200};
    padding: 0.75rem 1.5rem;
    text-align: left;
    vertical-align: top;

    & p {
        word-break: unset;
    }

    ${generateProps};
`;

const TBColumn = styled.td`
    border-bottom: 0.063rem solid ${colors.g200};
    padding: 1.625rem 1.5rem;
    text-align: left;
    vertical-align: middle;
`;
// #endregion === style ===

export type ColumnProps = {
    title?: string;
    value?: string;
    width?: string | number;
    minWidth?: string | number;
    sortable?: boolean;
    render?: Function;
};

export type TableProps = {
    columns: ColumnProps[];
    rows: any;
    pagination?: any;
    handleSort?: any;
    sortKey?: {
        key: string;
        sortDesc: boolean;
    };
} & GeneratedPropTypes;

export const Table: React.FC<TableProps> = props => {
    const { columns, rows, pagination, handleSort, sortKey, ...forwardProps } = props;

    const renderColumnTitle = (column: ColumnProps) => {
        if (column.sortable) {
            return (
                <a onClick={() => handleSort(column.value)}>
                    <Box fLayout="center start" flex>
                        <Text extrasmall medium sColor={column.value === sortKey?.key ? colors.p600 : colors.g500}>
                            {column.title}
                        </Text>
                        <Icon
                            h={0.875}
                            icon={
                                column.value === sortKey?.key
                                    ? sortKey?.sortDesc
                                        ? 'arrowDown'
                                        : 'arrowUp'
                                    : 'arrowDown'
                            }
                            ml={0.5}
                            sColor={column.value === sortKey?.key ? colors.p600 : colors.g500}
                            w={0.875}
                        />
                    </Box>
                </a>
            );
        }

        return (
            <Text extrasmall g500 medium>
                {column.title}
            </Text>
        );
    };

    return (
        <TableWrapper {...forwardProps}>
            <TableOverflow>
                <BaseTable>
                    <TableHeader>
                        {columns?.length > 0 && (
                            <TableRow>
                                {columns.map((column: ColumnProps, index: number) => (
                                    <THColumn
                                        key={index}
                                        minW={column.minWidth}
                                        w={column.width || `${100 / columns.length}%`}
                                    >
                                        {renderColumnTitle(column)}
                                    </THColumn>
                                ))}
                            </TableRow>
                        )}
                    </TableHeader>
                    <TableBody>
                        {rows?.length > 0 &&
                            rows.map((row: any, index: number) => (
                                <TableRow key={index}>
                                    {columns.map((column: ColumnProps, indexColumn: number) => (
                                        <TBColumn key={indexColumn}>
                                            {!!column.render
                                                ? column.render(row)
                                                : column.value
                                                ? row[column.value]
                                                : null}
                                        </TBColumn>
                                    ))}
                                </TableRow>
                            ))}
                    </TableBody>
                </BaseTable>
            </TableOverflow>
            {!!pagination && pagination?.props?.pageCount > 1 && (
                <>
                    <Divider margin={0} />
                    <Box padding="1.25 1.5">{pagination}</Box>
                </>
            )}
        </TableWrapper>
    );
};
