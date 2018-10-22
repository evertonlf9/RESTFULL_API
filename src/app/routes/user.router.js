import { Router } from 'express';
import User from '../controllers/user.controller';

const router = Router();

router.get('/', User.getAll);
router.get('/getById/:userId', User.getById);
router.get('/:userName', User.getAll);
router.post('/', User.create);
router.put('/:userId', User.update);
router.post('/:userId', User.delete);

export default router;