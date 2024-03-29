/* eslint-disable no-nested-ternary */
import { Box } from './Box';
import { Divider } from './Divider';
import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Spinner } from './Spinner';
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

const TableOverflow = styled.div<{ isLoading: boolean; noResults: boolean }>`
    display: block;
    overflow-x: ${({ isLoading, noResults }) => (isLoading || noResults ? 'hidden' : 'auto')};
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

    & .disabled {
        opacity: 0.5;
        pointer-events: none;
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
    isLoading: boolean;
    rows: any;
    noResults: string;
    pagination?: any;
    handleSort?: any;
    sortKey?: {
        key: string;
        sortDesc: boolean;
    };
} & GeneratedPropTypes;

export const Table: React.FC<TableProps> = props => {
    const { columns, isLoading, rows, noResults, pagination, handleSort, sortKey, ...forwardProps } = props;

    const renderColumnTitle = (column: ColumnProps) => {
        if (column.sortable) {
            return (
                <a
                    className={isLoading || rows?.length === 0 ? 'disabled' : ''}
                    onClick={() => !isLoading && rows?.length > 0 && handleSort(column.value)}
                >
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
            <Text className={isLoading || rows?.length === 0 ? 'disabled' : ''} extrasmall g500 medium>
                {column.title}
            </Text>
        );
    };

    return (
        <TableWrapper {...forwardProps}>
            <TableOverflow isLoading={isLoading} noResults={rows?.length === 0}>
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
                    {!isLoading && rows?.length > 0 && (
                        <TableBody>
                            {rows.map((row: any, index: number) => (
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
                    )}
                </BaseTable>
            </TableOverflow>
            {isLoading && (
                <Box padding="2 0">
                    <Spinner g700 isActive margin="auto" />
                </Box>
            )}
            {!isLoading && rows?.length === 0 && !!noResults && (
                <Box padding="2 0">
                    <Text center g700>
                        {noResults}
                    </Text>
                </Box>
            )}
            {!!pagination && pagination?.props?.pageCount > 1 && rows?.length > 0 && (
                <>
                    <Divider margin={0} />
                    <Box padding="1.25 1.5">{pagination}</Box>
                </>
            )}
        </TableWrapper>
    );
};
