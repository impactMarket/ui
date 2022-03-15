import { Spinner } from './Spinner';
import { colors } from '../theme/colors';
import { mq } from 'styled-gen';
import { position, size } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

export const ViewContainerWrapper = styled.div`
    background-color: ${colors.g50};
    height: 100%;
    overflow-y: auto;
    position: relative;
    width: 100%;

    ${mq.tabletLandscape(css`
        padding: 2rem;
    `)};
`;

const ViewContainerContent = styled.div`
    padding: 1.5rem 1rem;
    width: 100%;
`;

const ViewContainerLoading = styled.div<{ isActive?: boolean }>`
    ${position('absolute', 0)};
    ${size('100%')};

    align-items: center;
    background-color: ${colors.g50};
    display: flex;
    justify-content: center;
`;

export const ViewContainer: React.FC<{ isLoading?: boolean }> = props => {
    const { children, isLoading } = props;

    return (
        <ViewContainerWrapper>
            {isLoading ? (
                <ViewContainerLoading isActive={isLoading}>
                    <Spinner g400 isActive />
                </ViewContainerLoading>
            ) : (
                <ViewContainerContent>{children}</ViewContainerContent>
            )}
        </ViewContainerWrapper>
    );
};

ViewContainer.defaultProps = {
    isLoading: false
};
