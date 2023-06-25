// / <reference types="react" />
import { GeneratedPropTypes } from '../types';
export declare type SkeletonElementProps = {
    overColor?: boolean;
} & GeneratedPropTypes;
export declare const SkeletonElement: import('styled-components').IStyledComponent<
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
        SkeletonElementProps
    >
>;
