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

    getAll(req, res){
        let query = {};

        if(req.params.userName && req.params.userName  !==  '') {
            const find = '%' + req.params.userName + '%';
            query = {where: {active: 1, $or: {name: {$like: find}, email: {$like: find}}}, limit: 10};
        }

        return UserRepository.findAll(req, res, query)
            .then((data) => res.status(200).send(data));
    }

    getById(req, res){
        return userRepository.getById(req, res, req.params.userId)
            .then((data) => res.status(200).send(data));
    }

    update(req, res){
        return userRepository.update(req, res, req.params.userId)
            .then((data) => res.status(200).send(data));
    }

    delete(req, res){

    }
}

export default new UserController();