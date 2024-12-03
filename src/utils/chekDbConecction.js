import { query } from "../config/db.config.js"

export const checkDbConnection = async () => {
    try {
        const { rows } = await query('SELECT NOW()');
        return rows[0]
    } catch (error) {
        throw new Error(`No se pudo conectar a la base de datos: ERROR ${error}`)
    }
}