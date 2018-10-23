/**
 * Created by everton on 17/10/2018.
 */
import UserRepository from '../repositores/UserRepository';
// const baseRepository = require('../services/BaseRepository');

class UserController {
    constructor(){}

    /**
     * @api {post} /users Create User
     * @apiGroup Users
     * @apiSuccess {Object[]} users User's list
     * @apiParam {String} user.name User title
     * @apiParam {String} user.cpf User cpf
     * @apiParam {String} user.email User email
     * @apiParam {String} user.password User password
     * @apiParam {String} user.theme User theme
     * @apiParam {String} user.locale User locale
     * @apiParamExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      "name": "users",
     *      "cpf": "111.111.111-11",
     *      "email": "user@api.com",
     *      "password": "123456",
     *      "theme": "default",
     *      "locale": "pt-br"
     *    }]
     * @apiErrorExample {json} List error
     *    HTTP/1.1 500 Internal Server Error
     */
    create(req, res){

    // const Entry = sequelize.define('Users', {
    //     name: {
    //         type: Sequelize.STRING(150)
    //     },
    //     cpf: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     email: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     password: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     theme: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     locale: {
    //         type: Sequelize.STRING,
    //         allowNull: false
    //     },
    //     active: {
    //         type: Sequelize.BOOLEAN,
    //         allowNull: false
    //     }
    // });
    // Entry.removeAttribute('id');
    // let instance = Entry.build({...req.body, active: true});
    // console.log(instance.toJSON());

        const data = {...req.body, active: true};

        return UserRepository.create(req, res, data)
            .then((data) => res.status(200).send(data));
    }

    /**
     * @api {get} /users List all users
     * @apiGroup Users
     * @apiSuccess {Object[]} users User's list
     * @apiSuccess {String} user.id User id
     * @apiSuccess {String} user.name User title
     * @apiSuccess {String} user.cpf User cpf
     * @apiSuccess {String} user.email User email
     * @apiSuccess {String} user.password User password
     * @apiSuccess {String} user.theme User theme
     * @apiSuccess {String} user.locale User locale
     * @apiSuccess {String} user.active User active
     * @apiSuccess {Date} user.updated_at Update's date
     * @apiSuccess {Date} user.created_at Register's date
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      "id": "171aa983-1c8f-4e3a-a3b7-ecc87d7c744f",
     *      "name": "users",
     *      "cpf": "111.111.111-11",
     *      "email": "user@api.com",
     *      "password": "123456",
     *      "theme": "default",
     *      "locale": "pt-br",
     *      "active": "true",
     *      "updated_at": "2016-02-10T15:46:51.778Z",
     *      "created_at": "2016-02-10T15:46:51.778Z"
     *    }]
     * @apiErrorExample {json} List error
     *    HTTP/1.1 500 Internal Server Error
     */
    /**
     * @api {get} /users/:search Search for one or more users in the list
     * @apiGroup Users
     * @apiSuccess {Object[]} users User's list
     * @apiSuccess {String} user.id User id
     * @apiSuccess {String} user.name User title
     * @apiSuccess {String} user.cpf User cpf
     * @apiSuccess {String} user.email User email
     * @apiSuccess {String} user.password User password
     * @apiSuccess {String} user.theme User theme
     * @apiSuccess {String} user.locale User locale
     * @apiSuccess {String} user.active User active
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      "id": 171aa983-1c8f-4e3a-a3b7-ecc87d7c744f,
     *      "name": "users",
     *      "cpf": "111.111.111-11",
     *      "email": "user@api.com",
     *      "password": "123456",
     *      "theme": "default",
     *      "locale": "pt-br",
     *      "active": "true"
     *    }]
     * @apiErrorExample {json} List error
     *    HTTP/1.1 500 Internal Server Error
     */
    getAll(req, res){
        let query = {};

        if(req.params.userName && req.params.userName  !==  '') {
            const find = '%' + req.params.userName + '%';
            query = {where: {active: 1, $or: {name: {$like: find}, email: {$like: find}}}, limit: 10};
        }

        return UserRepository.findAll(req, res, query)
            .then((data) => res.status(200).send(data));
    }

    /**
     * @api {get} /users/getById/:id Find user by id
     * @apiGroup Users
     * @apiSuccess {Object[]} users User's list
     * @apiSuccess {String} user.id User id
     * @apiSuccess {String} user.name User title
     * @apiSuccess {String} user.cpf User cpf
     * @apiSuccess {String} user.email User email
     * @apiSuccess {String} user.password User password
     * @apiSuccess {String} user.theme User theme
     * @apiSuccess {String} user.locale User locale
     * @apiSuccess {String} user.active User active
     * @apiSuccess {Date} user.updated_at Update's date
     * @apiSuccess {Date} user.created_at Register's date
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      "id": 171aa983-1c8f-4e3a-a3b7-ecc87d7c744f,
     *      "name": "users",
     *      "cpf": "111.111.111-11",
     *      "email": "user@api.com",
     *      "password": "123456",
     *      "theme": "default",
     *      "locale": "pt-br",
     *      "active": "true",
     *      "updated_at": "2016-02-10T15:46:51.778Z",
     *      "created_at": "2016-02-10T15:46:51.778Z"
     *    }]
     * @apiErrorExample {json} Users not found
     *    HTTP/1.1 404 Not Found
     * @apiErrorExample {json} Find error
     *    HTTP/1.1 500 Internal Server Error
     */
    getById(req, res){
        return UserRepository.findById(req, res, req.params.userId)
            .then((data) => res.status(200).send(data));
    }

    /**
     * @api {put} /users/:id  Update the list of users
     * @apiGroup Users
     * @apiParam {Object[]} users User's list
     * @apiParam {String} user.id User id
     * @apiParam {String} user.name User title
     * @apiParam {String} user.cpf User cpf
     * @apiParam {String} user.email User email
     * @apiParam {String} user.password User password
     * @apiParam {String} user.theme User theme
     * @apiParam {String} user.locale User locale
     * @apiParamExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      "id": "171aa983-1c8f-4e3a-a3b7-ecc87d7c744f",
     *      "name": "users",
     *      "cpf": "111.111.111-11",
     *      "email": "user@api.com",
     *      "password": "123456",
     *      "theme": "default",
     *      "locale": "pt-br"
     *    }]
     * @apiErrorExample {json} List error
     *    HTTP/1.1 500 Internal Server Error
     */
    update(req, res){
        return UserRepository.update(req, res, req.body, req.params.userId)
            .then((data) => res.status(200).send(data));
    }

    /**
     * @api {post} /users/:id  Delete a user from the list
     * @apiGroup Users
     * @apiParam {Object[]} users User's list
     * @apiParam {String} user.id User id
     * @apiParamExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      "id": "171aa983-1c8f-4e3a-a3b7-ecc87d7c744f"
     *    }]
     * @apiErrorExample {json} List error
     *    HTTP/1.1 500 Internal Server Error
     */
    delete(req, res){
        return UserRepository.delete(req, res, req.params.userId)
            .then((data) => res.status(200).send(data));
    }
}
export default new UserController();