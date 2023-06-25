import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare const ImgWrapper: import('styled-components').IStyledComponent<
    'web',
    import('styled-components/dist/types').Substitute<
        Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'ref'> & {
            ref?: React.RefObject<HTMLImageElement> | ((instance: HTMLImageElement | null) => void) | null | undefined;
        },
        GeneratedPropTypes
    >
>;
export declare const ImgClickWrapper: import('styled-components').IStyledComponent<
    'web',
    Omit<
        Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> & {
            ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
        },
        never
    >
>;
export declare type ImgProps = {
    alt?: string;
    handleClick?: any;
    icon?: string;
    url: string;
} & GeneratedPropTypes;
export declare const Img: (props: ImgProps) => React.JSX.Element;
export declare const ImgClick: (props: ImgProps) => React.JSX.Element;
