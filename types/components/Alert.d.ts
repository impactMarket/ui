import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { stateTypes } from '../helpers/applyStateColor';
import React from 'react';
export declare type AlertProps = {
    button?: () => void;
    icon: string;
    title?: string | React.ReactNode;
    message?: string | React.ReactNode;
    handleClose?: () => void;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;
export declare const Alert: React.FC<AlertProps>;
