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

export const findAll = async(req, res) => {
    try {
        const users = await Usuario.findAllActive()

        res.status(200).json({
            message: "Usuarios encontrados con exito",
            status: 200,
            data: users
        })
    } catch (error) {
        res.status(500).json({
            message: 'Error al encontrar los usuarios',
            status: 500
        })
    }
}

export const findById = async(req, res) => {
    try {
        const { id } = req.params;

        const user = await Usuario.findActiveById(id);
        /* if(!user) throw new Error('No encontramos un usuario con ese id') */

        res.status(200).json({
            message: 'Usuario encontrado con éxito',
            status: 200,
            data: user
        })
    } catch (error) {
         res.status(500).json({
           message: "Error al encontrar al usuarios",
           status: 500,
           error
         });
    }
}