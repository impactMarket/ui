export declare type Size = number | number[];
export declare type Sizes = {
    [key: string]: Size;
};
export declare type SizeVariations = {
    [key: string]: Size | Sizes;
};
export declare type WeightVariations = {
    [key: string]: number;
};
export declare const setSizeVariations: (sizeVariations: SizeVariations, defaultKey?: string) => {};
export declare const setWeightVariations: (weightVariations: WeightVariations, defaultKey?: string) => {};
