/* eslint-disable no-nested-ternary */
import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { colors } from '../theme/colors';
import { generateProps } from 'styled-gen';
import { size } from 'polished';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';

const StepCircle = styled.div<{ isActive: boolean; isCompleted: boolean }>`
    ${css(size('1.5rem'))};

    align-items: center;
    background-color: ${({ isActive, isCompleted }) => (isActive || isCompleted ? colors.p50 : 'transparent')};
    border-color: ${({ isActive, isCompleted }) => (isActive || isCompleted ? colors.p600 : colors.g200)};
    border-radius: 50%;
    border-style: solid;
    border-width: 0.125rem;
    box-shadow: ${({ isActive }) => isActive && `0 0 0 0.25rem #F4EBFF`};
    color: ${({ isActive, isCompleted }) => (isActive || isCompleted ? colors.p600 : colors.g200)};
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    overflow: hidden;
    position: relative;

    svg {
        height: auto;
        width: 0.75rem;
    }

    ${({ isActive, isCompleted }) =>
        !isCompleted &&
        css`
            &::after {
                ${size('0.5rem')};

                background-color: ${isActive ? colors.p600 : colors.g200};
                border-radius: 50%;
                content: '';
                position: absolute;
            }
        `}
`;

const StepDivider = styled.div`
    background-color: ${colors.p50};
    display: flex;
    height: 0.125rem;
    width: 100%;
`;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    ${generateProps}
`;

export type ProgressIndicatorProps = {
    steps: number;
    onStepClick?: Function;
    currentStep?: number;
} & GeneratedPropTypes;

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = props => {
    const { currentStep, onStepClick, steps, ...forwardProps } = props;

    const stepItems = new Array(steps).fill(undefined);

    const isCompleted = useCallback(index => index + 1 < (currentStep || 0), [currentStep]);

    const handleStepClick = (step: number) => {
        if (!onStepClick) {
            return;
        }

        return onStepClick(step);
    };

    return (
        <Wrapper {...forwardProps}>
            {stepItems.map((_, index) => (
                <React.Fragment key={index}>
                    {!!index && <StepDivider />}
                    <StepCircle
                        as={!!onStepClick && index + 1 < (currentStep || 0) ? 'a' : 'div'}
                        isActive={index + 1 === currentStep || (!index && !currentStep)}
                        isCompleted={isCompleted(index)}
                        onClick={() => handleStepClick((index || 0) + 1)}
                    >
                        {isCompleted(index) && <Icon icon="tick" />}
                    </StepCircle>
                </React.Fragment>
            ))}
        </Wrapper>
    );
};
