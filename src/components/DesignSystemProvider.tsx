import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from '../theme';

type Props = {
    children: any;
};

export const DesignSystemProvider = (props: Props) => {
    const { children } = props;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};
