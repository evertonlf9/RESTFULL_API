/**
 * Created by everton on 18/10/2018.
 */
import User from '../../migrates/dbStartMigrate/models/user';
import BaseRepository from '../repositores/BaseRepository';

export class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }
}

export default new UserRepository()