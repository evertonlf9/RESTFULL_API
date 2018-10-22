/**
 * Created by everton on 02/10/2018.
 */
const corsList = ['http://localhost:63342', 'http://localhost:4200']; // lista de exeção do cors
const corsOptions = {
    origin: function (origin, callback) {
        if (corsList.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback('error')
        }
    }
};

module.exports = corsOptions;