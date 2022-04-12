import { Card } from './Card';
import { GeneratedPropTypes } from '../types';
import { Icon } from './Icon';
import { Text } from './Typography';
import { colors } from '../theme';
import { ease, transitions } from 'styled-gen';
import OutsideAlerter from '../hooks/outsideAlerter';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

// #region ====== style ===
const DropdownMenuWrapper = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
`;

const LinkWrapper = styled.div`
    align-items: center;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const ContentWrapper = styled.div<{ isActive?: boolean; elHeight?: number }>`
    ${transitions('visibility', 350, ease.inOutCubic)};
    height: auto;
    left: 0;
    position: absolute;
    top: ${({ elHeight }) => ((elHeight || 0) + 8) / 16}rem;
    visibility: ${({ isActive }) => (isActive ? 'visible' : 'hidden')};
    width: auto;
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
    title: string;
    items: React.ReactNode[];
} & GeneratedPropTypes;

export const DropdownMenu: React.FC<DropdownMenuProps> = props => {
    const { items, title, ...forwardProps } = props;
    const [showContent, toggleContent] = useState(false);

    const contentRef = useRef<any>();

    const closeDropdownMenu = () => toggleContent(false);

    const clickItem = (onClick: any) => {
        closeDropdownMenu();
        onClick();
    };

    return (
        <OutsideAlerter onClose={closeDropdownMenu}>
            <DropdownMenuWrapper {...forwardProps}>
                <LinkWrapper onClick={() => toggleContent(!showContent)} ref={contentRef}>
                    <Text mr={0.5} p600>
                        {title}
                    </Text>
                    <Icon icon={showContent ? 'chevronUp' : 'chevronDown'} p600 />
                </LinkWrapper>
                {items?.length > 0 && (
                    <ContentWrapper elHeight={contentRef?.current?.clientHeight} isActive={showContent}>
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
        </OutsideAlerter>
    );
};
