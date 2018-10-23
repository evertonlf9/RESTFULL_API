import { Router } from 'express';
import auth from '../controllers/authenticate.controller';
import usersRoutes from './docs.routes';
import usersRoutes from './user.router';

const router = Router();

router.get('/', (req, res)=>{
  res.json({key:  'all'});
});

router.post('/authenticate', auth.authenticate);
router.post('/accesses', auth.accesses);
router.get('/help', auth.help);
router.use(auth.use);

router.use('/users', usersRoutes);

export default router;