import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

/**
 * Esta función ejecuta la query entregada en su parametro text y ejecuta esta petición en la DB en base a los datos entregados en su params
 * @param {string} text - Estructura en formato string de la query que se quiere mandar a la DB 
 * @param {Array<any>} params - Lista de datos que se van a implementar en la query a la DB
 * @returns 
 */
export const query = (text, params) => pool.query(text, params) 