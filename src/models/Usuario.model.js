import { v4 as uuidv4 } from 'uuid'
import { query } from '../config/db.config.js';

export class Usuario {
    constructor(name, lastname, email, phone, birthdate, budget) {
        this.id = uuidv4();
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.phone = phone;
        this.birthdate = birthdate;
        this.budget = budget;
        this.active = true
    }

    static async create(data) {
        try {
            const { name, lastname, email, phone, birthday, budget } = data

            const id = uuidv4()
            const active = true
            
            const { rows } = await query(
                'INSERT INTO usuarios (id, name, lastname, email, birthday, phone, budget, active) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
                [id, name, lastname, email, birthday, phone, budget, active]
            )

            return rows[0]
        } catch (error) {
            console.error('Error al crear el usuario', error.message)
            throw new Error(`Error al crear el usuario ${error}`)
        }
    }
}