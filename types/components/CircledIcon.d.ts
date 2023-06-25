import { BoolProps, BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { stateTypes } from '../helpers/applyStateColor';
import React from 'react';
export declare const circledIconSizeVariations: {
    default: import('styled-components').RuleSet<object>;
    small: import('styled-components').RuleSet<object>;
    medium: import('styled-components').RuleSet<object>;
    large: import('styled-components').RuleSet<object>;
    superlarge: import('styled-components').RuleSet<object>;
    extralarge: import('styled-components').RuleSet<object>;
};
export declare type CircledIconProps = {
    icon: string;
} & BoolProps<typeof circledIconSizeVariations> &
    BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;
export declare const CircledIcon: React.FC<CircledIconProps>;
