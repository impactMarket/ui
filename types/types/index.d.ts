import { FlexLayoutType } from '../utils/flexLayout';
import { generator } from '../theme';
export declare const breakpoints: readonly ['xs', 'sm', 'md', 'lg', 'phone', 'tablet', 'tabletLandscape', 'desktop'];
export declare const spaceNames: readonly ['mb', 'ml', 'mr', 'mt', 'pb', 'pl', 'pr', 'pt'];
declare type Truthy = boolean | 'true' | 'false';
/**
 * Helper Types
 */
export declare type BoolPropsFromArray<propsArray extends ReadonlyArray<string>> = Partial<
    Record<propsArray[number], Truthy>
>;
export declare type BoolProps<T extends Object> = Partial<Record<keyof T, Truthy>>;
export declare type StringProps<T extends Object> = Partial<Record<keyof T, string>>;
export declare type MqProp<T> = Partial<Record<(typeof breakpoints)[number], T>> | T;
export declare type Breakpoint = (typeof breakpoints)[number];
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
export declare type GeneratedPropTypes = NamedProps & SpaceProps & VariableProps & HelperFnsProps;
export {};
