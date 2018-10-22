/**
 * Created by everton on 18/10/2018.
 */
const model = require('../../migrates/dbStartMigrate/models/index');
const errorHandler = require('../common/middlewares/errorHandler');
const sequelize = model.sequelize;

exports.create = async (table, req, res, query) => {
    return new Promise((resolve) => {
        return model[table]
            .create(data)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                errorHandler(err, req, res)
            });
    });
};

exports.update = async (table, req, res, query) => {
    return new Promise((resolve) => {
        return model[table]
            .update(data)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                errorHandler(err, req, res)
            });
    });
};

exports.findAll = async (table, req, res, query) => {
    return new Promise((resolve) => {
        model[table]
            .findAll(query)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                errorHandler(err, req, res)
            });
        });
};

exports.getById = async (table, req, res, id) => {
    return new Promise((resolve) => {
        model[table]
            .getById(id)
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                errorHandler(err, req, res)
            });
    });
};

exports.query = async(req, res, sql) => {

    const header = req.headers;
    sql += ' LIMIT '+ 10;
    // sql = ' LIMIT '+ header.currentpage +',' + header.pagesize;

    return new Promise((resolve) => {
        sequelize
            .query(sql, { type: sequelize.QueryTypes.SELECT})
            .then((data) => {resolve(data)})
            .catch((err) => { errorHandler(err, req, res) });
    });
};
