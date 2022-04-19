import { css } from 'styled-components';

export type SizeType = number | number[];

export const getSize = (size?: SizeType, isWidth?: boolean) => {
    if (Array.isArray(size)) {
        return isWidth ? size[1] : size[0];
    }

    return size;
};

export const setSize = (size?: SizeType, defaultSize: number = 1) => {
    if (Array.isArray(size)) {
        return css`
            height: ${size?.[0]}rem;
            width: ${size?.[1]}rem;
        `;
    }

    return css`
        height: ${size || defaultSize}rem;
        width: ${size || defaultSize}rem;
    `;
};
