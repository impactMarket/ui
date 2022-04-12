import React, { useEffect, useRef } from 'react';

function useOutsideAlerter(ref: any, onClose: any) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref]);
}

export default function OutsideAlerter({ children, onClose }: any) {
    const wrapperRef = useRef(null);

    useOutsideAlerter(wrapperRef, onClose);

    return <div ref={wrapperRef}>{children}</div>;
}
