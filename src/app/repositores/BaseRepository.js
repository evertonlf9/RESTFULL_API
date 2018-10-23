/**
 * Created by everton on 18/10/2018.
 */
import model from '../../migrates/dbStartMigrate/models';
import errorHandler from '../common/middlewares/errorHandler';
const sequelize = model.sequelize;

export class BaseRepository {
    constructor(model) {
        this.model = model;

        this.create = this.create.bind(this);
        this.findAll = this.findAll.bind(this);
        this.findById = this.findById.bind(this);
        this.update = this.update.bind(this);
        this.delete = this.delete.bind(this);
        this.query = this.query.bind(this);
    }

    async create(req, res, data) {
        return new Promise((resolve) => {
            return this.model
                .create(data)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorHandler(err, req, res)
                });
        });
    }

    async update(req, res, data, id) {
        return new Promise((resolve) => {
            return this.model
                .update(data, {where: {id:id}})
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorHandler(err, req, res)
                });
        });
    };

    async delete (req, res, id) {
        return new Promise((resolve) => {
            return this.model
                .findById(id)
                .then((data) => {

                    if (!data || data == null) {
                        resolve(data);
                        return;
                    }
                    
                    data
                    .destroy()
                    .then(() => {
                        resolve()
                    }).catch((err) => {
                        errorHandler(err, req, res)
                    });

                })
                .catch((err) => {
                    errorHandler(err, req, res)
                });
        });
    };

    async findAll(req, res, query) {
        return new Promise((resolve) => {
            this.model
                .findAll(query)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorHandler(err, req, res)
                });
        });
    };

    async findById(req, res, id) {

        return new Promise((resolve) => {
            this.model
                .findById(id)
                .then((data) => {
                    resolve(data)
                })
                .catch((err) => {
                    errorHandler(err, req, res)
                });
        });
    }

    async query(req, res, sql) {

        const header = req.headers;
        sql += ' LIMIT '+ 10;
        // sql = ' LIMIT '+ header.currentpage +',' + header.pagesize;

        return new Promise((resolve) => {
            sequelize
                .query(sql, { type: sequelize.QueryTypes.SELECT})
                .then((data) => {resolve(data)})
                .catch((err) => { errorHandler(err, req, res) });
        });
    }
}

export default BaseRepository;