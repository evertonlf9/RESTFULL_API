/**
 * Created by everton on 02/10/2018.
 */

class Auth {
    constructor(){

    }

    authenticate(req, res){
        res.json({key: 'authenticate'});
    }

    accesses(req, res){
        res.json({key: 'accesses'});
    }

    help(req, res){
        res.json({key: 'help'});
    }

    use(req, res, next){ 
        next();
    }
}

export default new Auth();