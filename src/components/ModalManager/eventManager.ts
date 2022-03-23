export const actions = {
    CLOSE: 1,
    DID_MOUNT: 2,
    OPEN: 0,
    WILL_UNMOUNT: 3
};

export const eventManager = {
    emit(event: any, ...args: any) {
        if (!this.events.has(event)) {
            return false;
        }

        this.events
            .get(event)
            /* eslint-disable-next-line */
            .forEach((callback: any) => setTimeout(() => callback.call(null, ...args), 0));

        return true;
    },

    events: new Map(),

    off(event: any) {
        this.events.delete(event);

        return this;
    },

    on(event: any, callback: any) {
        this.events.has(event) || this.events.set(event, []);

        this.events.get(event).push(callback);

        return this;
    }
};
