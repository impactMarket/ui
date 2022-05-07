import { GeneratedPropTypes } from '../types';
import { colors, shadowXl } from '../theme';
import { ease, generateProps, mq, transitions } from 'styled-gen';
import { position, rgba } from 'polished';
import { useModal } from './ModalManager';
import React from 'react';
import styled, { css } from 'styled-components';

// #region ====== style ===
const Backdrop = styled.div<{ isActive?: boolean }>`
    ${position('fixed', 0)};
    ${transitions('opacity', 200, 'linear')};

    background-color: ${rgba(colors.g700, 0.6)};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    z-index: 0;
`;

const ModalContent = styled.div<{ isActive?: boolean }>`
    ${transitions(['opacity', 'transform'], 500, ease.inOutCubic)};

    background-color: ${colors.n01};
    border-radius: 0.75rem;
    margin: auto;
    opacity: 0;
    transform: translateY(2rem);
    z-index: 1;

    ${({ isActive }) =>
        isActive &&
        css`
            opacity: 1;
            transform: translateY(0);
        `};

    ${shadowXl};

    ${generateProps};
`;

const Wrapper = styled.div`
    ${position('fixed', 0)};

    display: flex;
    height: 100vh;
    overflow: auto;
    padding: 1rem;
    position: fixed;
    width: 100vw;
    z-index: 99999;

    ${mq.tabletLandscape(css`
        padding: 5.875rem;
    `)}
`;
// #endregion === style ===

type ModalProps = {
    isActive?: boolean;
    children?: any;
} & GeneratedPropTypes;

export const ModalWrapper: React.FC<ModalProps> = props => {
    const { children, ...forwardProps } = props;
    const { isActive } = useModal();

    if (!children) {
        return null;
    }

    return (
        <Wrapper>
            <Backdrop isActive={isActive} />
            <ModalContent isActive={isActive} {...forwardProps}>
                {children}
            </ModalContent>
        </Wrapper>
    );
};
