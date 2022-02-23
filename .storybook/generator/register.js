// .storybook/my-addon/register.js
// import { AddonPanel } from '@storybook/components';
import { addons, makeDecorator, useParameter as useParameterFromAddons } from '@storybook/addons';
// import { useParameter } from '@storybook/api';
import React from 'react';
import WithGenerator from '../../src/ui/WithGenerator';

const ADDON_ID = 'generator';
// const PANEL_ID = `${ADDON_ID}/Props`;

// const MyPanel = props => {
//     const isActive = useParameter(ADDON_ID, false);

//     if (!isActive) {
//         return <div>No generated props</div>
//     }

//     return (
//         <>
//             <input type="text" value="" />
//         </>
//     )
// };

addons.register(ADDON_ID, (api) => {
    // addons.add(PANEL_ID, {
    //     type: types.PANEL,
    //     title: 'Generator props',
    //     render: ({ active, key }) => (
    //         <AddonPanel active={active} key={key}>
    //             <MyPanel />
    //         </AddonPanel>
    //     ),
    // });
});

export const withGenerator = makeDecorator({
    name: 'withGenerator',
    parameterName: 'generator',
    wrapper: (storyFn, { parameters, globals }) => {
        const isActive = useParameterFromAddons('generator', false);

        if (!isActive) {
            return <>{storyFn()}</>
        }

        return <WithGenerator isActive>{storyFn()}</WithGenerator>
    }
});
