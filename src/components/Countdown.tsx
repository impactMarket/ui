import { Box } from './Box';
import { Col, Row } from './Grid';
import { Display, Text } from './Typography';
import { GeneratedPropTypes } from '../types';
import { useCountDown } from '../hooks/useCountdown';
import React from 'react';

export type CountdownProps = {
    date?: Date;
    labels?: {
        days?: string;
        hours?: string;
        minutes?: string;
        seconds?: string;
    };
    onEnd?: Function;
    withDays?: boolean;
} & GeneratedPropTypes;

const defaultLabels = {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
};

const iterator = ['days', 'hours', 'minutes', 'seconds'] as const;

export const Countdown: React.FC<CountdownProps & GeneratedPropTypes> = props => {
    const { date, labels, onEnd, withDays, ...forwardProps } = props;
    const localIterator = [...iterator];

    const mergedLabels = { ...defaultLabels, ...labels };

    const targetDate = new Date(date as any);

    const countdown = useCountDown(targetDate, withDays);

    if (!withDays) {
        localIterator.shift();
    }

    if (countdown.reduce((result, current) => result + current, 0) <= 0) {
        if (typeof onEnd === 'function') {
            onEnd();
        }

        return null;
    }

    return (
        <Row {...forwardProps} colSpan={1}>
            {localIterator.map((item, index) => (
                <Col colSize={12 / localIterator.length} key={index}>
                    <Box bgG50 center h="100%" padding="1 0" radius={0.5}>
                        <Display g700>{countdown[index]}</Display>
                        <Text g500 small>
                            {mergedLabels[item]}
                        </Text>
                    </Box>
                </Col>
            ))}
        </Row>
    );
};

Countdown.defaultProps = {
    date: undefined
};
