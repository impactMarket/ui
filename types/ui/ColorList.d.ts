import React from 'react';
declare type Props = {
    colorPrefix: string;
    accentColorNumber?: number;
};
declare const ColorList: {
    (props: Props): React.JSX.Element;
    defaultProps: {
        accentColorNumber: number;
    };
};
export default ColorList;
