// / <reference types="react" />
import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { stateTypes } from '../helpers/applyStateColor';
export declare type DotProps = BoolPropsFromArray<typeof stateTypes> & GeneratedPropTypes;
export declare const Dot: import('styled-components').IStyledComponent<
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
        DotProps
    >
>;
