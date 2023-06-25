import React from 'react';
export declare type ModalManagerProps = {
    modals: {
        [key: string]: Function | React.FC | JSX.Element;
    };
};
export declare const openModal: (type: string, props?: {}, options?: {}) => boolean;
export declare const closeModal: (callback: Function, options?: {}) => boolean;
export declare type ModalContextType = {
    isActive: boolean;
    handleClose: Function;
} & {
    [key: string]: any | any[] | undefined;
};
export declare const useModal: () => ModalContextType;
export declare const ModalManager: React.FC<ModalManagerProps>;
