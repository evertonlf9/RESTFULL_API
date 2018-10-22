/**
 * Created by everton on 17/10/2018.
 */
import model from '../../migrates/dbStartMigrate/models/index';
import userRepository from '../repositores/UserRepository';
import errorHandler from '../common/middlewares/errorHandler';

// const baseRepository = require('../services/BaseRepository');
const sequelize = model.sequelize;
const Sequelize = model.Sequelize;
const User = model.User;

class UserController {
    constructor(){
    }

    create(req, res){
//     const data = {...req.body, active: true};
//
//     // const Entry = sequelize.define('Users', {
//     //     name: {
//     //         type: Sequelize.STRING(150)
//     //     },
//     //     cpf: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     email: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     password: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     theme: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     locale: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     active: {
//     //         type: Sequelize.BOOLEAN,
//     //         allowNull: false
//     //     }
//     // });
//     // Entry.removeAttribute('id');
//     // let instance = Entry.build({...req.body, active: true});
//     // console.log(instance.toJSON());
//
//     return baseRepository.create("User", req, res, data)
//         .then((data) => res.status(200).send(data));
    }

    getAll(){
        // let query = {};
//
//     if(req.params.userName && req.params.userName  !==  '') {
//         const find = '%' + req.params.userName + '%';
//         query = {where: {active: 1, $or: {name: {$like: find}, email: {$like: find}}}, limit: 10};
//     }
//
//     // return userRepository.findAll("User", req, res, query)
//     //     .then((data) => res.status(200).send(data));
//
//     return baseRepository.findAll("User", req, res, query)
//         .then((data) => res.status(200).send(data));
    }

    getById(req, res){
//     return baseRepository.getById("User", req, res, req.params.userId)
//         .then((data) => res.status(200).send(data));
    }

    update(req, res){
//     return baseRepository.update("User", req, res, req.params.userId)
//         .then((data) => res.status(200).send(data));
    }

    delete(req, res){

    }

    // const findAll = async (req, res, query) => {
//     return new Promise((resolve) => {
//         User.findAll(query)
//             .then((data) => {
//                 resolve(data)
//             })
//             .catch((err) => {
//                 errorHandler(err, req, res)
//             });
//     });
// };
//
// const SequelizeQuery = async (req, res, sql) => {
//
//     const header = req.headers;
//     sql += ' LIMIT '+ 10;
//     // var paginate = ' LIMIT '+ header.currentpage +',' + header.pagesize;
//
//     return new Promise((resolve) => {
//         sequelize
//             .query(sql, { type: sequelize.QueryTypes.SELECT})
//             .then((data) => {resolve(data)})
//             .catch((err) => { errorHandler(err, req, res) });
//     });
// };
}

export default new UserController();

// Create and Save a new Note
// exports.create = (req, res) => {
//     const data = {...req.body, active: true};
//
//     // const Entry = sequelize.define('Users', {
//     //     name: {
//     //         type: Sequelize.STRING(150)
//     //     },
//     //     cpf: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     email: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     password: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     theme: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     locale: {
//     //         type: Sequelize.STRING,
//     //         allowNull: false
//     //     },
//     //     active: {
//     //         type: Sequelize.BOOLEAN,
//     //         allowNull: false
//     //     }
//     // });
//     // Entry.removeAttribute('id');
//     // let instance = Entry.build({...req.body, active: true});
//     // console.log(instance.toJSON());
//
//     return baseRepository.create("User", req, res, data)
//         .then((data) => res.status(200).send(data));
// };
//
// exports.getAll = (req, res) => {
//
//     let query = {};
//
//     if(req.params.userName && req.params.userName  !==  '') {
//         const find = '%' + req.params.userName + '%';
//         query = {where: {active: 1, $or: {name: {$like: find}, email: {$like: find}}}, limit: 10};
//     }
//
//     // return userRepository.findAll("User", req, res, query)
//     //     .then((data) => res.status(200).send(data));
//
//     return baseRepository.findAll("User", req, res, query)
//         .then((data) => res.status(200).send(data));
// };
//
// exports.getById = (req, res) => {
//     console.log(req.params);
//     return baseRepository.getById("User", req, res, req.params.userId)
//         .then((data) => res.status(200).send(data));
// };
//
// // Update a note identified by the noteId in the request
// exports.update = (req, res) => {
//     return baseRepository.update("User", req, res, req.params.userId)
//         .then((data) => res.status(200).send(data));
// };
//
// exports.delete = (req, res) => {
//     res.json({key: 'delete'});
//
//     // return User
//     //     .findById(req.params.id)
//     //     .then(classroom => {
//     //         if (!classroom) {
//     //             return res.status(400).send({
//     //                 message: 'Classroom Not Found',
//     //             });
//     //         }
//     //         return classroom
//     //             .destroy()
//     //             .then(() => res.status(204).send())
//     //             .catch((error) => res.status(400).send(error));
//     //     })
//     //     .catch((err) => { errorHandler(err, req, res) });
// };
//
// const findAll = async (req, res, query) => {
//     return new Promise((resolve) => {
//         User.findAll(query)
//             .then((data) => {
//                 resolve(data)
//             })
//             .catch((err) => {
//                 errorHandler(err, req, res)
//             });
//     });
// };
//
// const SequelizeQuery = async (req, res, sql) => {
//
//     const header = req.headers;
//     sql += ' LIMIT '+ 10;
//     // var paginate = ' LIMIT '+ header.currentpage +',' + header.pagesize;
//
//     return new Promise((resolve) => {
//         sequelize
//             .query(sql, { type: sequelize.QueryTypes.SELECT})
//             .then((data) => {resolve(data)})
//             .catch((err) => { errorHandler(err, req, res) });
//     });
// };