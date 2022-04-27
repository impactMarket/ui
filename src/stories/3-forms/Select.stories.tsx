import { Select as BaseSelect } from '../../components/Select';
import { Box } from '../../components/Box';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../components/Typography';
import { setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import React, { useState } from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/forms/${base.replace('/src/stories/3-forms/', '')}Select`
} as ComponentMeta<any>;

const SelectedLabel = ({ selected }) => {
    if (selected?.label) {
        return <Text>{selected?.label}</Text>;
    }

    if (Array.isArray(selected) && selected.length) {
        return <Text>Selected ({selected.length})</Text>;
    }

    return <Text g500>Select an option</Text>;
};

const Option = ({ isActive, label, value }) => (
    <Text>
        {label}, {value.toUpperCase()}
        {isActive ? ' ✓' : ''}
    </Text>
);

const Template: ComponentStory<any> = args => {
    const [value, setValue] = useState('');

    const handleSelect = value => {
        return setValue(value);
    };

    return (
        <Box flex>
            <Box w={15}>
                <BaseSelect
                    onChange={handleSelect}
                    optionsSearchPlaceholder="search"
                    renderLabel={SelectedLabel}
                    renderOption={Option}
                    value={value}
                    {...args}
                />
            </Box>
            <Box bgG200 mb={100} ml={1} padding={1} radius={1}>
                <Text as="div" extrasmall>
                    Selected:
                    <pre>
                        <code>
                            {typeof value === 'string' || typeof value === 'number'
                                ? value
                                : JSON.stringify(value, null, 4)}
                        </code>
                    </pre>
                </Text>
            </Box>
        </Box>
    );
};

export const Select = Template.bind({});
Select.args = {
    isMultiple: false,
    options: [
        { label: 'Portugal', value: 'pt' },
        { label: 'Spain', value: 'es' },
        { label: 'France', value: 'fr' },
        { label: 'Italy', value: 'it' },
        { label: 'Brazil', value: 'br' },
        { label: 'USA', value: 'us' },
        { label: 'United Kingdom', value: 'uk' },
        { label: 'Australia', value: 'au' }
    ],
    withOptionsSearch: false
};
