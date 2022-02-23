import { margin, padding } from 'polished';
export declare const generator: {
    readonly namedProps: readonly [{
        readonly prefix: "bg";
        readonly list: {
            readonly n01: "#FFFFFF";
            readonly g25: "#FCFCFD";
            readonly g50: "#F9FAFB";
            readonly g100: "#F2F4F7";
            readonly g200: "#E4E7EC";
            readonly g300: "#D0D5DD";
            readonly g400: "#98A2B3";
            readonly g500: "#667085";
            readonly g600: "#475467";
            readonly g700: "#344054";
            readonly g800: "#1D2939";
            readonly g900: "#101828";
            readonly p25: "#F0F2F7";
            readonly p50: "#DFE7F8";
            readonly p100: "#F4EBFF";
            readonly p200: "#D3DFFE";
            readonly p300: "#A7C0FE";
            readonly p400: "#7BA1FD";
            readonly p500: "#2362FB";
            readonly p600: "#1F5AEA";
            readonly p700: "#1C54DB";
            readonly p800: "#1A4ABE";
            readonly p900: "#0D2C77";
            readonly e300: "#FDA29B";
            readonly e600: "#D92D20";
            readonly e700: "#B42318";
            readonly w300: "#FEC84B";
            readonly w600: "#DC6803";
            readonly w700: "#B54708";
            readonly s300: "#6CE9A6";
            readonly s600: "#039855";
            readonly s700: "#027A48";
        };
        readonly cssProp: "background-color";
    }, {
        readonly list: {
            readonly n01: "#FFFFFF";
            readonly g25: "#FCFCFD";
            readonly g50: "#F9FAFB";
            readonly g100: "#F2F4F7";
            readonly g200: "#E4E7EC";
            readonly g300: "#D0D5DD";
            readonly g400: "#98A2B3";
            readonly g500: "#667085";
            readonly g600: "#475467";
            readonly g700: "#344054";
            readonly g800: "#1D2939";
            readonly g900: "#101828";
            readonly p25: "#F0F2F7";
            readonly p50: "#DFE7F8";
            readonly p100: "#F4EBFF";
            readonly p200: "#D3DFFE";
            readonly p300: "#A7C0FE";
            readonly p400: "#7BA1FD";
            readonly p500: "#2362FB";
            readonly p600: "#1F5AEA";
            readonly p700: "#1C54DB";
            readonly p800: "#1A4ABE";
            readonly p900: "#0D2C77";
            readonly e300: "#FDA29B";
            readonly e600: "#D92D20";
            readonly e700: "#B42318";
            readonly w300: "#FEC84B";
            readonly w600: "#DC6803";
            readonly w700: "#B54708";
            readonly s300: "#6CE9A6";
            readonly s600: "#039855";
            readonly s700: "#027A48";
        };
        readonly cssProp: "color";
    }, {
        readonly list: {
            center: string;
            left: string;
            right: string;
        };
        readonly cssProp: "text-align";
    }, {
        readonly list: {
            flex: string;
            inlineFlex: string;
        };
        readonly cssProp: "display";
    }, {
        readonly list: {
            column: string;
            row: string;
        };
        readonly cssProp: "flex-direction";
    }];
    readonly spaceProps: readonly [{
        readonly prop: "padding";
        readonly units: "rem";
    }, {
        readonly prop: "margin";
        readonly units: "rem";
    }];
    readonly variableProps: readonly [{
        readonly name: "alpha";
        readonly cssProp: "opacity";
    }, {
        readonly name: "tAlign";
        readonly cssProp: "text-align";
    }, {
        readonly name: "radius";
        readonly cssProp: "border-radius";
        readonly units: "rem";
    }, {
        readonly name: "fDirection";
        readonly cssProp: "flex-direction";
    }, {
        readonly name: "show";
        readonly cssProp: "display";
    }, {
        readonly name: "fLayout";
        readonly helperFn: (vertical: "start" | "end" | "around" | "between" | "evenly" | "stretch" | "unset", horizontal: "start" | "end" | "around" | "between" | "evenly" | "stretch" | "unset") => import("styled-components").FlattenSimpleInterpolation;
    }, {
        readonly name: "margin";
        readonly helperFn: typeof margin;
        readonly units: "rem";
    }, {
        readonly name: "padding";
        readonly helperFn: typeof padding;
        readonly units: "rem";
    }];
};
