const fs = require('fs');
require('dotenv').config();

fs.writeFileSync('./src/env.js',
`export const GITHUB_TOKEN = '${process.env.GITHUB_TOKEN}';
`);
