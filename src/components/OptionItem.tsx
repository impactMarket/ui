import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from './Typography';
import { colors } from '../theme/colors';
import { generateProps } from 'styled-gen';
import { size } from 'polished';
import React from 'react';
import styled from 'styled-components';

export type OptionItemProps = {
    isActive?: boolean;
    content: any;
} & GeneratedPropTypes;

const ContentWrapper = styled.div`
    padding-right: 0.5rem;
    width: 100%;
`;

const IconWrapper = styled.div<{ isActive?: boolean }>`
    ${size('1.25rem')};

    align-items: center;
    background-color: ${({ isActive }) => (isActive ? colors.p600 : 'transparent')};
    border-color: ${({ isActive }) => (isActive ? colors.p600 : colors.g300)};
    border-radius: 50%;
    border-style: solid;
    border-width: 1px;
    color: ${colors.n01};
    display: flex;
    flex-shrink: 0;
    justify-content: center;

    svg {
        height: auto;
        width: 0.75rem;
    }
`;

type WrapperProps = {
    isActive?: boolean;
} & GeneratedPropTypes;

const Wrapper = styled.a<WrapperProps>`
    align-items: flex-start;
    background-color: ${({ isActive }) => (isActive ? colors.p50 : 'transparent')};
    border-color: ${({ isActive }) => (isActive ? colors.p300 : colors.g300)};
    border-radius: 0.5rem;
    border-style: solid;
    border-width: 1px;
    display: flex;
    justify-content: flex-start;
    padding: 1rem;

    & + & {
        margin-top: 0.75rem;
    }

    ${generateProps};
`;

export const OptionItem: React.FC<OptionItemProps> = props => {
    const { content, isActive, ...forwardProps } = props;

    return (
        <Wrapper {...forwardProps} isActive={isActive}>
            <ContentWrapper>
                <Text g700>{content}</Text>
            </ContentWrapper>
            <IconWrapper isActive={isActive}>{!!isActive && <Icon icon="checkBold" />}</IconWrapper>
        </Wrapper>
    );
};
