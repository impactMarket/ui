import { Toggle as BaseToggle } from '../../components/Toggle';
import { Box } from '../../components/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import base from 'paths.macro';

export default {
    parameters: {
        generator: true
    },
    title: `Components/forms/${base.replace('/src/stories/3-forms/', '')}Toggle`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { wrapperProps, ...otherProps } = args;

    const [isActive, setIsActive] = useState(false);

    return (
        <Box>
            <BaseToggle
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
    wrapperProps: {
        mt: 2
    }
};
