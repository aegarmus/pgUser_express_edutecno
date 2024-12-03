import express, { urlencoded } from 'express';
import dotenv from "dotenv";

import UserRouter from './routes/usuario.route.js'
import { serverInit } from './services/serverInit.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());
app.use(urlencoded({ extended: true }));


app.use('/api/v1', UserRouter);


serverInit(app, PORT)

