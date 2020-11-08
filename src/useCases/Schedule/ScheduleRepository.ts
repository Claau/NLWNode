import db from '@database/connection';
import { QueryBuilder } from 'knex';
import { IScheduleRepository} from './IScheduleRepository';
import Schedule from './Schedule';


export default class ScheduleRepository implements IScheduleRepository {

    constructor() {}

    public async create({class_id, week_day, from, to}: Schedule): Promise<QueryBuilder> {
        const classSchedule = new Schedule({
                class_id,
                week_day: week_day,
                from: from,
                to: to
        });

        await db('schedule').insert(classSchedule);
        return classSchedule;
    };
}