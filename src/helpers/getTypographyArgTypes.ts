import { fonts } from '../theme';

const getTypographyArgTypes = ({ sizes }: { sizes: string[] }) => ({
    size: {
        control: { type: 'radio' },
        description: 'Pass as bool prop',
        options: sizes
    },
    weight: {
        control: { type: 'radio' },
        description: 'Pass as bool prop',
        options: Object.keys(fonts?.weights)
    }
});

export default getTypographyArgTypes;
