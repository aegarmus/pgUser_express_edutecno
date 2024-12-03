
import { checkDbConnection } from "../utils/chekDbConecction.js";


export const serverInit = async (app, port) => {
    try {
        console.log('Verificando conexión a la base de datos');
        const { now } = await checkDbConnection();
        console.log(`Conexión éxitosa con PostgreSQL realizada el ${now}`);

        app.listen(port, () => {
            console.log(`Servidor corriendo en el puerto: ${port}`)
        })
    } catch (error) {
        console.error(error.message);
        throw new Error(`Error al conectarse a la base de datos y servidor`, error)
    }
}