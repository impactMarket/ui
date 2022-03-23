import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { DesignSystemProvider } from '../components/DesignSystemProvider';
import { ModalManager, ModalProps, openModal } from '../components/ModalManager';
import { Text } from '../components/Typography';
import React from 'react';

const Modal = (props: ModalProps & { date: string }) => {
    const { handleClose, date } = props;

    return (
        <Box column maxW={20} padding={1.5}>
            <Text large>This is an example alert modal opened at {date.toString()}!</Text>
            <Button fluid mt={1.5} onClick={() => handleClose(() => openModal('secondModal'))}>
                Close Modal
            </Button>
        </Box>
    );
};

const Modal2 = (props: ModalProps & { date: string }) => {
    const { handleClose } = props;

    return (
        <Box column maxW={20} padding={1.5}>
            <Text large>And another modal</Text>
            <Button fluid mt={1.5} onClick={() => handleClose()}>
                Close Modal
            </Button>
        </Box>
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
