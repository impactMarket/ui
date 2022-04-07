import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
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
    icon?: string;
    content: string | number;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;

export const Label: React.FC<LabelProps> = props => {
    const { icon, content, ...forwardProps } = props;

    return (
        <Wrapper {...forwardProps}>
            {icon && <Icon icon={icon} mr={0.375} />}
            <Text medium small>
                {content}
            </Text>
        </Wrapper>
    );
};
