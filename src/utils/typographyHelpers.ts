import { css } from 'styled-components';
import { mq } from 'styled-gen';

export type Size = number | number[];
export type Sizes = { [key: string]: Size };
export type SizeVariations = { [key: string]: Size | Sizes };
export type WeightVariations = { [key: string]: number };

/* eslint-disable no-nested-ternary */
const applySingularSize = (size: Size) => css`
    font-size: ${(typeof size === 'number' ? size : size[0]) / 16}rem;
    letter-spacing: ${typeof size === 'number' ? undefined : size[2] !== undefined ? `${size[2] / 16}rem` : undefined};
    line-height: ${typeof size === 'number' ? undefined : size[1] !== undefined ? `${size[1] / 16}rem` : undefined};
`;

const applyMultipleSizes = (sizes: Sizes) =>
    Object.keys(sizes).map((size: string) =>
        size === 'xs' ? applySingularSize(sizes[size]) : mq.from(size, applySingularSize(sizes[size]))
    );

const applySizes = (sizes: Size | Sizes) =>
    typeof sizes === 'number' || Array.isArray(sizes) ? applySingularSize(sizes) : applyMultipleSizes(sizes);

export const setSizeVariations = (sizeVariations: SizeVariations, defaultKey = 'base') =>
    Object.keys(sizeVariations).reduce(
        (result, key) => ({
            ...result,
            [key === defaultKey ? 'default' : key]: css`
                ${applySizes(sizeVariations[key])}
            `
        }),
        {}
    );

export const setWeightVariations = (weightVariations: WeightVariations, defaultKey = 'regular') =>
    Object.entries(weightVariations).reduce(
        (result, [key, weight]) => ({
            ...result,
            [key === defaultKey ? 'default' : key]: css`
                font-weight: ${weight};
            `
        }),
        {}
    );
