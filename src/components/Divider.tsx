import { GeneratedPropTypes } from '../types';
import { Text } from './Typography';
import { colors } from '../theme/colors';
import { generateProps } from 'styled-gen';
import React from 'react';
import styled from 'styled-components';

export type DividerProps = {
    text?: string;
} & GeneratedPropTypes;

const Wrapper = styled.div<GeneratedPropTypes>`
    background-color: ${colors.g200};
    display: block;
    height: 0.0625rem;
    margin: 1rem 0;
    position: relative;
    width: 100%;

    ${generateProps};
`;

const TextWrapper = styled.div`
    background-color: ${colors.g25};
    left: 50%;
    padding: 0 0.5rem;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);

    & p {
        white-space: unset;
        word-break: unset;
    }
`;

export const Divider: React.FC<DividerProps> = props => {
    const { text, ...otherProps } = props;

    return (
        <Wrapper {...otherProps}>
            {!!text && (
                <TextWrapper>
                    <Text g500 small>
                        {text}
                    </Text>
                </TextWrapper>
            )}
        </Wrapper>
    );
};
