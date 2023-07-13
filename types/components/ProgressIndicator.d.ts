import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type ProgressIndicatorProps = {
    steps: number;
    onStepClick?: Function;
    currentStep?: number;
    stepsTitles: Array<string>;
} & GeneratedPropTypes;
export declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;
