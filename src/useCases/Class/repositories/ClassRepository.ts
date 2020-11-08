import db from '@database/connection';
import { QueryBuilder } from 'knex';
import Class from '../entities/Class';
import IClassRepository, { CreateClassDTO } from "./IClassRepository";


export default class ClassRepository implements IClassRepository {

    constructor() { }

    async filterBySchedule(
        timeInMinutes: number,
        classes?: Promise<QueryBuilder>
        ): Promise<QueryBuilder> {

         
            const filtered_classes = await db<Class>('classes').whereExists(function() {
                    this.select('schedule.*')
                        .from('schedule')
                        .whereRaw('`schedule`.`class_id` = `classes`.`id`')
                        .whereRaw('`schedule`.`from` <= ??', [timeInMinutes])
                        .whereRaw('`schedule`.`to` > ??', [timeInMinutes])
                });

            return filtered_classes;
    };

    async filterByWeekDay(
        week_day: string,
        classes?: Promise<QueryBuilder>
        ): Promise<QueryBuilder> {
            
            const testes  = classes ? await classes 
                : await db('classes');

            const filtered_classes = await db('classes').whereExists(
                function() {
                    this.select('schedule.*')
                        .from('schedule')
                        .whereRaw('`schedule`.`class_id` = `classes`.`id`')
                        .whereRaw('`schedule`.`week_day` == ??', [Number(week_day)])
                });
            
            return filtered_classes;
    };

    async filterBySubject(
        subject: string,
        classes?: Promise<QueryBuilder>
        ): Promise<QueryBuilder>{

            const testes = classes ? await classes 
                : await db('classes')
            
            const filtered_calsses = await db('classes').where('classes.subject', '=', subject)
                    .join('users', 'classes.user_id', '=', 'users.id')
                    .select(['classes.*', 'users.*'])

            return filtered_calsses;
    };

    async create({subject, cost, user_id}:CreateClassDTO) {
        const insertedClassesIds = await db('classes').insert({
            subject,
            cost,
            user_id
        });

        return insertedClassesIds;
    }
};