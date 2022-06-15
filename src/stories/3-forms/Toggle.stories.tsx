import { Toggle as BaseToggle } from '../../components/Toggle';
import { Box } from '../../components/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import base from 'paths.macro';

export default {
    parameters: {
        generator: true
    },
    title: `Components/Forms/${base.replace('/src/stories/3-forms/', '')}Toggle`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { disabled, wrapperProps, ...otherProps } = args;

    const [isActive, setIsActive] = useState(false);

    return (
        <Box>
            <BaseToggle
                disabled={disabled}
                wrapperProps={wrapperProps}
                {...otherProps}
                isActive={isActive}
                onChange={() => setIsActive(!isActive)}
            />

            <Box bgG200 mt={1} padding={2} radius={1}>
                <pre>
                    <code>{JSON.stringify({ isActive }, null, 4)}</code>
                </pre>
            </Box>
        </Box>
    );
};

export const Toggle = Template.bind({});
Toggle.args = {
    disabled: false,
    wrapperProps: {
        mt: 2
    }
};
