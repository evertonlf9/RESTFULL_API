const nodeEnv = process.env.NODE_ENV;
const path = nodeEnv === 'test' ? '.env.test' : '.env';
require('dotenv').config({ path });

const env = (key, defaultVal) => process.env[key] || defaultVal;

env.number = (key, defaultVal) =>
  (process.env[key] ? Number(process.env[key]) : defaultVal);

env.boolean = (key, defaultVal = false) =>
  (process.env[key]
    ? process.env[key] === 'true' || process.env[key] === '1'
    : defaultVal);

exports.module =  env;
