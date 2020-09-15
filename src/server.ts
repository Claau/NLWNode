import express, { request } from 'express';
import routes from './routes';
import cors from 'cors';

const app = express()

app.use(cors())
app.header("Access-Control-Allow-Origin", "*");
app.use(express.json())
app.use(routes)

app.listen(3333);