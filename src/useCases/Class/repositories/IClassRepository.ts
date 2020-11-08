import db from '@database/connection';
import { QueryBuilder } from 'knex';
import Class from '../entities/Class';

export interface CreateClassDTO {
    subject: string;
    cost: number;
    user_id: number;
};

export default interface IClassRepository {
    filterBySchedule(timeInMinutes: number, classes?: Promise<QueryBuilder>): any;
    filterByWeekDay(week_day: string, classes?: Promise<QueryBuilder>): any;
    filterBySubject(subject: string, classes?: Promise<QueryBuilder>): any;
    create(data: CreateClassDTO): any;
};