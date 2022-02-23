import { DesignSystemProvider, colors } from '..';
import { Text } from '../components/Typography';
import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
    padding: 16px;
`;

const ItemContent = styled.div`
    border-radius: 8px;
    box-shadow: 0px 4px 6px -2px #1018280d, 0px 12px 16px -4px #1018281a;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    height: 156px;
    overflow: hidden;
    width: 104px;
`;

const ColorItemBg = styled.div<{ bgColor?: string }>`
    align-items: center;
    background-color: ${props => props?.bgColor};
    display: flex;
    height: 50%;
    justify-content: center;
    width: 100%;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    padding-bottom: 60px;
    width: 100%;
`;

type Props = {
    colorPrefix: string;
    accentColorNumber?: number;
};

type ParsedColor = {
    code: string;
    key: string;
    number: number;
};

const ColorList = (props: Props) => {
    const { colorPrefix, accentColorNumber } = props;

    const colorItems = Object.entries(colors as { [key: string]: string }).reduce(
        (results, [key, value]) =>
            key.startsWith(colorPrefix)
                ? [...results, { code: value as string, key, number: +key.replace(colorPrefix, '') }]
                : results,
        [] as ParsedColor[]
    );

    return (
        <DesignSystemProvider>
            <List>
                {colorItems.map(({ code, key, number }) => (
                    <Item key={key}>
                        <ItemContent>
                            <ColorItemBg bgColor={code}>
                                <Text
                                    {...(number < 400
                                        ? { [`${colorPrefix}${accentColorNumber}`]: true }
                                        : { n01: true })}
                                >
                                    {key}
                                </Text>
                            </ColorItemBg>
                            <Text g900 medium mt="auto" pl={0.75} pr={0.75}>
                                {number}
                            </Text>
                            <Text g500 pb={0.75} pl={0.75} pr={0.75} small>
                                {code}
                            </Text>
                        </ItemContent>
                    </Item>
                ))}
            </List>
        </DesignSystemProvider>
    );
};

ColorList.defaultProps = {
    accentColorNumber: 500
};

export default ColorList;
