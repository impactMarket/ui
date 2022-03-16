/* eslint-disable sort-keys */
import { AccordionItem, AccordionProps, Accordion as BaseAccordion } from '../../components/Accordion';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../components/Typography';
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
    title: `Components/${base.replace('/src/stories/3-composed/', '')}Accordion`
} as ComponentMeta<any>;

const Template: ComponentStory<any> = args => {
    const { items, ...otherProps } = args;

    const props = Object.values(otherProps).reduce(
        (results, prop) => ({ ...(results as any), [prop as string]: true }),
        {
            ...getGeneratedPropArgs(otherProps)
        }
    ) as AccordionProps;

    return (
        <BaseAccordion {...props}>
            {items.map((title, index) => (
                <AccordionItem key={index} title={title}>
                    <Text>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
                        aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium,
                        ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu
                        nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                    </Text>
                    <Text mt={1}>
                        Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu
                        augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
                        Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a
                        ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede
                        arcu, dapibus eu, fermentum et, dapibus sed, urna.
                    </Text>
                </AccordionItem>
            ))}
        </BaseAccordion>
    );
};

export const Accordion = Template.bind({});
Accordion.args = {
    items: [
        'How Claims work?',
        'How to report suspicious activity?',
        'Have you community funds run out?',
        'My UBI is ending, what’s next?'
    ]
};
