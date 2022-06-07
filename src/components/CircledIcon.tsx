/* eslint-disable sort-keys */
import { BoolProps, BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { StateTypes, applyStateColor, stateTypes } from '../helpers/applyStateColor';
import { generateProps, variations } from 'styled-gen';
import { size } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

const circledIconColorVariations = stateTypes.reduce(
    (results, type) => ({ ...results, [type === 'info' ? 'default' : type]: applyStateColor(type) }),
    {}
);

export const circledIconSizeVariations = {
    default: css`
        ${size('2.5rem')};

        svg {
            ${size('1rem')};
        }
    `,

    small: css`
        ${size('2rem')};

        svg {
            ${size('0.8rem')};
        }
    `,

    medium: css`
        ${size('3rem')};

        svg {
            ${size('1.3rem')};
        }
    `,

    large: css`
        ${size('3.5rem')};

        svg {
            ${size('1.5rem')}
        }
    `,

    superlarge: css`
        ${size('5.313rem')};

        svg {
            ${size('2rem')}
        }
    `,

    extralarge: css`
        ${size('7.5rem')};

        svg {
            ${size('3rem')}
        }
    `
};

const Wrapper = styled.div<{ state?: StateTypes } & GeneratedPropTypes>`
    align-items: center;
    border-radius: 50%;
    display: inline-flex;
    flex-shrink: 0;
    justify-content: center;

    ${variations(circledIconColorVariations)};
    ${variations(circledIconSizeVariations)};
    ${generateProps};
`;

export type CircledIconProps = {
    icon: string;
} & BoolProps<typeof circledIconSizeVariations> &
    BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;

export const CircledIcon: React.FC<CircledIconProps> = props => {
    const { icon, ...forwardProps } = props;

    return (
        <Wrapper {...forwardProps}>
            <Icon icon={icon} />
        </Wrapper>
    );
};
