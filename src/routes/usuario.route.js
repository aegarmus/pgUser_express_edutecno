import { Router } from 'express'
import { createUser, findAll, findById, permaDeleteUser, softDeleteUser, updateById } from '../controllers/usuario.controller.js'


const router = Router()

router.post('/usuario', createUser);
router.get('/usuario', findAll);
router.get('/usuario/:id', findById);
router.put('/usuario/:id', updateById);
router.delete('/admin/usuario/:id', permaDeleteUser);
router.delete('/usuario/:id', softDeleteUser);

export default router