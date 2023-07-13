/* eslint-disable no-nested-ternary */
import { Box } from '../components/Box';
import { colors } from '../theme/colors';
import { GeneratedPropTypes } from '../types';
import { generateProps } from 'styled-gen';
import { Icon } from './Icon';
import { size } from 'polished';
import { Text } from '../components/Typography';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';

const StepCircle = styled.div<{ isActive: boolean; isCompleted: boolean }>`
    ${css(size('1.5rem'))};

    align-items: center;
    background-color: ${({ isActive, isCompleted }) => (isActive || isCompleted ? colors.p50 : 'white')};
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
    z-index: 1;

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
    position: absolute;
    top: 0.7rem;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    ${generateProps}
`;

export type ProgressIndicatorProps = {
    steps: number;
    onStepClick?: Function;
    currentStep?: number;
    stepsTitles: Array<string>;
} & GeneratedPropTypes;

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = props => {
    const { currentStep, onStepClick, steps, stepsTitles, ...forwardProps } = props;

    const stepItems = new Array(steps).fill(undefined);

    const isCompleted = useCallback(index => index + 1 < (currentStep || 0), [currentStep]);

    const handleStepClick = (step: number) => {
        if (!onStepClick) {
            return;
        }

        return onStepClick(step);
    };

    const pos = (index: number) => (index === 0 ? 'start' : index === steps - 1 ? 'end start' : 'center start');

    return (
        <Wrapper {...forwardProps}>
            <Box flex w="100%" style={{ position: 'relative' }}>
                <StepDivider />
                {stepItems.map((_, index) => (
                    <React.Fragment key={index}>
                        <Box
                            style={{ position: 'relative', width: '100%' }}
                            flex
                            fDirection="column"
                            fLayout={pos(index)}
                            tAlign="end"
                        >
                            <StepCircle
                                as={!!onStepClick && index + 1 < (currentStep || 0) ? 'a' : 'div'}
                                isActive={index + 1 === currentStep || (!index && !currentStep)}
                                isCompleted={isCompleted(index)}
                                onClick={() => handleStepClick((index || 0) + 1)}
                            >
                                {isCompleted(index) && <Icon icon="tick" />}
                            </StepCircle>
                            <Box pr=".5rem">
                                <Text medium g500 flex fWrap="wrap" mt=".5rem">
                                    {stepsTitles[index]}
                                </Text>
                            </Box>
                        </Box>
                    </React.Fragment>
                ))}
            </Box>
        </Wrapper>
    );
};
