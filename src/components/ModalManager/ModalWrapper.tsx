import { colors, shadowXl } from '../../theme';
import { ease, mq, transitions } from 'styled-gen';
import { position, rgba } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

// #region ====== style ===
const Backdrop = styled.div<{ isActive?: boolean }>`
    ${position('absolute', 0)};
    ${transitions('opacity', 200, 'linear')};

    background-color: ${rgba(colors.g700, 0.6)};
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    z-index: 0;
`;

const ModalContent = styled.div<{ isActive?: boolean }>`
    ${transitions(['opacity', 'transform'], 500, ease.inOutCubic)};

    background-color: ${colors.n01};
    border-radius: 0.75rem;
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
`;

const Wrapper = styled.div`
    ${position('fixed', 0)};

    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
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
    children?: React.FC | JSX.Element;
};

const ModalWrapper: React.FC<ModalProps> = props => {
    const { children, isActive } = props;

    if (!children) {
        return null;
    }

    return (
        <Wrapper>
            <Backdrop isActive={isActive} />
            <ModalContent isActive={isActive}>{children}</ModalContent>
        </Wrapper>
    );
};

export default ModalWrapper;
