import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type ColumnProps = {
    title?: string;
    value?: string;
    width?: string | number;
    minWidth?: string | number;
    sortable?: boolean;
    render?: Function;
};
export declare type TableProps = {
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
export declare const Table: React.FC<TableProps>;
