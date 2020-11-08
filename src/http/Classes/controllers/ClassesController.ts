import { Request, Response } from 'express';
import ClassesRepository from '@useCases/Class/repositories/ClassRepository';
import ScheduleRepository from '@useCases/Schedule/ScheduleRepository';
import UserRepository from '@useCases/User/repositories/UserRepository';
import CreateClassService from '@useCases/Class/services/CreateClassService';
import ListClassServices from '@useCases/Class/services/ListClassesService';

const classesRepository = new ClassesRepository();
const scheduleRepository = new ScheduleRepository();
const usersRepository = new UserRepository();

export default class ClassesController {
    async index(req: Request, res: Response) {
        const filter = req.query;

        const listClasses = new ListClassServices(
            classesRepository );

        const week_day = filter.week_day as string;
        const subject = filter.subject as string;
        const time = filter.time as string;
            
        try {
            const classes = await listClasses.execute({
                param_week_day: week_day,
                param_subject: subject,
                param_time: time
            });
            
            return res.json(classes)
        
        } catch(err) {
            return res.json({error: err.message})
        }

    };

    async create(req: Request, res: Response) {
        const {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost,
            schedule
        } = req.body;

        try { 
            const createClass = new CreateClassService(
                classesRepository, 
                usersRepository,
                scheduleRepository
            );


            const clas_id = await createClass.excute({
                name,
                avatar,
                whatsapp,
                bio,
                subject,
                cost,
                schedule
            });
            console.log("serviço executado")

            return res.sendStatus(201)

    } catch(err) {
        return res.json({error: err.message})
    };
    }
};