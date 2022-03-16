import { useEffect, useState } from 'react';

const getReturnValues = (countDown: number, withDays?: boolean) => {
    const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    if (withDays) {
        return [days, hours, minutes, seconds];
    }

    return [hours + days * 24, minutes, seconds];
};

export const useCountDown = (targetDate: Date, withDays?: boolean) => {
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(countDownDate - new Date().getTime());

    useEffect(() => {
        const interval = setInterval(() => {
            const dateDiff = countDownDate - new Date().getTime();

            if (dateDiff < 1) {
                clearInterval(interval);
            } else {
                setCountDown(dateDiff);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, [countDownDate]);

    return getReturnValues(countDown, withDays);
};
