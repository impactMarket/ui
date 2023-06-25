import { BoolProps, Breakpoint, GeneratedPropTypes } from '../types';
import React from 'react';
export declare const buttonColorVariations: {
    default: import('styled-components').RuleSet<object>;
    error: import('styled-components').RuleSet<object>;
    gray: import('styled-components').RuleSet<object>;
    info: import('styled-components').RuleSet<object>;
    secondary: import('styled-components').RuleSet<object>;
    success: import('styled-components').RuleSet<object>;
};
export declare const buttonSizeVariations: {
    default: import('styled-components').RuleSet<object>;
    large: import('styled-components').RuleSet<object>;
    xl: import('styled-components').RuleSet<object>;
};
declare type ButtonBaseProps = {
    as?: any;
    className?: string;
    children?: any | any[];
    disabled?: boolean;
    href?: string;
    icon?: string;
    fluid?: Breakpoint | boolean;
    onClick?: () => void;
    reverse?: boolean;
    isLoading?: boolean;
    title?: string;
    type?: string;
};
declare type ButtonColorVariations = BoolProps<typeof buttonColorVariations>;
declare type ButtonSizeVariations = BoolProps<typeof buttonSizeVariations>;
export declare type ButtonProps = GeneratedPropTypes & ButtonBaseProps & ButtonColorVariations & ButtonSizeVariations;
export declare const Button: (props: ButtonProps) => React.JSX.Element;
export {};
