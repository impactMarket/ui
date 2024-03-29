/* eslint-disable */
import * as styled_components from 'styled-components';
import { DropzoneOptions } from 'react-dropzone';
import { margin, padding } from 'polished';
import React from 'react';

declare const colors: {
    readonly n01: '#FFFFFF';
    readonly g25: '#FCFCFD';
    readonly g50: '#F9FAFB';
    readonly g100: '#F2F4F7';
    readonly g200: '#E4E7EC';
    readonly g300: '#D0D5DD';
    readonly g400: '#98A2B3';
    readonly g500: '#667085';
    readonly g600: '#475467';
    readonly g700: '#344054';
    readonly g800: '#1D2939';
    readonly g900: '#101828';
    readonly p25: '#F0F2F7';
    readonly p50: '#DFE7F8';
    readonly p100: '#DFE7F8';
    readonly p200: '#D3DFFE';
    readonly p300: '#A7C0FE';
    readonly p400: '#7BA1FD';
    readonly p500: '#2362FB';
    readonly p600: '#1F5AEA';
    readonly p700: '#1C54DB';
    readonly p800: '#1A4ABE';
    readonly p900: '#0D2C77';
    readonly e25: '#FFFBFA';
    readonly e50: '#FEF3F2';
    readonly e100: '#FEE4E2';
    readonly e300: '#FDA29B';
    readonly e500: '#F04438';
    readonly e600: '#D92D20';
    readonly e700: '#B42318';
    readonly w25: '#FFFCF5';
    readonly w50: '#FFFAEB';
    readonly w100: '#FEF0C7';
    readonly w200: '#FEDF89';
    readonly w300: '#FEC84B';
    readonly w500: '#F79009';
    readonly w600: '#DC6803';
    readonly w700: '#B54708';
    readonly s25: '#F6FEF9';
    readonly s50: '#ECFDF3';
    readonly s100: '#D1FADF';
    readonly s300: '#6CE9A6';
    readonly s400: '#32D583';
    readonly s500: '#12B76A';
    readonly s600: '#039855';
    readonly s700: '#027A48';
};

