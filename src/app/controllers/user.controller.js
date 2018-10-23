/**
 * Created by everton on 17/10/2018.
 */
import UserRepository from '../repositores/UserRepository';
// const baseRepository = require('../services/BaseRepository');

class UserController {
    constructor(){}

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

        return userRepository.create(req, res, data)
            .then((data) => res.status(200).send(data));
    }

    /**
     * @api {get} /tasks List all tasks
     * @apiGroup Tasks
     * @apiSuccess {Object[]} tasks Task's list
     * @apiSuccess {Number} tasks.id Task id
     * @apiSuccess {String} tasks.title Task title
     * @apiSuccess {Boolean} tasks.done Task is done?
     * @apiSuccess {Date} tasks.updated_at Update's date
     * @apiSuccess {Date} tasks.created_at Register's date
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    [{
     *      "id": 1,
     *      "title": "Study",
     *      "done": false
     *      "updated_at": "2016-02-10T15:46:51.778Z",
     *      "created_at": "2016-02-10T15:46:51.778Z"
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
     * @api {get} /tasks/:id Find a task
     * @apiGroup Tasks
     * @apiParam {id} id Task id
     * @apiSuccess {Number} id Task id
     * @apiSuccess {String} title Task title
     * @apiSuccess {Boolean} done Task is done?
     * @apiSuccess {Date} updated_at Update's date
     * @apiSuccess {Date} created_at Register's date
     * @apiSuccessExample {json} Success
     *    HTTP/1.1 200 OK
     *    {
     *      "id": 1,
     *      "title": "Study",
     *      "done": false
     *      "updated_at": "2016-02-10T15:46:51.778Z",
     *      "created_at": "2016-02-10T15:46:51.778Z"
     *    }
     * @apiErrorExample {json} Task not found
     *    HTTP/1.1 404 Not Found
     * @apiErrorExample {json} Find error
     *    HTTP/1.1 500 Internal Server Error
     */
    getById(req, res){
        return userRepository.getById(req, res, req.params.userId)
            .then((data) => res.status(200).send(data));
    }

    update(req, res){
        return userRepository.update(req, res, req.params.userId)
            .then((data) => res.status(200).send(data));
    }

    delete(req, res){
        return userRepository.delete(req, res, req.params.userId)
            .then((data) => res.status(200).send(data));
    }
}

export default new UserController();