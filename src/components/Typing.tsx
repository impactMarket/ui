import { GeneratedPropTypes } from '../types';
import { colors } from '../theme/colors';
import { generateProps } from 'styled-gen';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div<GeneratedPropTypes>`
    align-items: center;
    display: flex;

    ${generateProps};
`;

const Dot = styled.div`
    animation: typingAnimation 1.8s infinite ease-in-out;
    border-radius: 50%;
    height: 0.25rem;
    margin-right: 0.25rem;
    width: 0.25rem;

    &:nth-child(1) {
        animation-delay: 200ms;
        background-color: ${colors.g500};
    }
    &:nth-child(2) {
        animation-delay: 300ms;
        background-color: ${colors.g400};
    }
    &:nth-child(3) {
        animation-delay: 400ms;
        background-color: ${colors.g500};
    }
    &:last-child {
        margin-right: 0;
    }

    @keyframes typingAnimation {
        0% {
            transform: translateY(0rem);
        }
        25% {
            transform: translateY(-0.5rem);
        }
        50% {
            transform: translateY(0rem);
        }
    }
`;

export const Typing: React.FC<GeneratedPropTypes> = props => {
    return (
        <Wrapper {...props}>
            <Dot />
            <Dot />
            <Dot />
        </Wrapper>
    );
};
