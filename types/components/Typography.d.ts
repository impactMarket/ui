// / <reference types="react" />
import { BoolProps, GeneratedPropTypes } from '../types';
import { fonts, typography } from '../theme';
declare const miscVariations: {
    ellipsis: import('styled-components').RuleSet<object>;
    uppercase: import('styled-components').RuleSet<object>;
};
declare type CommonProps = {
    children?: any | any[];
} & GeneratedPropTypes &
    BoolProps<typeof miscVariations> &
    BoolProps<typeof fonts.weights>;
export declare type DisplayProps = CommonProps & BoolProps<typeof typography.display>;
export declare const Display: import('styled-components').IStyledComponent<
    'web',
    import('styled-components/dist/types').Substitute<
        Omit<
            import('react').DetailedHTMLProps<import('react').HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>,
            'ref'
        > & {
            ref?:
                | ((instance: HTMLHeadingElement | null) => void)
                | import('react').RefObject<HTMLHeadingElement>
                | null
                | undefined;
        },
        DisplayProps
    >
>;
export declare type TextProps = CommonProps & BoolProps<typeof typography.text>;
export declare const Text: import('styled-components').IStyledComponent<
    'web',
    import('styled-components/dist/types').Substitute<
        Omit<
            import('react').DetailedHTMLProps<
                import('react').HTMLAttributes<HTMLParagraphElement>,
                HTMLParagraphElement
            >,
            'ref'
        > & {
            ref?:
                | ((instance: HTMLParagraphElement | null) => void)
                | import('react').RefObject<HTMLParagraphElement>
                | null
                | undefined;
        },
        TextProps
    >
>;
export {};
