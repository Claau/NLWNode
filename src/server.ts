import express, { request } from 'express';
import routes from './routes';

const app = express()

app.header("Access-Control-Allow-Origin", "*");
app.use(express.json())
app.use(routes)

app.listen(3333);