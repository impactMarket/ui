import { BadgeProps } from './Badge';
import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type ComposedCardProps = {
    badgeProps?: BadgeProps;
    children?: any;
    content?: any;
    heading?: any;
    image?: string;
    imageBackgroundColor?: string;
    label?: string;
    onClick?: () => {};
} & GeneratedPropTypes;
export declare const ComposedCard: React.FC<ComposedCardProps>;
