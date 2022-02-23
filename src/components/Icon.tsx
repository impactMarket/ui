import { GeneratedPropTypes } from '../types';
import { generateProps } from 'styled-gen';
import React from 'react';
// @ts-ignore: generated file
import icons from '../icons/ui';
import styled, { css } from 'styled-components';

const renderPaths = (icon: { paths: any }) =>
    icon.paths.map((path: any, index: number) => (
        <path {...path} fill="currentColor" key={`path-${index}`} style={undefined} />
    ));

type IconProps = {
    icon: string;
    size?: number | number[];
} & GeneratedPropTypes;

const setSize = (size: number | number[]) => {
    if (Array.isArray(size)) {
        return css`
            height: ${size?.[0]}rem;
            width: ${size?.[1]}rem;
        `;
    }

    return css`
        height: ${size || 1}rem;
        width: ${size || 1}rem;
    `;
};

const IconSvg = styled.svg<any>`
    fill: currentColor;
    flex-shrink: 0;
    vertical-align: middle;

    ${({ size }) => !!size && setSize(size)};
    ${generateProps};
`;

export const Icon = (props: IconProps): any => {
    const { icon, ...otherProps } = props;
    const selectedIcon = icons[icon] as any;

    if (!selectedIcon) {
        console.log(`Icon not found: ${icon}`);

        return null;
    }

    if (!selectedIcon.viewbox) {
        return console.log(`Viewbox issue with the icon: ${icon}`);
    }

    return (
        <IconSvg role="img" viewBox={selectedIcon.viewbox} {...otherProps}>
            {renderPaths(selectedIcon)}
        </IconSvg>
    );
};

Icon.defaultProps = {
    size: 1
};
