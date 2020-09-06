import db from './../database/connection';
import { Request, Response, response } from 'express';


interface scheduleItem {
    week_day: number;
    from: string;
    to: string;
}

export default class  ConnectionsController {
    async index(req: Request, res: Response) {
        const totalConnections = await db('connections').count('* as total')
        const {total} = totalConnections[0]

        return res.json({"total": total})
    }
    async create(req: Request, res: Response)   {
        const {user_id} = req.body;
        await db('connections').insert({
            user_id,
        })

        return res.status(201).send();
    }
}