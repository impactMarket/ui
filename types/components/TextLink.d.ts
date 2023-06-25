// / <reference types="react" />
import { BoolProps, GeneratedPropTypes } from '../types';
import { fonts, typography } from '../theme';
declare const colorVariations: {
    default: import('styled-components').RuleSet<object>;
};
declare type ColorVariations = BoolProps<typeof colorVariations>;
export declare type TextLinkProps = {
    disabled?: boolean;
} & ColorVariations &
    BoolProps<typeof fonts.weights> &
    BoolProps<typeof typography.text> &
    GeneratedPropTypes;
export declare const TextLink: import('styled-components').IStyledComponent<
    'web',
    import('styled-components/dist/types').Substitute<
        Omit<
            import('react').DetailedHTMLProps<
                import('react').AnchorHTMLAttributes<HTMLAnchorElement>,
                HTMLAnchorElement
            >,
            'ref'
        > & {
            ref?:
                | ((instance: HTMLAnchorElement | null) => void)
                | import('react').RefObject<HTMLAnchorElement>
                | null
                | undefined;
        },
        TextLinkProps
    >
>;
export {};
