/* eslint-disable no-alert */
import { Box } from '../components/Box';
import { DesignSystemProvider } from '../components/DesignSystemProvider';
import { DropdownMenu } from '../components/DropdownMenu';
import { Text } from '../components/Typography';
import React from 'react';

const Example = () => (
    <DesignSystemProvider>
        <Text mt={1}>Examples aligned to the left</Text>
        <Box mt={1}>
            <DropdownMenu
                icon="chevronDown"
                items={[
                    {
                        icon: 'eye',
                        onClick: () => alert('You clicked Item 1!'),
                        title: 'Item 1'
                    },
                    {
                        icon: 'key',
                        onClick: () => alert('You clicked Item 2!'),
                        title: 'Another Item 2'
                    },
                    {
                        icon: 'spaceship',
                        onClick: () => alert('You clicked Item 3!'),
                        title: 'Item 3'
                    }
                ]}
                title="Dropdown Test"
            />
        </Box>
        <Box mt={1}>
            <DropdownMenu
                asButton
                items={[
                    {
                        icon: 'eye',
                        onClick: () => alert('You clicked Item 1!'),
                        title: 'Item 1'
                    },
                    {
                        icon: 'key',
                        onClick: () => alert('You clicked Item 2!'),
                        title: 'Another Item 2'
                    },
                    {
                        icon: 'spaceship',
                        onClick: () => alert('You clicked Item 3!'),
                        title: 'Item 3'
                    }
                ]}
                title="Button"
            />
        </Box>
        <Text right>Examples aligned to the right</Text>
        <Box mt={1} right>
            <DropdownMenu
                items={[
                    {
                        icon: 'eye',
                        onClick: () => alert('You clicked Item 1!'),
                        title: 'Item 1'
                    },
                    {
                        icon: 'key',
                        onClick: () => alert('You clicked Item 2!'),
                        title: 'Another Item 2'
                    },
                    {
                        icon: 'spaceship',
                        onClick: () => alert('You clicked Item 3!'),
                        title: 'Item 3'
                    }
                ]}
                rtl
                title="Dropdown Test"
            />
        </Box>
        <Box mt={1} right>
            <DropdownMenu
                asButton
                icon="settings"
                items={[
                    {
                        icon: 'eye',
                        onClick: () => alert('You clicked Item 1!'),
                        title: 'Item 1'
                    },
                    {
                        icon: 'key',
                        onClick: () => alert('You clicked Item 2!'),
                        title: 'Another Item 2'
                    },
                    {
                        icon: 'spaceship',
                        onClick: () => alert('You clicked Item 3!'),
                        title: 'Item 3'
                    }
                ]}
                rtl
            />
        </Box>
        <Box mb={8} mt={1} right>
            <DropdownMenu
                asButton
                icon="settings"
                items={[
                    {
                        icon: 'eye',
                        onClick: () => alert('You clicked Item 1!'),
                        title: 'Item 1'
                    },
                    {
                        icon: 'key',
                        onClick: () => alert('You clicked Item 2!'),
                        title: 'Another Item 2'
                    },
                    {
                        icon: 'spaceship',
                        onClick: () => alert('You clicked Item 3!'),
                        title: 'Item 3'
                    }
                ]}
                rtl
                title="Button"
            />
        </Box>
    </DesignSystemProvider>
);

export default Example;
