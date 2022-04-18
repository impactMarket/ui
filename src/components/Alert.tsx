/* eslint-disable no-nested-ternary */
import { BoolPropsFromArray, GeneratedPropTypes } from '../types';
import { Box } from './Box';
import { Col, Row } from './Grid';
import { Icon } from './Icon';
import { StateTypes, applyAlertStateColor, stateTypes } from '../helpers/applyStateColor';
import { Text } from './Typography';
import { generateProps, variations } from 'styled-gen';
import React from 'react';
import styled from 'styled-components';

// #region ====== style ===
const alertColorVariations = stateTypes.reduce(
    (results, type) => ({ ...results, [type === 'info' ? 'default' : type]: applyAlertStateColor(type) }),
    {}
);

const AlertWrapper = styled.div<{ state?: StateTypes } & GeneratedPropTypes>`
    border-radius: 8px;
    border-style: solid;
    border-width: 1px;
    box-sizing: border-box;
    padding: 1rem;
    position: relative;
    width: 100%;

    ${variations(alertColorVariations)};
    ${generateProps};
`;

const AlertCloseWrapper = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
`;
// #endregion === style ===

export type AlertProps = {
    button?: any;
    icon: string;
    title?: string | React.ReactNode;
    message?: string | React.ReactNode;
    handleClose?: Function;
} & BoolPropsFromArray<typeof stateTypes> &
    GeneratedPropTypes;

export const Alert: React.FC<AlertProps> = props => {
    const { button, icon, title, message, handleClose, ...forwardProps } = props;

    const hasButton = !!button;
    const hasClose = !hasButton && typeof handleClose === 'function';

    return (
        <Box w="100%">
            <AlertWrapper {...forwardProps}>
                <Row fLayout="center start">
                    <Col colSize={{ sm: 1, xs: 12 }} minW={2} pb={{ sm: 1, xs: 0.75 }}>
                        <Icon icon={icon} />
                    </Col>
                    <Col colSize={{ sm: hasButton ? 8 : hasClose ? 10 : 11, xs: 12 }} pb={1} pt={{ sm: 1, xs: 0 }}>
                        {title && (
                            <Text mb={0.25} semibold small>
                                {title}
                            </Text>
                        )}
                        {message && <Text small>{message}</Text>}
                    </Col>
                    {hasButton && (
                        <Col colSize={{ sm: 3, xs: 12 }} pt={{ sm: 1, xs: 0 }} tAlign={{ sm: 'right', xs: 'left' }}>
                            {button}
                        </Col>
                    )}
                </Row>
                {hasClose && (
                    <AlertCloseWrapper>
                        <a onClick={handleClose}>
                            <Icon icon="close" />
                        </a>
                    </AlertCloseWrapper>
                )}
            </AlertWrapper>
        </Box>
    );
};
