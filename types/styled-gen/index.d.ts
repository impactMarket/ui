/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
declare module 'styled-gen' {
    export type Breakpoint =
        | 'xs'
        | 'sm'
        | 'md'
        | 'lg'
        | 'phone'
        | 'tablet'
        | 'tabletLandscape'
        | 'desktop'
        | string
        | number;

    function upTo(bp: Breakpoint, style: string | FlattenSimpleInterpolation);
    function from(bp: Breakpoint, style: string | FlattenSimpleInterpolation);
    function between(bp1: Breakpoint, bp2: Breakpoint, style: string | FlattenSimpleInterpolation);
    function mqFunction(style: string | FlattenSimpleInterpolation);

    export const ease = {
        inBack: 'cubic-bezier(0.6, -0.28, 0.735, 0.045)',
        inCirc: 'cubic-bezier(0.6, 0.04, 0.98, 0.335)',
        inCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        inExpo: 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        inOutBack: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        inOutCirc: 'cubic-bezier(0.785, 0.135, 0.15, 0.86)',
        inOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
        inOutExpo: 'cubic-bezier(1, 0, 0, 1)',
        inOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
        inOutQuart: ' cubic-bezier(0.77, 0, 0.175, 1)',
        inOutQuint: 'cubic-bezier(0.86, 0, 0.07, 1)',
        inOutSine: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
        inQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
        inQuart: 'cubic-bezier(0.895, 0.03, 0.685, 0.22)',
        inQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
        inSine: 'cubic-bezier(0.47, 0, 0.745, 0.715)',
        outBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        outCirc: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
        outCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        outExpo: 'cubic-bezier(0.19, 1, 0.22, 1)',
        outQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        outQuart: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        outQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
        outSine: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
    } as const;

    type EaseKeysType = keyof typeof ease;
    type EaseValuesType = (typeof ease)[EaseKeysType];
    type EaseType = EaseKeysType | EaseValuesType | string;

    export const mq = {
        between,
        desktop: mqFunction,
        from,
        phone: mqFunction,
        tablet: mqFunction,
        tabletLandscape: mqFunction,
        tabletLandscapeMax: mqFunction,
        upTo
    };

    export function generateProps(props: any): any;
    export function importFonts(props: any): any;
    export function transitions(cssProps: string | string[], duration: number | string, ease: EaseType);
    export function variations(variationsObject: { [key: string]: string | FlattenSimpleInterpolation }): any;
}
