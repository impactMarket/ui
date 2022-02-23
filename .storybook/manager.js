import { addons } from '@storybook/addons';
import Theme from './Theme';

addons.setConfig({
    sidebar: {
        showRoots: false,
    },
    theme: Theme
});
