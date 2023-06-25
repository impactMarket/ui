// / <reference types="react" />
import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { stateTypes } from '../helpers/applyStateColor';
export declare type ProgressBarProps = {
    progress: number | string;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;
export declare const ProgressBar: import('styled-components').IStyledComponent<
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
        ProgressBarProps
    >
> &
    object;
