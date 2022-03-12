import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import React from 'react';
import theme from '../theme';

type Props = {
    children: any;
};

export const DesignSystemProvider: React.FC<Props> = props => {
    const { children } = props;

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
};
