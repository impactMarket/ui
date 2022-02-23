/// <reference types="react" />
import * as styled_components from 'styled-components';
import { margin, padding } from 'polished';

declare const colors: {
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

declare type FlexLayoutType = 'null start' | 'null end' | 'null around' | 'null between' | 'null evenly' | 'null stretch' | 'null unset' | 'start null' | 'start' | 'start end' | 'start around' | 'start between' | 'start evenly' | 'start stretch' | 'start unset' | 'end null' | 'end start' | 'end' | 'end around' | 'end between' | 'end evenly' | 'end stretch' | 'end unset' | 'around null' | 'around start' | 'around end' | 'around' | 'around between' | 'around evenly' | 'around stretch' | 'around unset' | 'between null' | 'between start' | 'between end' | 'between around' | 'between' | 'between evenly' | 'between stretch' | 'between unset' | 'evenly null' | 'evenly start' | 'evenly end' | 'evenly around' | 'evenly between' | 'evenly' | 'evenly stretch' | 'evenly unset' | 'stretch null' | 'stretch start' | 'stretch end' | 'stretch around' | 'stretch between' | 'stretch evenly' | 'stretch' | 'stretch unset' | 'unset null' | 'unset start' | 'unset end' | 'unset around' | 'unset between' | 'unset evenly' | 'unset stretch' | 'unset';

declare const fonts: {
    readonly families: {
        sans: string;
    };
    readonly weights: {
        regular: number;
        medium: number;
        semibold: number;
        bold: number;
    };
};

declare const generator: {
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
        readonly helperFn: (vertical: "start" | "end" | "around" | "between" | "evenly" | "stretch" | "unset", horizontal: "start" | "end" | "around" | "between" | "evenly" | "stretch" | "unset") => styled_components.FlattenSimpleInterpolation;
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

declare const typography: {
    readonly display: {
        readonly small: {
            readonly sm: readonly [30, 38];
            readonly xs: readonly [24, 32];
        };
    };
    readonly text: {
        readonly extralarge: readonly [20, 30];
        readonly large: readonly [18, 28];
        readonly base: readonly [16, 24];
        readonly small: readonly [14, 20];
        readonly extrasmall: readonly [12, 18];
    };
};

declare const breakpoints: readonly ["xs", "sm", "md", "lg", "phone", "tablet", "tabletLandscape", "desktop"];
declare const spaceNames: readonly ["mb", "ml", "mr", "mt", "pb", "pl", "pr", "pt"];
declare type Truthy = boolean | 'true' | 'false';
/**
 * Helper Types
 */
declare type BoolPropsFromArray<propsArray extends ReadonlyArray<string>> = Partial<Record<propsArray[number], Truthy>>;
declare type BoolProps<T extends Object> = Partial<Record<keyof T, Truthy>>;
declare type StringProps<T extends Object> = Partial<Record<keyof T, string>>;
declare type MqProp<T> = Partial<Record<typeof breakpoints[number], T>> | T;
/**
 * GeneratedPropsTypes
 */
declare type IndexKeys<T> = Exclude<keyof T, keyof []>;
declare type ListProp = {
    name: string;
    list?: object;
    helperFn?: Function;
    units?: string;
};
declare type ListPropValidation = {
    name: string;
    list?: object;
    helperFn?: undefined;
    units?: string;
};
declare type ListObject = {
    prefix?: string;
    list: object;
};
declare type ListObjectValidation = {
    prefix?: undefined;
    list: object;
};
declare type GetName<P> = P extends ListPropValidation ? P['name'] : never;
declare type GetListKeys<P> = P extends ListProp ? keyof P['list'] : never;
declare type GetNames<P> = P extends ListObjectValidation ? keyof P['list'] : never;
declare type PropsFromList<PropList extends ReadonlyArray<ListProp>> = {
    [i in IndexKeys<PropList> as GetName<PropList[i]>]?: MqProp<GetListKeys<PropList[i]>> | MqProp<string | number>;
};
declare type NamedPropsFromList<PropList extends ReadonlyArray<ListObject>> = {
    [i in IndexKeys<PropList> as GetNames<PropList[i]>]?: boolean;
};
declare type NamedProps = NamedPropsFromList<typeof generator.namedProps>;
declare type SpaceProps = Partial<Record<typeof spaceNames[number], MqProp<number | string>>>;
declare type VariableProps = PropsFromList<typeof generator.variableProps>;
declare type HelperFnsProps = {
    flexLayout?: MqProp<FlexLayoutType>;
    margin?: string;
    padding?: string;
};
declare type GeneratedPropTypes = NamedProps & SpaceProps & VariableProps & HelperFnsProps;

declare const Box: styled_components.StyledComponent<"div", any, {
    n01?: boolean | undefined;
    g25?: boolean | undefined;
    g50?: boolean | undefined;
    g100?: boolean | undefined;
    g200?: boolean | undefined;
    g300?: boolean | undefined;
    g400?: boolean | undefined;
    g500?: boolean | undefined;
    g600?: boolean | undefined;
    g700?: boolean | undefined;
    g800?: boolean | undefined;
    g900?: boolean | undefined;
    p25?: boolean | undefined;
    p50?: boolean | undefined;
    p100?: boolean | undefined;
    p200?: boolean | undefined;
    p300?: boolean | undefined;
    p400?: boolean | undefined;
    p500?: boolean | undefined;
    p600?: boolean | undefined;
    p700?: boolean | undefined;
    p800?: boolean | undefined;
    p900?: boolean | undefined;
    e300?: boolean | undefined;
    e600?: boolean | undefined;
    e700?: boolean | undefined;
    w300?: boolean | undefined;
    w600?: boolean | undefined;
    w700?: boolean | undefined;
    s300?: boolean | undefined;
    s600?: boolean | undefined;
    s700?: boolean | undefined;
    left?: boolean | undefined;
    center?: boolean | undefined;
    right?: boolean | undefined;
    flex?: boolean | undefined;
    inlineFlex?: boolean | undefined;
    row?: boolean | undefined;
    column?: boolean | undefined;
} & Partial<Record<"mb" | "ml" | "mr" | "mt" | "pb" | "pl" | "pr" | "pt", MqProp<string | number>>> & {
    alpha?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    tAlign?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    radius?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    fDirection?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    show?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
} & {
    flexLayout?: MqProp<FlexLayoutType> | undefined;
    margin?: string | undefined;
    padding?: string | undefined;
}, never>;

declare type Props = {
    children: any;
};
declare const DesignSystemProvider: (props: Props) => JSX.Element;

declare type IconProps = {
    icon: string;
    size?: number | number[];
} & GeneratedPropTypes;
declare const Icon: {
    (props: IconProps): any;
    defaultProps: {
        size: number;
    };
};

declare const overflowVariations: {
    ellipsis: styled_components.FlattenSimpleInterpolation;
};
declare type CommonProps = GeneratedPropTypes & BoolProps<typeof overflowVariations> & BoolProps<typeof fonts.weights>;
declare type DisplayProps = CommonProps & BoolProps<typeof typography.display>;
declare const Display: styled_components.StyledComponent<"h1", any, {
    n01?: boolean | undefined;
    g25?: boolean | undefined;
    g50?: boolean | undefined;
    g100?: boolean | undefined;
    g200?: boolean | undefined;
    g300?: boolean | undefined;
    g400?: boolean | undefined;
    g500?: boolean | undefined;
    g600?: boolean | undefined;
    g700?: boolean | undefined;
    g800?: boolean | undefined;
    g900?: boolean | undefined;
    p25?: boolean | undefined;
    p50?: boolean | undefined;
    p100?: boolean | undefined;
    p200?: boolean | undefined;
    p300?: boolean | undefined;
    p400?: boolean | undefined;
    p500?: boolean | undefined;
    p600?: boolean | undefined;
    p700?: boolean | undefined;
    p800?: boolean | undefined;
    p900?: boolean | undefined;
    e300?: boolean | undefined;
    e600?: boolean | undefined;
    e700?: boolean | undefined;
    w300?: boolean | undefined;
    w600?: boolean | undefined;
    w700?: boolean | undefined;
    s300?: boolean | undefined;
    s600?: boolean | undefined;
    s700?: boolean | undefined;
    left?: boolean | undefined;
    center?: boolean | undefined;
    right?: boolean | undefined;
    flex?: boolean | undefined;
    inlineFlex?: boolean | undefined;
    row?: boolean | undefined;
    column?: boolean | undefined;
} & Partial<Record<"mb" | "ml" | "mr" | "mt" | "pb" | "pl" | "pr" | "pt", MqProp<string | number>>> & {
    alpha?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    tAlign?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    radius?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    fDirection?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    show?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
} & {
    flexLayout?: MqProp<FlexLayoutType> | undefined;
    margin?: string | undefined;
    padding?: string | undefined;
} & Partial<Record<"ellipsis", boolean | "true" | "false">> & Partial<Record<"bold" | "regular" | "medium" | "semibold", boolean | "true" | "false">> & Partial<Record<"small", boolean | "true" | "false">>, never>;
declare type TextProps = CommonProps & BoolProps<typeof typography.text>;
declare const Text: styled_components.StyledComponent<"p", any, {
    n01?: boolean | undefined;
    g25?: boolean | undefined;
    g50?: boolean | undefined;
    g100?: boolean | undefined;
    g200?: boolean | undefined;
    g300?: boolean | undefined;
    g400?: boolean | undefined;
    g500?: boolean | undefined;
    g600?: boolean | undefined;
    g700?: boolean | undefined;
    g800?: boolean | undefined;
    g900?: boolean | undefined;
    p25?: boolean | undefined;
    p50?: boolean | undefined;
    p100?: boolean | undefined;
    p200?: boolean | undefined;
    p300?: boolean | undefined;
    p400?: boolean | undefined;
    p500?: boolean | undefined;
    p600?: boolean | undefined;
    p700?: boolean | undefined;
    p800?: boolean | undefined;
    p900?: boolean | undefined;
    e300?: boolean | undefined;
    e600?: boolean | undefined;
    e700?: boolean | undefined;
    w300?: boolean | undefined;
    w600?: boolean | undefined;
    w700?: boolean | undefined;
    s300?: boolean | undefined;
    s600?: boolean | undefined;
    s700?: boolean | undefined;
    left?: boolean | undefined;
    center?: boolean | undefined;
    right?: boolean | undefined;
    flex?: boolean | undefined;
    inlineFlex?: boolean | undefined;
    row?: boolean | undefined;
    column?: boolean | undefined;
} & Partial<Record<"mb" | "ml" | "mr" | "mt" | "pb" | "pl" | "pr" | "pt", MqProp<string | number>>> & {
    alpha?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    tAlign?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    radius?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    fDirection?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
    show?: MqProp<string | number> | Partial<Record<"xs" | "sm" | "md" | "lg" | "phone" | "tablet" | "tabletLandscape" | "desktop", never>> | undefined;
} & {
    flexLayout?: MqProp<FlexLayoutType> | undefined;
    margin?: string | undefined;
    padding?: string | undefined;
} & Partial<Record<"ellipsis", boolean | "true" | "false">> & Partial<Record<"bold" | "regular" | "medium" | "semibold", boolean | "true" | "false">> & Partial<Record<"base" | "small" | "extralarge" | "large" | "extrasmall", boolean | "true" | "false">>, never>;

export { BoolProps, BoolPropsFromArray, Box, DesignSystemProvider, Display, DisplayProps, GeneratedPropTypes, Icon, MqProp, StringProps, Text, TextProps, colors, spaceNames };
