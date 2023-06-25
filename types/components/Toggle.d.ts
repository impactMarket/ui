import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type ToggleProps = {
    disabled?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & {
    [key: string]: any;
};
export declare const Toggle: React.ForwardRefExoticComponent<
    Omit<
        {
            disabled?: boolean | undefined;
            wrapperProps?: GeneratedPropTypes | undefined;
        } & {
            [key: string]: any;
        },
        'ref'
    > &
        React.RefAttributes<unknown>
>;
