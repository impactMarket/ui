import React from 'react';
export declare const ViewContainerWrapper: import('styled-components').IStyledComponent<
    'web',
    Omit<
        Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> & {
            ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
        },
        never
    >
>;
export declare const ViewContainer: React.FC<{
    isLoading?: boolean;
    style?: Object;
}>;
