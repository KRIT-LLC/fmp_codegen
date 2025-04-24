import {config} from './fmp-codegen.config.js';
import {generateTSFromFMP} from './fmp-schema-to-ts.js';

generateTSFromFMP(
    config.FMP_API_URL,
    config.FMP_AUTH_TOKEN,
    config.OUTPUT_PATH,
    config.REMOVE_PREFIXES,
    config.NAME_TRANSFORM,
);
