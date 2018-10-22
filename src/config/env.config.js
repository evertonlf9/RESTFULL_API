/**
 * Created by everton on 01/10/2018.
 */
const env = require('../app/common/utils/env');

exports.modules = {
    env: env('NODE_ENV'),

    host: env('HOST'),
    port: env.number('PORT'),

    publicUrl: env('PUBLIC_URL', 'http://127.0.0.1:8080/api'),
    frontUrl: env('FRONT_URL', 'http://127.0.0.1:1337'),

    dbDialect: env('DB_DIALECT', 'postgres'),
    dbHost: env('DB_HOST', 'localhost'),
    dbUsername: env('DB_USERNAME'),
    dbPassword: env('DB_PASSWORD'),
    dbDatabase: env('DB_DATABASE'),
    dbLogSql: env.boolean('DB_LOG_SQL'),
    dbMaxConnections: env('DB_MAX_CONNECTIONS'),

    encryptionKey: env('ENCRYPTION_KEY'),

    origins: env('ORIGINS'),

    waHeadfull: env.boolean('WA_HEADFULL', false),
    waHeadless: !env.boolean('WA_HEADFULL', false),
    waDontRun: env.boolean('WA_DONT_RUN', false),

    oasGenerator: env.boolean('OAS_GENERATOR', false),

    emailFrom: env('EMAIL_FROM'),
    sendgridApiKey: env('SENDGRID_API_KEY'),
    sendgridConfirmationRegister: env('SENDGRID_CONFIRMATION_REGISTER'),
    sendgridRedefinedPassword: env('SENDGRID_REDEFINED_PASSWORD'),

    displayRoutes: env.boolean('DISPLAY_ROUTES'),

    chromeExecutablePath: env('CHROME_EXECUTABLE_PATH', undefined)

};