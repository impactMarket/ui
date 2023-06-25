import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
declare type TypeOptions = 'info' | 'success' | 'warning' | 'error';
export declare const toast: {
    [key in TypeOptions]: (content: any) => React.ReactText;
};
export declare const Toaster: () => React.JSX.Element;
export {};
