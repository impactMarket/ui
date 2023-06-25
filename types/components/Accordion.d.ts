import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type AccordionItemProps = {
    children: React.ReactNode;
    handleItemClick?: any;
    scrollIntoView?: any;
    isActive?: boolean;
    title: string;
};
export declare const AccordionItem: React.FC<AccordionItemProps>;
export declare type AccordionProps = {
    children: React.ReactNode | React.ReactNode[];
} & GeneratedPropTypes;
export declare const Accordion: React.FC<AccordionProps>;
