/// <reference types="react" />
declare type Props = {
    colorPrefix: string;
    accentColorNumber?: number;
};
declare const ColorList: {
    (props: Props): JSX.Element;
    defaultProps: {
        accentColorNumber: number;
    };
};
export default ColorList;
