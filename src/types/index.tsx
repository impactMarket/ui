import { FlexLayoutType } from '../utils/flexLayout';
import { generator } from '../theme';

const breakpoints = ['xs', 'sm', 'md', 'lg', 'phone', 'tablet', 'tabletLandscape', 'desktop'] as const;

export const spaceNames = ['mb', 'ml', 'mr', 'mt', 'pb', 'pl', 'pr', 'pt'] as const;

type Truthy = boolean | 'true' | 'false';

/**
 * Helper Types
 */
export type BoolPropsFromArray<propsArray extends ReadonlyArray<string>> = Partial<Record<propsArray[number], Truthy>>;
export type BoolProps<T extends Object> = Partial<Record<keyof T, Truthy>>;
export type StringProps<T extends Object> = Partial<Record<keyof T, string>>;
export type MqProp<T> = Partial<Record<typeof breakpoints[number], T>> | T;

/**
 * GeneratedPropsTypes
 */
type IndexKeys<T> = Exclude<keyof T, keyof []>;
type ListProp = { name: string; list?: object; helperFn?: Function; units?: string };
type ListPropValidation = { name: string; list?: object; helperFn?: undefined; units?: string };
type ListObject = { prefix?: string; list: object };
type ListObjectValidation = { prefix?: undefined; list: object };
type GetName<P> = P extends ListPropValidation ? P['name'] : never;
type GetListKeys<P> = P extends ListProp ? keyof P['list'] : never;
type GetNames<P> = P extends ListObjectValidation ? keyof P['list'] : never;

type PropsFromList<PropList extends ReadonlyArray<ListProp>> = {
    [i in IndexKeys<PropList> as GetName<PropList[i]>]?: MqProp<GetListKeys<PropList[i]>> | MqProp<string | number>;
};

type NamedPropsFromList<PropList extends ReadonlyArray<ListObject>> = {
    [i in IndexKeys<PropList> as GetNames<PropList[i]>]?: boolean;
};

type NamedProps = NamedPropsFromList<typeof generator.namedProps>;
type SpaceProps = Partial<Record<typeof spaceNames[number], MqProp<number | string>>>;
type VariableProps = PropsFromList<typeof generator.variableProps>;

type HelperFnsProps = { flexLayout?: MqProp<FlexLayoutType>; margin?: string; padding?: string };

export type GeneratedPropTypes = NamedProps & SpaceProps & VariableProps & HelperFnsProps;
