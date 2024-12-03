import { query } from "../config/db.config.js"

export const checkDbConnection = async () => {
    try {
        await query('SELECT NOW()');

    } catch (error) {
        throw new Error(`No se pudo conectar a la base de datos: ERROR ${error}`)
    }
}