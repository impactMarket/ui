import { actions, eventManager } from './eventManager';
import { createPortal } from 'react-dom';
import React, { useCallback, useContext, useEffect, useState } from 'react';

export type ModalManagerProps = {
    modals: {
        [key: string]: Function | React.FC | JSX.Element;
    };
};

export const openModal = (type: string, props = {}, options = {}) =>
    eventManager.emit(actions.OPEN, type, props, options);

export const closeModal = (callback: Function, options = {}) => eventManager.emit(actions.CLOSE, callback, options);

export type ModalContextType = {
    isActive: boolean;
    handleClose: Function;
} & {
    [key: string]: any | any[] | undefined;
};

const ModalContext = React.createContext<ModalContextType>({ handleClose: () => {}, isActive: false });

export const useModal = () => {
    const context = useContext(ModalContext);

    return context;
};

export const ModalManager: React.FC<ModalManagerProps> = props => {
    const { modals } = props;

    useEffect(() => {
        const wrapper = document?.createElement('div');

        wrapper.id = 'modal-wrapper';
        document.body.appendChild(wrapper);

        return () => {
            document.body.removeChild(wrapper);
        };
    }, []);

    const [activeModal, setActiveModal] = useState<{
        Modal?: React.FC | JSX.Element | Function | null;
        isActive: boolean;
    }>({
        Modal: null,
        isActive: false
    });

    const handleBodyClass = (isOpening?: boolean) => {
        document?.body?.classList[isOpening ? 'add' : 'remove']('modal-open');
        document?.getElementsByTagName('html')[0]?.classList[isOpening ? 'add' : 'remove']('modal-open');
    };

    const handleOpen = useCallback(
        ({ forwardProps, type }) => {
            const Modal = modals?.[type];

            if (!Modal) {
                console.warn(`[react-modal-handler] ::: No modal registered as ${type}!`);
            }

            handleBodyClass(true);
            setActiveModal((prev: any) => ({ ...prev, ...forwardProps, Modal }));

            setTimeout(() => {
                setActiveModal(prev => ({ ...prev, isActive: true }));
            }, 50);
        },
        [modals]
    );

    const handleClose = useCallback((callback?: Function) => {
        handleBodyClass(false);

        setActiveModal((prev: any) => ({ ...prev, isActive: false }));

        setTimeout(() => {
            setActiveModal({ Modal: null, isActive: false });

            if (typeof callback === 'function') {
                callback();
            }
        }, 500);
    }, []);

    useEffect(() => {
        eventManager
            .on(actions.OPEN, (type: string, forwardProps?: any) => handleOpen({ forwardProps, type }))
            .on(actions.CLOSE, (callback?: Function) => handleClose(callback))
            .emit(actions.DID_MOUNT, this);

        return () => {
            eventManager.off(actions.OPEN).off(actions.CLOSE).emit(actions.WILL_UNMOUNT);
        };
    }, [modals]);

    const { Modal, ...forwardProps } = activeModal;
    const { isActive } = forwardProps;

    if (!Modal) {
        return null;
    }

    const Component = Modal as any;

    return createPortal(
        <ModalContext.Provider value={{ ...forwardProps, handleClose, isActive }}>
            <Component />
        </ModalContext.Provider>,
        document.getElementById('modal-wrapper') as HTMLElement
    );
};
