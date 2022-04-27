'use strict';

const fs = require('fs').promises;
const path = require('path');
const snakeCase = require('lodash/snakeCase');

const getFlagName = filename => snakeCase(filename.replace('.svg', '')).toUpperCase();

const generateFlagsIndex = async () => {
    try {
        // eslint-disable-next-line no-undef
        const flagsFolder = path.join(__dirname, 'flags');
        const allFiles = await fs.readdir(flagsFolder);

        const files = allFiles.filter(filename => filename.endsWith('.svg'));

        const fileContent = `/* eslint-disable */
${files.map(filename => `import ${getFlagName(filename)} from './${filename}'`).join(';\n')};

export default {
    ${files.map(filename => `${getFlagName(filename)}`).join(',\n    ')}
};
`;

        await fs.writeFile(`${flagsFolder}/index.ts`, fileContent);

        console.log('Flags index created!');
    } catch (error) {
        console.log(error);
    }
};

generateFlagsIndex();
