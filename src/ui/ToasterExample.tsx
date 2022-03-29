import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { DesignSystemProvider } from '../components/DesignSystemProvider';
import React from 'react';
import Toaster, { toast } from '../components/Toaster';

const Example = () => (
    <DesignSystemProvider>
        <Toaster />
        <Box mt={1}>
            <Button mr={1} onClick={() => toast.success('Success!')}>
                Open success toast
            </Button>
            <Button mr={1} onClick={() => toast.warning('Warning!')}>
                Open warning toast
            </Button>
            <Button mr={1} onClick={() => toast.error('Error!')}>
                Open error toast
            </Button>
            <Button mr={1} onClick={() => toast.info('Info!')}>
                Open info toast
            </Button>
        </Box>
    </DesignSystemProvider>
);

export default Example;
