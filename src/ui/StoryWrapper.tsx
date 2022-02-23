import React from 'react';

type Props = {
    children: any;
    withGenerator: boolean;
};

const StoryWrapper = (props: Props) => {
    const { children, withGenerator } = props;

    return (
        <>
            {withGenerator && <div>StoryWrapper</div>}
            {children}
        </>
    );
};

export default StoryWrapper;
