/// <reference types="react" />
declare type Props = {
    isActive?: boolean;
    children: any;
};
declare const WithGenerator: {
    (props: Props): JSX.Element | null;
    defaultProps: {
        isActive: boolean;
    };
};
export default WithGenerator;
