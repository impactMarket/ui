import { BoolProps, GeneratedPropTypes } from '../types';
import React from 'react';
export declare const avatarSizeVariations: {
    default: import('styled-components').RuleSet<object>;
    large: import('styled-components').RuleSet<object>;
    medium: import('styled-components').RuleSet<object>;
    small: import('styled-components').RuleSet<object>;
    extrasmall: import('styled-components').RuleSet<object>;
};
export declare type AvatarProps = {
    dot?: string;
    url?: string;
} & GeneratedPropTypes &
    BoolProps<typeof avatarSizeVariations>;
export declare const Avatar: React.FC<AvatarProps>;
