/* eslint-disable sort-keys */
/**
 * check documentation for
 * props generator:
 *
 * styled-gen
 * https://github.com/psoaresbj/styled-gen/tree/master/src/generator
 */
import { colors } from './colors';
import { flexLayout } from '../utils/flexLayout';
import { margin, padding } from 'polished';

// eslint-disable-next-line prettier/prettier
const textAlignment = { center: 'center', left: 'left', right: 'right' };
const displayList = { flex: 'flex', inlineFlex: 'inline-flex', none: 'none', block: 'block' };
const flexDirectionList = { column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse' };

export const generator = {
    // will generate bool props
    // ex: <Text p200>My text</Text>
    namedProps: [
        { prefix: 'bg', list: colors, cssProp: 'background-color' },
        { list: colors, cssProp: 'color' },
        { list: textAlignment, cssProp: 'text-align' },
        { list: displayList, cssProp: 'display' },
        { list: flexDirectionList, cssProp: 'flex-direction' }
    ],

    // Will generate spacing shorthanded props
    // <Text pt={1} mb={{ md 1, xs: 2 }} >padding top 1rem and margin bottom 2rem on mobile and 1 rem on tablet landscape and above </Text>
    spaceProps: [
        { prop: 'padding', units: 'rem' },
        { prop: 'margin', units: 'rem' }
    ],

    // Will generate variable props
    // <Text alpha={0.5} alignment={{ md: 'left', xs: 'center' }}>My 0.5 opacity text centered on mobile</Text>
    variableProps: [
        { name: 'alpha', cssProp: 'opacity' },
        { name: 'tAlign', cssProp: 'text-align' },
        { name: 'radius', cssProp: 'border-radius', units: 'rem' },
        { name: 'fDirection', cssProp: 'flex-direction' },
        { name: 'maxH', cssProp: 'max-height', units: 'rem' },
        { name: 'maxW', cssProp: 'max-width', units: 'rem' },
        { name: 'minH', cssProp: 'min-height', units: 'rem' },
        { name: 'minW', cssProp: 'min-width', units: 'rem' },
        { name: 'show', cssProp: 'display' },
        { name: 'h', cssProp: 'height', units: 'rem' },
        { name: 'w', cssProp: 'width', units: 'rem' },
        { name: 'sColor', list: colors, cssProp: 'color' },
        { name: 'fShrink', cssProp: 'flex-shrink' },
        { name: 'fGrow', cssProp: 'flex-grow' },
        { name: 'fWrap', cssProp: 'flex-wrap' },
        { name: 'order', cssProp: 'order' },
        { name: 'bgColor', list: colors, cssProp: 'background-color' },
        { name: 'overflow', cssProp: 'overflow' },
        { name: 'overflowX', cssProp: 'overflow-x' },
        { name: 'overflowY', cssProp: 'overflow-y' },
        { name: 'bRadius', cssProp: 'border-radius', units: 'rem' },
        { name: 'bTopLeftRadius', cssProp: 'border-top-left-radius', units: 'rem' },
        { name: 'bTopRightRadius', cssProp: 'border-top-right-radius', units: 'rem' },
        { name: 'bBottomLeftRadius', cssProp: 'border-bottom-left-radius', units: 'rem' },
        { name: 'bBottomRightRadius', cssProp: 'border-bottom-right-radius', units: 'rem' },

        // Helper functions
        { name: 'fLayout', helperFn: flexLayout },
        { name: 'margin', helperFn: margin, units: 'rem' },
        { name: 'padding', helperFn: padding, units: 'rem' }
    ]
} as const;
