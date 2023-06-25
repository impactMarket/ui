// / <reference types="react" />
import { BoolProps, GeneratedPropTypes } from '../types';
export declare const badgeSizeVariations: {
    default: import('styled-components').RuleSet<object>;
};
export declare type BadgeProps = GeneratedPropTypes & BoolProps<typeof badgeSizeVariations>;
export declare const Badge: import('styled-components').IStyledComponent<
    'web',
    import('styled-components/dist/types').Substitute<
        Omit<
            import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
            'ref'
        > & {
            ref?:
                | ((instance: HTMLDivElement | null) => void)
                | import('react').RefObject<HTMLDivElement>
                | null
                | undefined;
        },
        GeneratedPropTypes
    >
>;
