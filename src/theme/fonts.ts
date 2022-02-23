/* eslint-disable sort-keys */
const weights = {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
};

const families = {
    sans: '"Inter", sans-serif'
};

export const fonts = {
    families,
    weights
} as const;
