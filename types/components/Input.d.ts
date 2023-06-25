import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type InputProps = {
    as?: any;
    button?: any;
    disabled?: boolean;
    hint?: string;
    icon?: string;
    onBlur?: Function;
    onFocus?: Function;
    prefix?: string;
    rows?: number | string;
    suffix?: string;
    withError?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & {
    [key: string]: any;
};
export declare const Input: React.ForwardRefExoticComponent<
    Omit<
        {
            as?: any;
            button?: any;
            disabled?: boolean;
            hint?: string;
            icon?: string;
            onBlur?: Function;
            onFocus?: Function;
            prefix?: string;
            rows?: string | number;
            suffix?: string;
            withError?: boolean;
            wrapperProps?: GeneratedPropTypes;
        } & {
            [key: string]: any;
        },
        'ref'
    > &
        React.RefAttributes<unknown>
>;
