/* eslint-disable no-alert */
import { DesignSystemProvider } from '../components/DesignSystemProvider';
import { DropdownMenu } from '../components/DropdownMenu';
import React from 'react';

const Example = () => (
    <DesignSystemProvider>
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
            title="Dropdown Test"
        />
    </DesignSystemProvider>
);

export default Example;
