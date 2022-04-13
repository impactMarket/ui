import { Card } from './Card';
import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from './Typography';
import { baseShadow, colors } from '../theme';
import { ease, transitions } from 'styled-gen';
import { useClickOutside } from '../hooks/useClickOutside';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// #region ====== style ===
const DropdownMenuWrapper = styled.div<{ asButton?: boolean }>`
    cursor: pointer;
    display: inline-block;
    position: relative;
    width: auto;
    ${transitions('background-color', 350, ease.inOutCubic)};

    &:hover {
        & svg,
        & svg > path {
            fill: ${colors.g700};
        }

        & p {
            color: ${colors.g700};
        }
    }

    ${({ asButton }) =>
        asButton &&
        `
            ${baseShadow};
            background: ${colors.n01};
            border: 1px solid ${colors.g300};
            border-radius: 8px;

            &:hover {
                background-color: ${colors.g100};
            }
        `};
`;

const LinkWrapper = styled.div<{ asButton?: boolean }>`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    ${({ asButton }) => asButton && `padding: 0.625rem;`};

    & p {
        ${transitions('color', 350, ease.inOutCubic)};
    }
`;

const ContentWrapper = styled.div<{ rtl?: boolean; isActive?: boolean; elHeight?: number }>`
    height: auto;
    position: absolute;
    top: ${({ elHeight }) => ((elHeight || 0) + 8) / 16}rem;
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
    width: auto;

    ${({ rtl }) => (rtl ? `right: 0;` : `left: 0;`)}

    & > div {
        position: relative;
        z-index: 10;
    }
`;

const Item = styled.div`
    ${transitions('background-color', 350, ease.inOutCubic)};
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 0.625rem 1rem;
    width: 100%;
    white-space: nowrap;

    &:first-child {
        border-top-left-radius: 0.5rem;
        border-top-right-radius: 0.5rem;
    }

    &:last-child {
        border-bottom-left-radius: 0.5rem;
        border-bottom-right-radius: 0.5rem;
    }

    &:hover {
        background-color: ${colors.p50};

        & svg,
        & svg > path {
            fill: ${colors.p700};
        }

        & p {
            color: ${colors.p700};
        }
    }
`;
// #endregion === style ===

export type DropdownMenuProps = {
    title?: string;
    icon?: string | undefined;
    items: React.ReactNode[];
    asButton?: boolean;
    rtl?: boolean;
} & GeneratedPropTypes;

export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
    const { icon, items, title, asButton, rtl, ...forwardProps } = props;
    const [showContent, toggleContent] = useState(false);

    const contentRef = useRef<any>();
    const containerRef = useRef<any>();

    const closeDropdownMenu = () => toggleContent(false);

    const clickItem = (onClick: any) => {
        closeDropdownMenu();
        onClick();
    };

    useClickOutside(containerRef?.current, closeDropdownMenu);

    return (
        <DropdownMenuWrapper asButton={asButton} ref={containerRef} {...forwardProps}>
            <LinkWrapper asButton={asButton} onClick={() => toggleContent(!showContent)} ref={contentRef}>
                {title && (
                    <Text mr={icon ? 0.5 : 0} sColor={asButton ? 'g700' : 'p600'}>
                        {title}
                    </Text>
                )}
                {icon && <Icon icon={icon} sColor={asButton ? 'g700' : 'p600'} />}
            </LinkWrapper>
            {items?.length > 0 && (
                <ContentWrapper elHeight={contentRef?.current?.clientHeight} isActive={showContent} rtl={rtl}>
                    <Card padding={0}>
                        {items.map((item: any, index: number) => (
                            <Item key={index} onClick={() => clickItem(item.onClick)}>
                                <Icon g700 icon={item.icon} mr={0.75} />
                                <Text g700>{item.title}</Text>
                            </Item>
                        ))}
                    </Card>
                </ContentWrapper>
            )}
        </DropdownMenuWrapper>
    );
};
