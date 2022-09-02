import { Box } from '../components/Box';
import { Button } from '../components/Button';
import { DesignSystemProvider } from '../components/DesignSystemProvider';
import { Display, Text } from '../components/Typography';
import { Toaster, toast } from '../components/Toaster';
import React from 'react';

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
            <Button
                mr={1}
                onClick={() =>
                    toast.info(() => (
                        <>
                            <Display bold p600>
                                Info!
                            </Display>
                            <Text mt={0.5}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit.
                                Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel,
                                nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget
                                blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                            </Text>
                        </>
                    ))
                }
            >
                Open info toast
            </Button>
        </Box>
    </DesignSystemProvider>
);

export default Example;
