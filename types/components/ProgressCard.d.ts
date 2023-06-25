import { GeneratedPropTypes } from '../types';
import { colors } from '../theme/colors';
import React from 'react';
export declare type ProgressCardProps = {
    children?: any;
    label?: string;
    progress?: number;
    pathColor: keyof typeof colors;
} & GeneratedPropTypes;
export declare const ProgressCard: React.FC<ProgressCardProps>;
