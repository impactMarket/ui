import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type PaginationProps = {
    currentPage: number;
    disabled?: boolean;
    pageCount: number;
    handlePageClick: any;
    breakLabel?: string;
    nextLabel?: string;
    nextIcon?: string;
    previousLabel?: string;
    previousIcon?: string;
    pageRangeDisplayed?: number;
    marginPagesDisplayed?: number;
    mobileText?: any;
} & GeneratedPropTypes;
export declare const Pagination: React.FC<PaginationProps>;
