declare const getTypographyArgTypes: ({ sizes }: {
    sizes: string[];
}) => {
    size: {
        control: {
            type: string;
        };
        description: string;
        options: string[];
    };
    weight: {
        control: {
            type: string;
        };
        description: string;
        options: string[];
    };
};
export default getTypographyArgTypes;
