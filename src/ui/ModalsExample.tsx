import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { DesignSystemProvider } from '../components/DesignSystemProvider';
import { ModalManager, openModal, useModal } from '../components/ModalManager';
import { ModalWrapper } from '../components/ModalWrapper';
import { Text } from '../components/Typography';
import React from 'react';

const Modal = () => {
    const { handleClose, date } = useModal();

    return (
        <ModalWrapper maxW={20} padding={1.5}>
            <Text large>This is an example alert modal opened at {date.toString()}!</Text>
            <Button fluid mt={1.5} onClick={() => handleClose(() => openModal('secondModal'))}>
                Close Modal
            </Button>
        </ModalWrapper>
    );
};

const Modal2 = () => {
    const { handleClose } = useModal();

    return (
        <ModalWrapper maxW={20} padding={1.5}>
            <Text large>And another modal</Text>
            <Button fluid mt={1.5} onClick={() => handleClose()}>
                Close Modal
            </Button>
        </ModalWrapper>
    );
};

const modals = {
    modal: Modal,
    secondModal: Modal2
};

const Example = () => (
    <DesignSystemProvider>
        <ModalManager modals={modals} />
        <Box mt={1}>
            <Button onClick={() => openModal('modal', { date: new Date() })}>Open modal</Button>
        </Box>
    </DesignSystemProvider>
);

export default Example;
