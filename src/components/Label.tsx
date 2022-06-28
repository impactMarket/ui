import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { Dot } from './Dot';
import { Icon } from './Icon';
import { StateTypes, applyLabelStateColor, stateTypes } from '../helpers/applyStateColor';
import { Text } from './Typography';
import { generateProps, variations } from 'styled-gen';
import React from 'react';
import styled from 'styled-components';

const labelColorVariations = stateTypes.reduce(
    (results, type) => ({ ...results, [type === 'info' ? 'default' : type]: applyLabelStateColor(type) }),
    {}
);

const Wrapper = styled.div<{ state?: StateTypes } & GeneratedPropTypes>`
    align-items: center;
    border-radius: 1rem;
    display: inline-flex;
    flex-shrink: 0;
    justify-content: center;
    margin-left: auto;
    min-height: 1.5rem;
    padding: 0 0.625rem;

    ${variations(labelColorVariations)};
    ${generateProps};
`;

export type LabelProps = {
    dot?: string;
    icon?: string;
    content: string | number | React.ReactNode;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;

export const Label: React.FC<LabelProps> = props => {
    const { dot, icon, content, ...forwardProps } = props;

    return (
        <Wrapper {...forwardProps}>
            {!!dot && <Dot {...{ [dot]: true }} h={0.375} mr={0.375} w={0.375} />}
            {!!icon && <Icon icon={icon} mr={0.375} />}
            <Text medium small>
                {content}
            </Text>
        </Wrapper>
    );
};