declare type FlexLayoutType =
    | 'null center'
    | 'null start'
    | 'null end'
    | 'null around'
    | 'null between'
    | 'null evenly'
    | 'null stretch'
    | 'null unset'
    | 'start null'
    | 'start center'
    | 'start'
    | 'start end'
    | 'start around'
    | 'start between'
    | 'start evenly'
    | 'start stretch'
    | 'start unset'
    | 'end null'
    | 'end center'
    | 'end start'
    | 'end'
    | 'end around'
    | 'end between'
    | 'end evenly'
    | 'end stretch'
    | 'end unset'
    | 'around null'
    | 'around center'
    | 'around start'
    | 'around end'
    | 'around'
    | 'around between'
    | 'around evenly'
    | 'around stretch'
    | 'around unset'
    | 'between null'
    | 'between center'
    | 'between start'
    | 'between end'
    | 'between around'
    | 'between'
    | 'between evenly'
    | 'between stretch'
    | 'between unset'
    | 'evenly null'
    | 'evenly center'
    | 'evenly start'
    | 'evenly end'
    | 'evenly around'
    | 'evenly between'
    | 'evenly'
    | 'evenly stretch'
    | 'evenly unset'
    | 'stretch null'
    | 'stretch center'
    | 'stretch start'
    | 'stretch end'
    | 'stretch around'
    | 'stretch between'
    | 'stretch evenly'
    | 'stretch'
    | 'stretch unset'
    | 'unset null'
    | 'unset center'
    | 'unset start'
    | 'unset end'
    | 'unset around'
    | 'unset between'
    | 'unset evenly'
    | 'unset stretch'
    | 'unset'
    | 'center null'
    | 'center unset'
    | 'center start'
    | 'center end'
    | 'center around'
    | 'center between'
    | 'center evenly'
    | 'center stretch'
    | 'center';

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
    readonly namedProps: readonly [
        {
            readonly prefix: 'bg';
            readonly list: {
                readonly n01: '#FFFFFF';
                readonly g25: '#FCFCFD';
                readonly g50: '#F9FAFB';
                readonly g100: '#F2F4F7';
                readonly g200: '#E4E7EC';
                readonly g300: '#D0D5DD';
                readonly g400: '#98A2B3';
                readonly g500: '#667085';
                readonly g600: '#475467';
                readonly g700: '#344054';
                readonly g800: '#1D2939';
                readonly g900: '#101828';
                readonly p25: '#F0F2F7';
                readonly p50: '#DFE7F8';
                readonly p100: '#DFE7F8';
                readonly p200: '#D3DFFE';
                readonly p300: '#A7C0FE';
                readonly p400: '#7BA1FD';
                readonly p500: '#2362FB';
                readonly p600: '#1F5AEA';
                readonly p700: '#1C54DB';
                readonly p800: '#1A4ABE';
                readonly p900: '#0D2C77';
                readonly e25: '#FFFBFA';
                readonly e50: '#FEF3F2';
                readonly e100: '#FEE4E2';
                readonly e300: '#FDA29B';
                readonly e500: '#F04438';
                readonly e600: '#D92D20';
                readonly e700: '#B42318';
                readonly w25: '#FFFCF5';
                readonly w50: '#FFFAEB';
                readonly w100: '#FEF0C7';
                readonly w200: '#FEDF89';
                readonly w300: '#FEC84B';
                readonly w500: '#F79009';
                readonly w600: '#DC6803';
                readonly w700: '#B54708';
                readonly s25: '#F6FEF9';
                readonly s50: '#ECFDF3';
                readonly s100: '#D1FADF';
                readonly s300: '#6CE9A6';
                readonly s400: '#32D583';
                readonly s500: '#12B76A';
                readonly s600: '#039855';
                readonly s700: '#027A48';
            };
            readonly cssProp: 'background-color';
        },
        {
            readonly list: {
                readonly n01: '#FFFFFF';
                readonly g25: '#FCFCFD';
                readonly g50: '#F9FAFB';
                readonly g100: '#F2F4F7';
                readonly g200: '#E4E7EC';
                readonly g300: '#D0D5DD';
                readonly g400: '#98A2B3';
                readonly g500: '#667085';
                readonly g600: '#475467';
                readonly g700: '#344054';
                readonly g800: '#1D2939';
                readonly g900: '#101828';
                readonly p25: '#F0F2F7';
                readonly p50: '#DFE7F8';
                readonly p100: '#DFE7F8';
                readonly p200: '#D3DFFE';
                readonly p300: '#A7C0FE';
                readonly p400: '#7BA1FD';
                readonly p500: '#2362FB';
                readonly p600: '#1F5AEA';
                readonly p700: '#1C54DB';
                readonly p800: '#1A4ABE';
                readonly p900: '#0D2C77';
                readonly e25: '#FFFBFA';
                readonly e50: '#FEF3F2';
                readonly e100: '#FEE4E2';
                readonly e300: '#FDA29B';
                readonly e500: '#F04438';
                readonly e600: '#D92D20';
                readonly e700: '#B42318';
                readonly w25: '#FFFCF5';
                readonly w50: '#FFFAEB';
                readonly w100: '#FEF0C7';
                readonly w200: '#FEDF89';
                readonly w300: '#FEC84B';
                readonly w500: '#F79009';
                readonly w600: '#DC6803';
                readonly w700: '#B54708';
                readonly s25: '#F6FEF9';
                readonly s50: '#ECFDF3';
                readonly s100: '#D1FADF';
                readonly s300: '#6CE9A6';
                readonly s400: '#32D583';
                readonly s500: '#12B76A';
                readonly s600: '#039855';
                readonly s700: '#027A48';
            };
            readonly cssProp: 'color';
        },
        {
            readonly list: {
                center: string;
                left: string;
                right: string;
            };
            readonly cssProp: 'text-align';
        },
        {
            readonly list: {
                flex: string;
                inlineFlex: string;
                none: string;
                block: string;
            };
            readonly cssProp: 'display';
        },
        {
            readonly list: {
                column: string;
                columnReverse: string;
                row: string;
                rowReverse: string;
            };
            readonly cssProp: 'flex-direction';
        },
        {
            readonly list: {
                relative: string;
                absolute: string;
                fixed: string;
            };
            readonly cssProp: 'position';
        }
    ];
    readonly spaceProps: readonly [
        {
            readonly prop: 'padding';
            readonly units: 'rem';
        },
        {
            readonly prop: 'margin';
            readonly units: 'rem';
        }
    ];
    readonly variableProps: readonly [
        {
            readonly name: 'alpha';
            readonly cssProp: 'opacity';
        },
        {
            readonly name: 'tAlign';
            readonly cssProp: 'text-align';
        },
        {
            readonly name: 'radius';
            readonly cssProp: 'border-radius';
            readonly units: 'rem';
        },
        {
            readonly name: 'fDirection';
            readonly cssProp: 'flex-direction';
        },
        {
            readonly name: 'maxH';
            readonly cssProp: 'max-height';
            readonly units: 'rem';
        },
        {
            readonly name: 'maxW';
            readonly cssProp: 'max-width';
            readonly units: 'rem';
        },
        {
            readonly name: 'minH';
            readonly cssProp: 'min-height';
            readonly units: 'rem';
        },
        {
            readonly name: 'minW';
            readonly cssProp: 'min-width';
            readonly units: 'rem';
        },
        {
            readonly name: 'show';
            readonly cssProp: 'display';
        },
        {
            readonly name: 'h';
            readonly cssProp: 'height';
            readonly units: 'rem';
        },
        {
            readonly name: 'w';
            readonly cssProp: 'width';
            readonly units: 'rem';
        },
        {
            readonly name: 'sColor';
            readonly list: {
                readonly n01: '#FFFFFF';
                readonly g25: '#FCFCFD';
                readonly g50: '#F9FAFB';
                readonly g100: '#F2F4F7';
                readonly g200: '#E4E7EC';
                readonly g300: '#D0D5DD';
                readonly g400: '#98A2B3';
                readonly g500: '#667085';
                readonly g600: '#475467';
                readonly g700: '#344054';
                readonly g800: '#1D2939';
                readonly g900: '#101828';
                readonly p25: '#F0F2F7';
                readonly p50: '#DFE7F8';
                readonly p100: '#DFE7F8';
                readonly p200: '#D3DFFE';
                readonly p300: '#A7C0FE';
                readonly p400: '#7BA1FD';
                readonly p500: '#2362FB';
                readonly p600: '#1F5AEA';
                readonly p700: '#1C54DB';
                readonly p800: '#1A4ABE';
                readonly p900: '#0D2C77';
                readonly e25: '#FFFBFA';
                readonly e50: '#FEF3F2';
                readonly e100: '#FEE4E2';
                readonly e300: '#FDA29B';
                readonly e500: '#F04438';
                readonly e600: '#D92D20';
                readonly e700: '#B42318';
                readonly w25: '#FFFCF5';
                readonly w50: '#FFFAEB';
                readonly w100: '#FEF0C7';
                readonly w200: '#FEDF89';
                readonly w300: '#FEC84B';
                readonly w500: '#F79009';
                readonly w600: '#DC6803';
                readonly w700: '#B54708';
                readonly s25: '#F6FEF9';
                readonly s50: '#ECFDF3';
                readonly s100: '#D1FADF';
                readonly s300: '#6CE9A6';
                readonly s400: '#32D583';
                readonly s500: '#12B76A';
                readonly s600: '#039855';
                readonly s700: '#027A48';
            };
            readonly cssProp: 'color';
        },
        {
            readonly name: 'fShrink';
            readonly cssProp: 'flex-shrink';
        },
        {
            readonly name: 'fGrow';
            readonly cssProp: 'flex-grow';
        },
        {
            readonly name: 'fWrap';
            readonly cssProp: 'flex-wrap';
        },
        {
            readonly name: 'order';
            readonly cssProp: 'order';
        },
        {
            readonly name: 'bgColor';
            readonly list: {
                readonly n01: '#FFFFFF';
                readonly g25: '#FCFCFD';
                readonly g50: '#F9FAFB';
                readonly g100: '#F2F4F7';
                readonly g200: '#E4E7EC';
                readonly g300: '#D0D5DD';
                readonly g400: '#98A2B3';
                readonly g500: '#667085';
                readonly g600: '#475467';
                readonly g700: '#344054';
                readonly g800: '#1D2939';
                readonly g900: '#101828';
                readonly p25: '#F0F2F7';
                readonly p50: '#DFE7F8';
                readonly p100: '#DFE7F8';
                readonly p200: '#D3DFFE';
                readonly p300: '#A7C0FE';
                readonly p400: '#7BA1FD';
                readonly p500: '#2362FB';
                readonly p600: '#1F5AEA';
                readonly p700: '#1C54DB';
                readonly p800: '#1A4ABE';
                readonly p900: '#0D2C77';
                readonly e25: '#FFFBFA';
                readonly e50: '#FEF3F2';
                readonly e100: '#FEE4E2';
                readonly e300: '#FDA29B';
                readonly e500: '#F04438';
                readonly e600: '#D92D20';
                readonly e700: '#B42318';
                readonly w25: '#FFFCF5';
                readonly w50: '#FFFAEB';
                readonly w100: '#FEF0C7';
                readonly w200: '#FEDF89';
                readonly w300: '#FEC84B';
                readonly w500: '#F79009';
                readonly w600: '#DC6803';
                readonly w700: '#B54708';
                readonly s25: '#F6FEF9';
                readonly s50: '#ECFDF3';
                readonly s100: '#D1FADF';
                readonly s300: '#6CE9A6';
                readonly s400: '#32D583';
                readonly s500: '#12B76A';
                readonly s600: '#039855';
                readonly s700: '#027A48';
            };
            readonly cssProp: 'background-color';
        },
        {
            readonly name: 'overflow';
            readonly cssProp: 'overflow';
        },
        {
            readonly name: 'overflowX';
            readonly cssProp: 'overflow-x';
        },
        {
            readonly name: 'overflowY';
            readonly cssProp: 'overflow-y';
        },
        {
            readonly name: 'bRadius';
            readonly cssProp: 'border-radius';
            readonly units: 'rem';
        },
        {
            readonly name: 'bTopLeftRadius';
            readonly cssProp: 'border-top-left-radius';
            readonly units: 'rem';
        },
        {
            readonly name: 'bTopRightRadius';
            readonly cssProp: 'border-top-right-radius';
            readonly units: 'rem';
        },
        {
            readonly name: 'bBottomLeftRadius';
            readonly cssProp: 'border-bottom-left-radius';
            readonly units: 'rem';
        },
        {
            readonly name: 'bBottomRightRadius';
            readonly cssProp: 'border-bottom-right-radius';
            readonly units: 'rem';
        },
        {
            readonly name: 'fLayout';
            readonly helperFn: (
                vertical: 'center' | 'start' | 'end' | 'around' | 'between' | 'evenly' | 'stretch' | 'unset',
                horizontal?:
                    | 'center'
                    | 'start'
                    | 'end'
                    | 'around'
                    | 'between'
                    | 'evenly'
                    | 'stretch'
                    | 'unset'
                    | undefined
            ) => styled_components.FlattenSimpleInterpolation;
        },
        {
            readonly name: 'margin';
            readonly helperFn: typeof margin;
            readonly units: 'rem';
        },
        {
            readonly name: 'padding';
            readonly helperFn: typeof padding;
            readonly units: 'rem';
        }
    ];
};

