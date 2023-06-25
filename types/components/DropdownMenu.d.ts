import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type DropdownMenuProps = {
    title?: string | React.ReactNode;
    icon?: string | undefined;
    items: React.ReactNode[];
    asButton?: boolean;
    rtl?: boolean;
    wrapperProps?: GeneratedPropTypes;
    headerProps?: GeneratedPropTypes;
    titleColor?: string;
};
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
