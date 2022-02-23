export declare const generator: {
    namedProps: ({
        prefix: string;
        list: {
            g25: string;
            g50: string;
            g100: string;
            g200: string;
            g300: string;
            g400: string;
            g500: string;
            g600: string;
            g700: string;
            g800: string;
            g900: string;
            p25: string;
            p50: string;
            p100: string;
            p200: string;
            p300: string;
            p400: string;
            p500: string;
            p600: string;
            p700: string;
            p800: string;
            p900: string;
            e300: string;
            e600: string;
            e700: string;
            w300: string;
            w600: string;
            w700: string;
            s300: string;
            s600: string;
            s700: string;
        };
        cssProp: string;
    } | {
        list: any;
        cssProp: string;
        prefix?: undefined;
    })[];
    spaceProps: {
        prop: string;
        units: string;
    }[];
    variableProps: ({
        name: string;
        cssProp: string;
        helperFn?: undefined;
    } | {
        name: string;
        helperFn: (vertical: "start" | "end" | "around" | "between" | "evenly" | "stretch" | "unset", horizontal: any) => string;
        cssProp?: undefined;
    })[];
};