declare const typography: {
    readonly display: {
        readonly large: readonly [36, 44];
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

declare const breakpoints: readonly ['xs', 'sm', 'md', 'lg', 'phone', 'tablet', 'tabletLandscape', 'desktop'];
declare const spaceNames: readonly ['mb', 'ml', 'mr', 'mt', 'pb', 'pl', 'pr', 'pt'];
declare type Truthy = boolean | 'true' | 'false';
/**
 * Helper Types
 */
declare type BoolPropsFromArray<propsArray extends ReadonlyArray<string>> = Partial<Record<propsArray[number], Truthy>>;
declare type BoolProps<T extends Object> = Partial<Record<keyof T, Truthy>>;
declare type StringProps<T extends Object> = Partial<Record<keyof T, string>>;
declare type MqProp<T> = Partial<Record<(typeof breakpoints)[number], T>> | T;
declare type Breakpoint = (typeof breakpoints)[number];
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
declare type ListObjectWithPrefix = {
    prefix: string;
    list: object;
};
declare type GetName<P> = P extends ListPropValidation ? P['name'] : never;
declare type GetNamesWithPrefix<P> = P extends ListObjectWithPrefix ? keyof P['list'] : never;
declare type GetListKeys<P> = P extends ListProp ? keyof P['list'] : never;
declare type GetNames<P> = P extends ListObjectValidation ? keyof P['list'] : never;
declare type GetPrefixName<P> = P extends {
    prefix: string;
}
    ? P['prefix']
    : never;
declare type PropsFromList<PropList extends ReadonlyArray<ListProp>> = {
    [i in IndexKeys<PropList> as GetName<PropList[i]>]?: MqProp<GetListKeys<PropList[i]>> | MqProp<string | number>;
};
declare type NamedPropsFromList<PropList extends ReadonlyArray<ListObject>> = {
    [i in IndexKeys<PropList> as GetNames<PropList[i]>]?: boolean;
};
declare type NamedPropsWithPrefixFromList<PropList extends ReadonlyArray<any>> = {
    [i in IndexKeys<PropList> as `${GetPrefixName<PropList[i]>}${Capitalize<
        string & GetNamesWithPrefix<PropList[i]>
    >}`]?: boolean;
};
declare type NamedProps = NamedPropsFromList<typeof generator.namedProps> &
    NamedPropsWithPrefixFromList<typeof generator.namedProps>;
declare type SpaceProps = Partial<Record<(typeof spaceNames)[number], MqProp<number | string>>>;
declare type VariableProps = PropsFromList<typeof generator.variableProps>;
declare type HelperFnsProps = {
    fLayout?: MqProp<FlexLayoutType>;
    margin?: MqProp<number | string>;
    padding?: MqProp<number | string>;
};
declare type GeneratedPropTypes = NamedProps & SpaceProps & VariableProps & HelperFnsProps;

declare const useCountDown: (targetDate: Date, withDays?: boolean | undefined) => number[];

declare type Props = {
    children: any;
};
declare const DesignSystemProvider: React.FC<Props>;

declare type ModalManagerProps = {
    modals: {
        [key: string]: Function | React.FC | JSX.Element;
    };
};
declare const openModal: (type: string, props?: {}, options?: {}) => boolean;
declare const closeModal: (callback: Function, options?: {}) => boolean;
declare type ModalContextType = {
    isActive: boolean;
    handleClose: Function;
} & {
    [key: string]: any | any[] | undefined;
};
declare const useModal: () => ModalContextType;
declare const ModalManager: React.FC<ModalManagerProps>;

declare const Box: styled_components.StyledComponent<
    'div',
    any,
    {
        bgImg?: string | undefined;
        borderRadius?: MqProp<string | number> | undefined;
    } & {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;

declare const Card: styled_components.StyledComponent<
    'div',
    any,
    {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;

declare type RowProps = {
    colSpan?: MqProp<number | number[]>;
    colProps?: GeneratedPropTypes;
    cols?: MqProp<number>;
    reverse?: Breakpoint;
} & GeneratedPropTypes;
declare const Row: styled_components.StyledComponent<
    'div',
    any,
    {
        auto?: boolean | undefined;
    } & {
        colSpan?: MqProp<number | number[]> | undefined;
        colProps?: GeneratedPropTypes | undefined;
        cols?: MqProp<number> | undefined;
        reverse?: 'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop' | undefined;
    } & {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;
declare const Col: styled_components.StyledComponent<
    'div',
    any,
    {
        colSize?: MqProp<string | number | boolean> | undefined;
    } & {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;
declare const Grid: React.FC<RowProps>;

declare const miscVariations: {
    ellipsis: styled_components.FlattenSimpleInterpolation;
    uppercase: styled_components.FlattenSimpleInterpolation;
};
declare type CommonProps = {
    children?: any | any[];
} & GeneratedPropTypes &
    BoolProps<typeof miscVariations> &
    BoolProps<typeof fonts.weights>;
declare type DisplayProps = CommonProps & BoolProps<typeof typography.display>;
declare const Display: styled_components.StyledComponent<
    'h1',
    any,
    {
        children?: any | any[];
    } & {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        } & Partial<Record<'ellipsis' | 'uppercase', boolean | 'true' | 'false'>> &
        Partial<Record<'bold' | 'regular' | 'medium' | 'semibold', boolean | 'true' | 'false'>> &
        Partial<Record<'small' | 'large', boolean | 'true' | 'false'>>,
    never
>;
declare type TextProps = CommonProps & BoolProps<typeof typography.text>;
declare const Text: styled_components.StyledComponent<
    'p',
    any,
    {
        children?: any | any[];
    } & {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        } & Partial<Record<'ellipsis' | 'uppercase', boolean | 'true' | 'false'>> &
        Partial<Record<'bold' | 'regular' | 'medium' | 'semibold', boolean | 'true' | 'false'>> &
        Partial<Record<'base' | 'small' | 'large' | 'extralarge' | 'extrasmall', boolean | 'true' | 'false'>>,
    never
>;

declare type InputProps = {
    as?: any;
    button?: any;
    disabled?: boolean;
    hint?: string;
    icon?: string;
    onBlur?: Function;
    onFocus?: Function;
    prefix?: string;
    rows?: number | string;
    suffix?: string;
    withError?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & {
    [key: string]: any;
};
declare const Input: React.ForwardRefExoticComponent<
    Pick<
        {
            as?: any;
            button?: any;
            disabled?: boolean | undefined;
            hint?: string | undefined;
            icon?: string | undefined;
            onBlur?: Function | undefined;
            onFocus?: Function | undefined;
            prefix?: string | undefined;
            rows?: string | number | undefined;
            suffix?: string | undefined;
            withError?: boolean | undefined;
            wrapperProps?: GeneratedPropTypes | undefined;
        } & {
            [key: string]: any;
        },
        string | number
    > &
        React.RefAttributes<unknown>
>;

declare type EnhancedInputUploadProps = {
    cancelUploadText: string;
    children?: any;
    disabled?: boolean;
    handleFiles: Function;
    hint?: string;
    name?: string;
    removeFiles: Function;
    uploadedText?: string;
    uploadingText?: string;
    uploadText?: string;
    withError?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & DropzoneOptions;
declare const EnhancedInputUpload: React.FC<EnhancedInputUploadProps>;

declare type InputUploadProps = {
    children?: any;
    disabled?: boolean;
    handleFiles: Function;
    hint?: string;
    name?: string;
    withError?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & DropzoneOptions;
declare const InputUpload: React.FC<InputUploadProps>;

declare type Value = string | number;
declare type OptionType = {
    label?: string;
    value: string;
};
declare type SelectProps = {
    clearLabel?: string | Function;
    disabled?: boolean;
    hint?: string;
    isClearable?: boolean;
    isMultiple?: boolean;
    onBlur?: Function;
    onChange?: Function;
    onFocus?: Function;
    options?: OptionType[];
    optionsSearchPlaceholder?: string;
    renderLabel: Function;
    renderOption?: Function;
    value?: Value | Value[];
    withError?: boolean;
    withOptionsSearch?: boolean;
} & GeneratedPropTypes;
declare const Select: React.ForwardRefExoticComponent<
    {
        clearLabel?: string | Function | undefined;
        disabled?: boolean | undefined;
        hint?: string | undefined;
        isClearable?: boolean | undefined;
        isMultiple?: boolean | undefined;
        onBlur?: Function | undefined;
        onChange?: Function | undefined;
        onFocus?: Function | undefined;
        options?: OptionType[] | undefined;
        optionsSearchPlaceholder?: string | undefined;
        renderLabel: Function;
        renderOption?: Function | undefined;
        value?: Value | Value[] | undefined;
        withError?: boolean | undefined;
        withOptionsSearch?: boolean | undefined;
    } & {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        } & React.RefAttributes<unknown>
>;

declare type ToggleProps = {
    disabled?: boolean;
    wrapperProps?: GeneratedPropTypes;
} & {
    [key: string]: any;
};
declare const Toggle: React.ForwardRefExoticComponent<
    Pick<
        {
            disabled?: boolean | undefined;
            wrapperProps?: GeneratedPropTypes | undefined;
        } & {
            [key: string]: any;
        },
        string | number
    > &
        React.RefAttributes<unknown>
>;

declare const AppContainer: styled_components.StyledComponent<'div', any, {}, never>;

declare const avatarSizeVariations: {
    default: styled_components.FlattenSimpleInterpolation;
    large: styled_components.FlattenSimpleInterpolation;
    medium: styled_components.FlattenSimpleInterpolation;
    small: styled_components.FlattenSimpleInterpolation;
    extrasmall: styled_components.FlattenSimpleInterpolation;
};
declare type AvatarProps = {
    dot?: string;
    url?: string;
} & GeneratedPropTypes &
    BoolProps<typeof avatarSizeVariations>;
declare const Avatar: React.FC<AvatarProps>;

declare const badgeSizeVariations: {
    default: styled_components.FlattenSimpleInterpolation;
};
declare type BadgeProps = GeneratedPropTypes & BoolProps<typeof badgeSizeVariations>;
declare const Badge: styled_components.StyledComponent<
    'div',
    any,
    {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;

declare const buttonColorVariations: {
    default: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
    error: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
    gray: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
    info: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
    secondary: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
    success: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
};
declare const buttonSizeVariations: {
    default: styled_components.FlattenSimpleInterpolation;
    large: styled_components.FlattenSimpleInterpolation;
    xl: styled_components.FlattenSimpleInterpolation;
};
declare type ButtonBaseProps = {
    as?: any;
    className?: string;
    children?: any | any[];
    disabled?: boolean;
    href?: string;
    icon?: string;
    fluid?: Breakpoint | boolean;
    onClick?: any;
    reverse?: boolean;
    isLoading?: boolean;
    title?: string;
    type?: string;
};
declare type ButtonColorVariations = BoolProps<typeof buttonColorVariations>;
declare type ButtonSizeVariations = BoolProps<typeof buttonSizeVariations>;
declare type ButtonProps = GeneratedPropTypes & ButtonBaseProps & ButtonColorVariations & ButtonSizeVariations;
declare const Button: (props: ButtonProps) => JSX.Element;

declare const stateTypes: readonly ['error', 'info', 'success', 'warning', 'system'];

declare const circledIconSizeVariations: {
    default: styled_components.FlattenSimpleInterpolation;
    small: styled_components.FlattenSimpleInterpolation;
    medium: styled_components.FlattenSimpleInterpolation;
    large: styled_components.FlattenSimpleInterpolation;
    superlarge: styled_components.FlattenSimpleInterpolation;
    extralarge: styled_components.FlattenSimpleInterpolation;
};
declare type CircledIconProps = {
    icon: string;
} & BoolProps<typeof circledIconSizeVariations> &
    BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;
declare const CircledIcon: React.FC<CircledIconProps>;

declare type CountdownProps = {
    date?: Date | string;
    labels?: {
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    };
    onEnd?: Function;
    withDays?: boolean;
} & GeneratedPropTypes;
declare const Countdown: React.FC<CountdownProps & GeneratedPropTypes>;

declare type CountryFlagProps = {
    countryCode: string;
    height?: number;
} & GeneratedPropTypes;
declare const CountryFlag: React.FC<CountryFlagProps>;

declare type DividerProps = {
    text?: string;
} & GeneratedPropTypes;
declare const Divider: React.FC<DividerProps>;

declare type DotProps = BoolPropsFromArray<typeof stateTypes> & GeneratedPropTypes;
declare const Dot: styled_components.StyledComponent<
    'div',
    any,
    Partial<Record<'error' | 'info' | 'success' | 'warning' | 'system', boolean | 'true' | 'false'>> & {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;

declare type DropdownMenuProps = {
    title?: string | React.ReactNode;
    icon?: string | undefined;
    items: React.ReactNode[];
    asButton?: boolean;
    rtl?: boolean;
    wrapperProps?: GeneratedPropTypes;
    headerProps?: GeneratedPropTypes;
    titleColor?: string;
};
declare const DropdownMenu: React.FC<DropdownMenuProps>;

declare type SizeType = number | number[];

declare type IconProps = {
    icon: string;
    size?: SizeType;
    onClick?: (event: any) => void;
} & GeneratedPropTypes;
declare const Icon: React.FC<IconProps>;

declare const ImgWrapper: styled_components.StyledComponent<
    'img',
    any,
    {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;
declare const ImgClickWrapper: styled_components.StyledComponent<'div', any, {}, never>;
declare type ImgProps = {
    alt?: string;
    handleClick?: any;
    icon?: string;
    url: string;
} & GeneratedPropTypes;
declare const Img: (props: ImgProps) => JSX.Element;
declare const ImgClick: (props: ImgProps) => JSX.Element;

declare type LabelProps = {
    dot?: string;
    icon?: string;
    content: string | number | React.ReactNode;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;
declare const Label: React.FC<LabelProps>;

declare const Logo: (props: GeneratedPropTypes) => JSX.Element;

declare type ModalProps = {
    isActive?: boolean;
    children?: any;
    onCloseButton?: Function;
} & GeneratedPropTypes;
declare const ModalWrapper: React.FC<ModalProps>;

declare type OptionItemProps = {
    isActive?: boolean;
    content: any;
} & GeneratedPropTypes;
declare const OptionItem: React.FC<OptionItemProps>;

declare type PaginationProps = {
    currentPage: number;
    disabled?: boolean;
    pageCount: number;
    handlePageClick: any;
    breakLabel?: string;
    nextLabel?: string;
    nextIcon?: string;
    previousLabel?: string;
    previousIcon?: string;
    pageRangeDisplayed?: number;
    marginPagesDisplayed?: number;
    mobileText?: any;
} & GeneratedPropTypes;
declare const Pagination: React.FC<PaginationProps>;

declare type ProgressBarProps = {
    progress: number | string;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;
declare const ProgressBar: styled_components.StyledComponent<
    'div',
    any,
    {
        progress: number | string;
    } & Partial<Record<'error' | 'info' | 'success' | 'warning' | 'system', boolean | 'true' | 'false'>> & {
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
            e25?: boolean | undefined;
            e50?: boolean | undefined;
            e100?: boolean | undefined;
            e300?: boolean | undefined;
            e500?: boolean | undefined;
            e600?: boolean | undefined;
            e700?: boolean | undefined;
            w25?: boolean | undefined;
            w50?: boolean | undefined;
            w100?: boolean | undefined;
            w200?: boolean | undefined;
            w300?: boolean | undefined;
            w500?: boolean | undefined;
            w600?: boolean | undefined;
            w700?: boolean | undefined;
            s25?: boolean | undefined;
            s50?: boolean | undefined;
            s100?: boolean | undefined;
            s300?: boolean | undefined;
            s400?: boolean | undefined;
            s500?: boolean | undefined;
            s600?: boolean | undefined;
            s700?: boolean | undefined;
            center?: boolean | undefined;
            left?: boolean | undefined;
            right?: boolean | undefined;
            none?: boolean | undefined;
            flex?: boolean | undefined;
            block?: boolean | undefined;
            inlineFlex?: boolean | undefined;
            column?: boolean | undefined;
            row?: boolean | undefined;
            columnReverse?: boolean | undefined;
            rowReverse?: boolean | undefined;
            fixed?: boolean | undefined;
            relative?: boolean | undefined;
            absolute?: boolean | undefined;
        } & {
            bgN01?: boolean | undefined;
            bgG25?: boolean | undefined;
            bgG50?: boolean | undefined;
            bgG100?: boolean | undefined;
            bgG200?: boolean | undefined;
            bgG300?: boolean | undefined;
            bgG400?: boolean | undefined;
            bgG500?: boolean | undefined;
            bgG600?: boolean | undefined;
            bgG700?: boolean | undefined;
            bgG800?: boolean | undefined;
            bgG900?: boolean | undefined;
            bgP25?: boolean | undefined;
            bgP50?: boolean | undefined;
            bgP100?: boolean | undefined;
            bgP200?: boolean | undefined;
            bgP300?: boolean | undefined;
            bgP400?: boolean | undefined;
            bgP500?: boolean | undefined;
            bgP600?: boolean | undefined;
            bgP700?: boolean | undefined;
            bgP800?: boolean | undefined;
            bgP900?: boolean | undefined;
            bgE25?: boolean | undefined;
            bgE50?: boolean | undefined;
            bgE100?: boolean | undefined;
            bgE300?: boolean | undefined;
            bgE500?: boolean | undefined;
            bgE600?: boolean | undefined;
            bgE700?: boolean | undefined;
            bgW25?: boolean | undefined;
            bgW50?: boolean | undefined;
            bgW100?: boolean | undefined;
            bgW200?: boolean | undefined;
            bgW300?: boolean | undefined;
            bgW500?: boolean | undefined;
            bgW600?: boolean | undefined;
            bgW700?: boolean | undefined;
            bgS25?: boolean | undefined;
            bgS50?: boolean | undefined;
            bgS100?: boolean | undefined;
            bgS300?: boolean | undefined;
            bgS400?: boolean | undefined;
            bgS500?: boolean | undefined;
            bgS600?: boolean | undefined;
            bgS700?: boolean | undefined;
        } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;

declare type ProgressIndicatorProps = {
    steps: number;
    onStepClick?: Function;
    currentStep?: number;
    stepsTitles: Array<string>;
} & GeneratedPropTypes;
declare const ProgressIndicator: React.FC<ProgressIndicatorProps>;

declare type PulseIconProps = {
    icon: string;
    size?: number;
    borderColor?: keyof typeof colors;
} & GeneratedPropTypes;
declare const PulseIcon: React.FC<PulseIconProps>;

declare type SkeletonElementProps = {
    overColor?: boolean;
} & GeneratedPropTypes;
declare const SkeletonElement: styled_components.StyledComponent<
    'div',
    any,
    {
        overColor?: boolean | undefined;
    } & {
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
        e25?: boolean | undefined;
        e50?: boolean | undefined;
        e100?: boolean | undefined;
        e300?: boolean | undefined;
        e500?: boolean | undefined;
        e600?: boolean | undefined;
        e700?: boolean | undefined;
        w25?: boolean | undefined;
        w50?: boolean | undefined;
        w100?: boolean | undefined;
        w200?: boolean | undefined;
        w300?: boolean | undefined;
        w500?: boolean | undefined;
        w600?: boolean | undefined;
        w700?: boolean | undefined;
        s25?: boolean | undefined;
        s50?: boolean | undefined;
        s100?: boolean | undefined;
        s300?: boolean | undefined;
        s400?: boolean | undefined;
        s500?: boolean | undefined;
        s600?: boolean | undefined;
        s700?: boolean | undefined;
        center?: boolean | undefined;
        left?: boolean | undefined;
        right?: boolean | undefined;
        none?: boolean | undefined;
        flex?: boolean | undefined;
        block?: boolean | undefined;
        inlineFlex?: boolean | undefined;
        column?: boolean | undefined;
        row?: boolean | undefined;
        columnReverse?: boolean | undefined;
        rowReverse?: boolean | undefined;
        fixed?: boolean | undefined;
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
    } & {
        bgN01?: boolean | undefined;
        bgG25?: boolean | undefined;
        bgG50?: boolean | undefined;
        bgG100?: boolean | undefined;
        bgG200?: boolean | undefined;
        bgG300?: boolean | undefined;
        bgG400?: boolean | undefined;
        bgG500?: boolean | undefined;
        bgG600?: boolean | undefined;
        bgG700?: boolean | undefined;
        bgG800?: boolean | undefined;
        bgG900?: boolean | undefined;
        bgP25?: boolean | undefined;
        bgP50?: boolean | undefined;
        bgP100?: boolean | undefined;
        bgP200?: boolean | undefined;
        bgP300?: boolean | undefined;
        bgP400?: boolean | undefined;
        bgP500?: boolean | undefined;
        bgP600?: boolean | undefined;
        bgP700?: boolean | undefined;
        bgP800?: boolean | undefined;
        bgP900?: boolean | undefined;
        bgE25?: boolean | undefined;
        bgE50?: boolean | undefined;
        bgE100?: boolean | undefined;
        bgE300?: boolean | undefined;
        bgE500?: boolean | undefined;
        bgE600?: boolean | undefined;
        bgE700?: boolean | undefined;
        bgW25?: boolean | undefined;
        bgW50?: boolean | undefined;
        bgW100?: boolean | undefined;
        bgW200?: boolean | undefined;
        bgW300?: boolean | undefined;
        bgW500?: boolean | undefined;
        bgW600?: boolean | undefined;
        bgW700?: boolean | undefined;
        bgS25?: boolean | undefined;
        bgS50?: boolean | undefined;
        bgS100?: boolean | undefined;
        bgS300?: boolean | undefined;
        bgS400?: boolean | undefined;
        bgS500?: boolean | undefined;
        bgS600?: boolean | undefined;
        bgS700?: boolean | undefined;
    } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;

declare type SpinnerProps = {
    isActive?: boolean;
    size?: number;
} & GeneratedPropTypes;
declare const Spinner: React.FC<SpinnerProps>;

declare type ColumnProps = {
    title?: string;
    value?: string;
    width?: string | number;
    minWidth?: string | number;
    sortable?: boolean;
    render?: Function;
};
declare type TableProps = {
    columns: ColumnProps[];
    isLoading: boolean;
    rows: any;
    noResults: string;
    pagination?: any;
    handleSort?: any;
    sortKey?: {
        key: string;
        sortDesc: boolean;
    };
} & GeneratedPropTypes;
declare const Table: React.FC<TableProps>;

declare type TabListProps = {
    children: any;
    tabsRole?: string;
};
declare const TabList: {
    ({ children, ...forwardProps }: TabListProps): JSX.Element;
    tabsRole: string;
};
declare type TabProps = {
    title: string | React.ReactNode;
    number?: number;
    tabsRole?: string;
    onClick?: any;
};
declare const Tab: {
    ({ title, number, onClick, ...forwardProps }: TabProps): JSX.Element;
    tabsRole: string;
};
declare type TabPanelProps = {
    children: any;
    tabsRole?: string;
};
declare const TabPanel: {
    ({ children, ...forwardProps }: TabPanelProps): JSX.Element;
    tabsRole: string;
};
declare type TabsProps = {
    children: any;
    defaultIndex?: number;
} & GeneratedPropTypes;
declare const Tabs: React.FC<TabsProps>;

declare const colorVariations: {
    default: styled_components.FlattenSimpleInterpolation;
};
declare type ColorVariations = BoolProps<typeof colorVariations>;
declare type TextLinkProps = {
    disabled?: boolean;
} & ColorVariations &
    BoolProps<typeof fonts.weights> &
    BoolProps<typeof typography.text> &
    GeneratedPropTypes;
declare const TextLink: styled_components.StyledComponent<
    'a',
    any,
    {
        disabled?: boolean | undefined;
    } & Partial<Record<'default', boolean | 'true' | 'false'>> &
        Partial<Record<'bold' | 'regular' | 'medium' | 'semibold', boolean | 'true' | 'false'>> &
        Partial<Record<'base' | 'small' | 'large' | 'extralarge' | 'extrasmall', boolean | 'true' | 'false'>> & {
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
            e25?: boolean | undefined;
            e50?: boolean | undefined;
            e100?: boolean | undefined;
            e300?: boolean | undefined;
            e500?: boolean | undefined;
            e600?: boolean | undefined;
            e700?: boolean | undefined;
            w25?: boolean | undefined;
            w50?: boolean | undefined;
            w100?: boolean | undefined;
            w200?: boolean | undefined;
            w300?: boolean | undefined;
            w500?: boolean | undefined;
            w600?: boolean | undefined;
            w700?: boolean | undefined;
            s25?: boolean | undefined;
            s50?: boolean | undefined;
            s100?: boolean | undefined;
            s300?: boolean | undefined;
            s400?: boolean | undefined;
            s500?: boolean | undefined;
            s600?: boolean | undefined;
            s700?: boolean | undefined;
            center?: boolean | undefined;
            left?: boolean | undefined;
            right?: boolean | undefined;
            none?: boolean | undefined;
            flex?: boolean | undefined;
            block?: boolean | undefined;
            inlineFlex?: boolean | undefined;
            column?: boolean | undefined;
            row?: boolean | undefined;
            columnReverse?: boolean | undefined;
            rowReverse?: boolean | undefined;
            fixed?: boolean | undefined;
            relative?: boolean | undefined;
            absolute?: boolean | undefined;
        } & {
            bgN01?: boolean | undefined;
            bgG25?: boolean | undefined;
            bgG50?: boolean | undefined;
            bgG100?: boolean | undefined;
            bgG200?: boolean | undefined;
            bgG300?: boolean | undefined;
            bgG400?: boolean | undefined;
            bgG500?: boolean | undefined;
            bgG600?: boolean | undefined;
            bgG700?: boolean | undefined;
            bgG800?: boolean | undefined;
            bgG900?: boolean | undefined;
            bgP25?: boolean | undefined;
            bgP50?: boolean | undefined;
            bgP100?: boolean | undefined;
            bgP200?: boolean | undefined;
            bgP300?: boolean | undefined;
            bgP400?: boolean | undefined;
            bgP500?: boolean | undefined;
            bgP600?: boolean | undefined;
            bgP700?: boolean | undefined;
            bgP800?: boolean | undefined;
            bgP900?: boolean | undefined;
            bgE25?: boolean | undefined;
            bgE50?: boolean | undefined;
            bgE100?: boolean | undefined;
            bgE300?: boolean | undefined;
            bgE500?: boolean | undefined;
            bgE600?: boolean | undefined;
            bgE700?: boolean | undefined;
            bgW25?: boolean | undefined;
            bgW50?: boolean | undefined;
            bgW100?: boolean | undefined;
            bgW200?: boolean | undefined;
            bgW300?: boolean | undefined;
            bgW500?: boolean | undefined;
            bgW600?: boolean | undefined;
            bgW700?: boolean | undefined;
            bgS25?: boolean | undefined;
            bgS50?: boolean | undefined;
            bgS100?: boolean | undefined;
            bgS300?: boolean | undefined;
            bgS400?: boolean | undefined;
            bgS500?: boolean | undefined;
            bgS600?: boolean | undefined;
            bgS700?: boolean | undefined;
        } & Partial<Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', MqProp<string | number>>> & {
            tAlign?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            alpha?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            sColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            fShrink?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bgColor?:
                | string
                | number
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          string | number
                      >
                  >
                | Partial<
                      Record<
                          'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop',
                          | 'n01'
                          | 'g25'
                          | 'g50'
                          | 'g100'
                          | 'g200'
                          | 'g300'
                          | 'g400'
                          | 'g500'
                          | 'g600'
                          | 'g700'
                          | 'g800'
                          | 'g900'
                          | 'p25'
                          | 'p50'
                          | 'p100'
                          | 'p200'
                          | 'p300'
                          | 'p400'
                          | 'p500'
                          | 'p600'
                          | 'p700'
                          | 'p800'
                          | 'p900'
                          | 'e25'
                          | 'e50'
                          | 'e100'
                          | 'e300'
                          | 'e500'
                          | 'e600'
                          | 'e700'
                          | 'w25'
                          | 'w50'
                          | 'w100'
                          | 'w200'
                          | 'w300'
                          | 'w500'
                          | 'w600'
                          | 'w700'
                          | 's25'
                          | 's50'
                          | 's100'
                          | 's300'
                          | 's400'
                          | 's500'
                          | 's600'
                          | 's700'
                      >
                  >
                | undefined;
            overflow?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: MqProp<FlexLayoutType> | undefined;
            margin?: MqProp<string | number> | undefined;
            padding?: MqProp<string | number> | undefined;
        },
    never
>;

declare type ThumbnailProps = {
    disabled?: boolean;
    handleClick?: any;
    icon?: string;
    url?: string;
} & GeneratedPropTypes;
declare const Thumbnail: (props: ThumbnailProps) => JSX.Element;

declare type TypeOptions = 'info' | 'success' | 'warning' | 'error';
declare const toast: {
    [key in TypeOptions]: (content: any) => React.ReactText;
};
declare const Toaster: () => JSX.Element;

declare const Typing: React.FC<GeneratedPropTypes>;

declare const ViewContainerWrapper: styled_components.StyledComponent<'div', any, {}, never>;
declare const ViewContainer: React.FC<{
    isLoading?: boolean;
    style?: Object;
}>;

declare type AccordionItemProps = {
    children: any;
    handleItemClick?: any;
    scrollIntoView?: any;
    isActive?: boolean;
    title: string;
};
declare const AccordionItem: React.FC<AccordionItemProps>;
declare type AccordionProps = {
    children: React.ReactNode | React.ReactNode[];
} & GeneratedPropTypes;
declare const Accordion: React.FC<AccordionProps>;

declare type AlertProps = {
    button?: any;
    icon: string;
    title?: string | React.ReactNode;
    message?: string | React.ReactNode;
    handleClose?: any;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;
declare const Alert: React.FC<AlertProps>;

declare type ComposedCardProps = {
    badgeProps?: BadgeProps;
    children?: any;
    content?: any;
    heading?: any;
    image?: string;
    imageBackgroundColor?: string;
    label?: string;
    onClick?: () => {};
} & GeneratedPropTypes;
declare const ComposedCard: React.FC<ComposedCardProps>;

declare type ProgressCardProps = {
    children?: any;
    label?: string;
    progress?: number;
    pathColor: keyof typeof colors;
} & GeneratedPropTypes;
declare const ProgressCard: React.FC<ProgressCardProps>;

declare type SidebarProps = {
    children: React.ReactNode;
    footer?: React.ReactNode;
    handleLogoClick?: any;
    isLoading?: boolean;
    mobileActions?: React.ReactNode;
};
declare const useSidebarMobile: () => {
    isActive: boolean;
    setIsActive: Function;
};
declare const Sidebar: React.FC<SidebarProps>;

declare type SidebarMenuGroupProps = {
    children: any | any[];
    isCollapsible?: boolean;
    title?: string;
} & GeneratedPropTypes;
declare const SidebarMenuGroup: React.FC<SidebarMenuGroupProps>;

declare type SidebarMenuItemProps = {
    uid?: string;
    children?: any;
    flag?: string | number;
    icon?: string;
    isActive?: boolean;
    isVisible?: boolean;
    label?: string | React.ReactNode;
} & React.HTMLAttributes<HTMLAnchorElement>;
declare const SidebarMenuItem: React.FC<SidebarMenuItemProps>;

declare type SidebarUserButtonProps = {
    address: string;
    isActive?: boolean;
    currency?: string;
    photo?: {
        url?: string;
    };
    name?: string;
} & React.HTMLAttributes<HTMLAnchorElement>;
declare const SidebarUserButton: React.FC<SidebarUserButtonProps>;

export {
    Accordion,
    AccordionItem,
    AccordionItemProps,
    AccordionProps,
    Alert,
    AlertProps,
    AppContainer,
    Avatar,
    AvatarProps,
    Badge,
    BadgeProps,
    BoolProps,
    BoolPropsFromArray,
    Box,
    Breakpoint,
    Button,
    ButtonProps,
    Card,
    CircledIcon,
    CircledIconProps,
    Col,
    ColumnProps,
    ComposedCard,
    ComposedCardProps,
    Countdown,
    CountdownProps,
    CountryFlag,
    CountryFlagProps,
    DesignSystemProvider,
    Display,
    DisplayProps,
    Divider,
    DividerProps,
    Dot,
    DotProps,
    DropdownMenu,
    DropdownMenuProps,
    EnhancedInputUpload,
    EnhancedInputUploadProps,
    GeneratedPropTypes,
    Grid,
    Icon,
    Img,
    ImgClick,
    ImgClickWrapper,
    ImgProps,
    ImgWrapper,
    Input,
    InputProps,
    InputUpload,
    InputUploadProps,
    Label,
    LabelProps,
    Logo,
    ModalContextType,
    ModalManager,
    ModalManagerProps,
    ModalWrapper,
    MqProp,
    OptionItem,
    OptionItemProps,
    Pagination,
    PaginationProps,
    ProgressBar,
    ProgressBarProps,
    ProgressCard,
    ProgressCardProps,
    ProgressIndicator,
    ProgressIndicatorProps,
    PulseIcon,
    Row,
    RowProps,
    Select,
    SelectProps,
    Sidebar,
    SidebarMenuGroup,
    SidebarMenuGroupProps,
    SidebarMenuItem,
    SidebarMenuItemProps,
    SidebarProps,
    SidebarUserButton,
    SidebarUserButtonProps,
    SkeletonElement,
    SkeletonElementProps,
    Spinner,
    SpinnerProps,
    StringProps,
    Tab,
    TabList,
    TabListProps,
    TabPanel,
    TabPanelProps,
    TabProps,
    Table,
    TableProps,
    Tabs,
    TabsProps,
    Text,
    TextLink,
    TextLinkProps,
    TextProps,
    Thumbnail,
    ThumbnailProps,
    Toaster,
    Toggle,
    ToggleProps,
    Typing,
    ViewContainer,
    ViewContainerWrapper,
    avatarSizeVariations,
    badgeSizeVariations,
    breakpoints,
    buttonColorVariations,
    buttonSizeVariations,
    circledIconSizeVariations,
    closeModal,
    colors,
    openModal,
    spaceNames,
    toast,
    useCountDown,
    useModal,
    useSidebarMobile
};
