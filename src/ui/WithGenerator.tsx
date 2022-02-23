import React from 'react';

type Props = {
    isActive?: boolean;
    children: any;
};

const WithGenerator = (props: Props) => {
    const { children, isActive } = props;

    if (!isActive) {
        return null;
    }

    return <>{children}</>;
};

WithGenerator.defaultProps = {
    isActive: false
};

export default WithGenerator;
