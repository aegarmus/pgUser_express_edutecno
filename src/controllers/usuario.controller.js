import { Usuario } from "../models/Usuario.model.js"

export const createUser = async(req, res) => {
    try {
        const user = await Usuario.create(req.body);

        res.status(201).json({
            message: "Usuario creado con exito",
            status: 201,
            data: user
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al crear el usuario',
            status: 500
        })
    }
}