export declare type SizeType = number | number[];
export declare const getSize: (size?: SizeType | undefined, isWidth?: boolean | undefined) => number | undefined;
export declare const setSize: (
    size?: SizeType | undefined,
    defaultSize?: number
) => import('styled-components').RuleSet<object>;
