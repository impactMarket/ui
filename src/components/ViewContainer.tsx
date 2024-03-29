import { Spinner } from './Spinner';
import { colors } from '../theme/colors';
import { mq } from 'styled-gen';
import { position, size } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

export const ViewContainerWrapper = styled.div`
    background-color: ${colors.g50};
    overflow-y: auto;
    position: relative;
    width: 100%;
    display: flex;

    ${mq.upTo(
        'tabletLandscape',
        css`
            min-height: 100vh;
            padding-top: 4.1rem;
        `
    )};
`;

const ViewContainerContent = styled.div`
    padding: 1.5rem 1rem;
    width: 100%;
    margin: 0 auto;

    ${mq.tabletLandscape(css`
        max-width: 70.5rem;
        padding: 2rem;
    `)};
`;

const ViewContainerLoading = styled.div<{ isActive?: boolean }>`
    ${position('absolute', 0)};
    ${size('100%')};

    align-items: center;
    background-color: ${colors.g50};
    display: flex;
    justify-content: center;
`;

export const ViewContainer: React.FC<{ isLoading?: boolean; style?: Object; children?: React.ReactNode }> = props => {
    const { children, isLoading, style, ...forwardProps } = props;

    return (
        <ViewContainerWrapper className="view-container" style={style} {...forwardProps}>
            {isLoading ? (
                <ViewContainerLoading isActive={isLoading}>
                    <Spinner g400 isActive />
                </ViewContainerLoading>
            ) : (
                <ViewContainerContent>{children as any}</ViewContainerContent>
            )}
        </ViewContainerWrapper>
    );
};

ViewContainer.defaultProps = {
    isLoading: false
};
