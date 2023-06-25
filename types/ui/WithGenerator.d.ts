import React from 'react';
declare type Props = {
    isActive?: boolean;
    children: any;
};
declare const WithGenerator: {
    (props: Props): React.JSX.Element | null;
    defaultProps: {
        isActive: boolean;
    };
};
export default WithGenerator;
