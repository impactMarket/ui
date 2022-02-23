import { DesignSystemProvider } from '../components/DesignSystemProvider';
import { Icon } from '../components/Icon';
import { Text } from '../components/Typography';
import { colors } from '../theme/colors';
import React from 'react';
// @ts-ignore: generated file
import icons from '../icons/ui';
import styled from 'styled-components';

const ItemContent = styled.div`
    border-radius: 16px;
    background-color: ${colors.g100};
    height: 120px;
    width: 120px;
    display: flex;
    flex-direction: column;
`;

const IconWrapper = styled.div`
    margin-top: auto;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const LabelWrapper = styled.div`
    padding: 0 16px;
    text-align: center;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Item = styled.li`
    padding: 16px;
`;

const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: -8px;
    padding-bottom: 120px;
    width: 100%;
`;

const IconList = () => {
    const iconArr = Object.keys(icons);

    return (
        <DesignSystemProvider>
            <List>
                {iconArr.map(icon => (
                    <Item key={icon}>
                        <ItemContent>
                            <IconWrapper>
                                <Icon icon={icon} p500 size={2.5} />
                            </IconWrapper>
                            <LabelWrapper>
                                <Text extrasmall g500 medium>
                                    {icon}
                                </Text>
                            </LabelWrapper>
                        </ItemContent>
                    </Item>
                ))}
            </List>
        </DesignSystemProvider>
    );
};

export default IconList;
