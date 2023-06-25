import { FlattenSimpleInterpolation } from 'styled-components';
import { MqProp } from '..';
declare const applyMqProps: (
    prop: MqProp<any>,
    callback: Function | string | FlattenSimpleInterpolation
) => import('styled-components').RuleSet<object>;
export default applyMqProps;
