/* eslint-disable no-unused-vars */
import 'react-toastify/dist/ReactToastify.css';
import { Icon } from './Icon';
import { Text } from './Typography';
import { ToastContainer, toast as toastifyToast } from 'react-toastify';
import { colors } from '../theme/colors';
import React from 'react';
import styled from 'styled-components';

// #region ====== style ===
const ToastWrapper = styled.div`
    display: flex;
`;
// #endregion === style ===

type TypeOptions = 'info' | 'success' | 'warning' | 'error';

type ColorType = keyof typeof colors;
type IconType = string;

type ToastTypeOptions = {
    color: ColorType;
    icon: IconType;
};

const toastType: { [key in TypeOptions]: ToastTypeOptions } = {
    error: { color: 'e600', icon: 'alertTriangle' },
    info: { color: 'p600', icon: 'alertCircle' },
    success: { color: 's600', icon: 'checkCircle' },
    warning: { color: 'w300', icon: 'alertCircle' }
};

const Toast = ({ color, children, icon }: { children: any } & ToastTypeOptions) => (
    <ToastWrapper>
        <Icon h={1.1} icon={icon} mr={0.75} sColor={color} />
        <Text medium small w="100%">
            {typeof children === 'function' ? children() : children}
        </Text>
    </ToastWrapper>
);

const types = Object.keys(toastType) as (keyof typeof toastType)[];

export const toast: { [key in TypeOptions]: (content: any) => React.ReactText } = types.reduce(
    (methods: any, type: TypeOptions) => ({
        ...methods,
        [type]: (content: any) => {
            const toastProps = toastType[type];

            return toastifyToast(<Toast {...toastProps}>{content}</Toast>, { type });
        }
    }),
    {}
);

export const Toaster = () => <ToastContainer closeButton={false} icon={false} />;
