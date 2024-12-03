import { Router } from 'express'
import { createUser, findAll, findById } from '../controllers/usuario.controller.js'


const router = Router()

router.post('/usuario', createUser);
router.get('/usuario', findAll);
router.get('/usuario/:id', findById);

export default router