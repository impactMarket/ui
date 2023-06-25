import { GeneratedPropTypes } from '../types';
import React from 'react';
export declare type CountdownProps = {
    date?: Date | string;
    labels?: {
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    };
    onEnd?: Function;
    withDays?: boolean;
} & GeneratedPropTypes;
export declare const Countdown: React.FC<CountdownProps & GeneratedPropTypes>;
