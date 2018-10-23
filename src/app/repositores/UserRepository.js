/**
 * Created by everton on 18/10/2018.
 */
import Model from '../../migrates/dbStartMigrate/models';
import BaseRepository from '../repositores/BaseRepository';

export class UserRepository extends BaseRepository {
    constructor() {
        super(Model.User);
    }
}

export default new UserRepository