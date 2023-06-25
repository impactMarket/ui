export declare const stateTypes: readonly ['error', 'info', 'success', 'warning', 'system'];
export declare type StateTypes = (typeof stateTypes)[number];
export declare const applyStateColor: (type: StateTypes) => import('styled-components').RuleSet<object>;
export declare const applyAlertStateColor: (type: StateTypes) => import('styled-components').RuleSet<object>;
export declare const applyProgressBarStateColor: (type: StateTypes) => import('styled-components').RuleSet<object>;
export declare const applyLabelStateColor: (type: StateTypes) => import('styled-components').RuleSet<object>;
export declare const applyDotStateColor: (type: StateTypes) => import('styled-components').RuleSet<object>;
