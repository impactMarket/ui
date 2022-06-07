import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { colors, imageIconShadow, shadowXl } from '../theme';
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
    position: relative;
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

const CloseButton = styled.div`
    background: ${colors.n01};
    border: 0.063rem solid ${colors.g300};
    border-radius: 0.5rem;
    cursor: pointer;
    width: 1.75rem;
    height: 1.75rem;
    position: absolute;
    right: 1rem;
    top: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    ${imageIconShadow};
    ${transitions('background', 200, 'linear')};

    &:hover {
        background: ${colors.g100};
    }
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
    onCloseButton?: Function;
} & GeneratedPropTypes;

export const ModalWrapper: React.FC<ModalProps> = props => {
    const { children, onCloseButton, ...forwardProps } = props;
    const { isActive } = useModal();

    if (!children) {
        return null;
    }

    return (
        <Wrapper>
            <Backdrop isActive={isActive} />
            <ModalContent isActive={isActive} {...forwardProps}>
                {!!onCloseButton && typeof onCloseButton === 'function' && (
                    <CloseButton onClick={() => onCloseButton()}>
                        <Icon g700 icon="close" />
                    </CloseButton>
                )}
                {children}
            </ModalContent>
        </Wrapper>
    );
};
