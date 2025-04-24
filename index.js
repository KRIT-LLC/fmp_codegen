const {generateTSFromFMP} = require('./fmp-schema-to-ts');

require('dotenv').config();

generateTSFromFMP(
    process.env.FMP_API_URL,
    process.env.FMP_AUTH_TOKEN,
    process.env.OUTPUT_PATH,
);
