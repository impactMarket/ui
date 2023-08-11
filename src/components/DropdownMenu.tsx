/* eslint-disable no-nested-ternary */
import { Card } from './Card';
import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from './Typography';
import { baseShadow, colors } from '../theme';
import { ease, generateProps, transitions } from 'styled-gen';
import { useClickOutside } from '../hooks/useClickOutside';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// #region ====== style ===
const DropdownMenuWrapper = styled.div<GeneratedPropTypes & { asButton?: boolean } & { disabled?: boolean }>`
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
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

    ${generateProps}
`;

const LinkWrapper = styled.div<GeneratedPropTypes & { asButton?: boolean } & { disabled?: boolean }>`
    align-items: center;
    background: ${({ disabled }) => (disabled ? `${colors.g100}` : '')};
    display: flex;
    flex-direction: row;
    justify-content: flex-start;

    ${({ asButton }) => asButton && `padding: 0.625rem;`};

    & p {
        ${transitions('color', 350, ease.inOutCubic)};
    }

    & svg > path {
        ${transitions('fill', 350, ease.inOutCubic)};
    }

    ${generateProps}
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

    & p {
        white-space: unset;
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
    title?: string | React.ReactNode;
    icon?: string | undefined;
    items: React.ReactNode[];
    disabled?: boolean;
    asButton?: boolean;
    rtl?: boolean;
    wrapperProps?: GeneratedPropTypes;
    headerProps?: GeneratedPropTypes;
    titleColor?: string;
};

export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
    const { icon, items, disabled, title, asButton, rtl, wrapperProps, headerProps, titleColor, ...forwardProps } =
        props;
    const [showContent, toggleContent] = useState(false);

    const contentRef = useRef<any>();
    const containerRef = useRef<any>();

    const closeDropdownMenu = () => toggleContent(false);

    const clickItem = (onClick: any) => {
        closeDropdownMenu();
        onClick();
    };

    const color = titleColor ? titleColor : asButton ? 'g700' : 'p600';

    useClickOutside(containerRef?.current, closeDropdownMenu);

    return (
        <DropdownMenuWrapper
            asButton={asButton}
            disabled={disabled}
            ref={containerRef}
            {...wrapperProps}
            {...forwardProps}
        >
            <LinkWrapper
                asButton={asButton}
                disabled={disabled}
                onClick={() => !disabled && toggleContent(!showContent)}
                ref={contentRef}
                {...headerProps}
            >
                {title && (
                    <Text mr={icon ? 0.5 : 0} sColor={color}>
                        {title}
                    </Text>
                )}
                {icon && <Icon icon={icon} sColor={color} />}
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
