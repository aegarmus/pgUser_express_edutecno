import { Router } from 'express'
import { createUser, findAll, findById, updateById } from '../controllers/usuario.controller.js'


const router = Router()

router.post('/usuario', createUser);
router.get('/usuario', findAll);
router.get('/usuario/:id', findById);
router.put('/usuario/:id', updateById)

export default router