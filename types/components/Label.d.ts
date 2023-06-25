import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { stateTypes } from '../helpers/applyStateColor';
import React from 'react';
export declare type LabelProps = {
    dot?: string;
    icon?: string;
    content: string | number | React.ReactNode;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;
export declare const Label: React.FC<LabelProps>;
