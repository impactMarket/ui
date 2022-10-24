/* eslint-disable no-nested-ternary */
import { Box } from './Box';
import { Card } from './Card';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { GeneratedPropTypes } from '../types';
import { Text } from './Typography';
import { colors } from '../theme/colors';
import { size } from 'polished';
import React from 'react';
import styled from 'styled-components';

const ContentCol = styled.div`
    &:first-of-type {
        ${size('5rem')};

        flex-shrink: 0;
    }

    &:last-of-type {
        display: flex;
        flex-direction: column;
        padding-left: 1.5rem;
        width: 100%;
    }
`;

const Wrapper = styled.div`
    align-items: center;
    display: flex;
`;

export type ProgressCardProps = {
    children?: any;
    label?: string;
    progress?: number;
    pathColor: keyof typeof colors;
} & GeneratedPropTypes;

export const ProgressCard: React.FC<ProgressCardProps> = props => {
    const { children, label, progress, pathColor, ...forwardProps } = props;

    return (
        <Card padding={1.5} {...forwardProps}>
            <Wrapper>
                <ContentCol>
                    <CircularProgressbar
                        strokeWidth={12}
                        styles={buildStyles({
                            pathColor: colors[pathColor],
                            pathTransitionDuration: 0.5,
                            trailColor: colors.p100
                        })}
                        value={progress || 0}
                    />
                </ContentCol>
                <ContentCol>
                    {!!label && (
                        <Text as="div" g500 medium small>
                            {label}
                        </Text>
                    )}
                    <Box mt={!!label ? 0.5 : 0}>{children}</Box>
                </ContentCol>
            </Wrapper>
        </Card>
    );
};

ProgressCard.defaultProps = {
    pathColor: 'p600'
};
