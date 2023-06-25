import { GeneratedPropTypes } from '../types';
import React from 'react';
declare type Value = string | number;
declare type OptionType = {
    label?: string;
    value: string;
};
export declare type SelectProps = {
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
export declare const Select: React.ForwardRefExoticComponent<
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
        relative?: boolean | undefined;
        absolute?: boolean | undefined;
        fixed?: boolean | undefined;
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
    } & Partial<
            Record<'mb' | 'ml' | 'mr' | 'mt' | 'pb' | 'pl' | 'pr' | 'pt', import('../types').MqProp<string | number>>
        > & {
            alpha?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            tAlign?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            radius?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fDirection?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxH?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            maxW?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minH?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            minW?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            show?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            h?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            w?:
                | import('../types').MqProp<string | number>
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
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fGrow?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            fWrap?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            order?:
                | import('../types').MqProp<string | number>
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
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowX?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            overflowY?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bRadius?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopLeftRadius?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bTopRightRadius?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomLeftRadius?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
            bBottomRightRadius?:
                | import('../types').MqProp<string | number>
                | Partial<Record<'xs' | 'sm' | 'md' | 'lg' | 'phone' | 'tablet' | 'tabletLandscape' | 'desktop', never>>
                | undefined;
        } & {
            fLayout?: import('../types').MqProp<import('../utils/flexLayout').FlexLayoutType> | undefined;
            margin?: import('../types').MqProp<string | number> | undefined;
            padding?: import('../types').MqProp<string | number> | undefined;
        } & React.RefAttributes<unknown>
>;
export {};
