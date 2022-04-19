/* eslint-disable no-alert */
import { Tabs as BaseTabs, Tab, TabList, TabPanel, TabsProps } from '../../components/Tabs';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { getGeneratedPropArgs, setGeneratedPropArgs } from '../../helpers/generatedPropArgs';
import React from 'react';
import base from 'paths.macro';

export default {
    argTypes: {
        ...setGeneratedPropArgs()
    },
    parameters: {
        generator: true
    },
    title: `Components/${base.replace('/src/stories/4-composed/', '')}Tabs`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const props = Object.values(args).reduce((results, prop) => ({ ...(results as any), [prop as string]: true }), {
        ...getGeneratedPropArgs(args)
    }) as TabsProps;

    return (
        <BaseTabs {...props}>
            <TabList>
                <Tab number={3} title="Tab 1" />
                <Tab title="Tab 2" />
                <Tab number={50} onClick={() => alert('You clicked Tab 3!')} title="Tab 3" />
            </TabList>
            <TabPanel>Content for Tab 1</TabPanel>
            <TabPanel>Content for Tab 2</TabPanel>
            <TabPanel>Content for Tab 3</TabPanel>
        </BaseTabs>
    );
};

export const Tabs = Template.bind({});
