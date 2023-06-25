export declare const actions: {
    CLOSE: number;
    DID_MOUNT: number;
    OPEN: number;
    WILL_UNMOUNT: number;
};
export declare const eventManager: {
    emit(event: any, ...args: any): boolean;
    events: Map<any, any>;
    off(event: any): any;
    on(event: any, callback: any): any;
};
