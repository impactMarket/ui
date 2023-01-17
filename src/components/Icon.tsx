import { GeneratedPropTypes } from '../types';
import { SizeType, setSize } from '../utils/setSize';
import { generateProps } from 'styled-gen';
import React from 'react';
// @ts-ignore: generated file
import icons from '../icons/ui';
import styled from 'styled-components';

const renderPaths = (icon: { paths: any }) =>
    icon.paths.map((path: any, index: number) => (
        <path {...path} fill="currentColor" key={`path-${index}`} style={undefined} />
    ));

type IconProps = {
    icon: string;
    size?: SizeType;
    onClick?: (event: any) => void;
} & GeneratedPropTypes;

const IconSvg = styled.svg<any>`
    fill: currentColor;
    flex-shrink: 0;
    vertical-align: middle;

    ${({ size }) => !!size && setSize(size)};
    ${generateProps};
`;

export const Icon: React.FC<IconProps> = props => {
    const { icon, onClick, ...otherProps } = props;
    const selectedIcon = icons[icon] as any;

    if (!selectedIcon) {
        console.log(`Icon not found: ${icon}`);

        return null;
    }

    if (!selectedIcon.viewbox) {
        console.log(`Viewbox issue with the icon: ${icon}`);

        return null;
    }

    return (
        <IconSvg role="img" viewBox={selectedIcon.viewbox} {...otherProps} onClick={onClick}>
            {renderPaths(selectedIcon)}
        </IconSvg>
    );
};

Icon.defaultProps = {
    size: 1
};
