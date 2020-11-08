import convertHourToMinutes from "@utils/convertHourToMinutes";
import { QueryBuilder } from "knex";
import IClassRepository from "../repositories/IClassRepository";

interface RequestBODY {
    param_week_day: string;
    param_time: string;
    param_subject: string;
}

export default class ListClassServices {
    private classesRepository: IClassRepository;

    constructor(classesRepository: IClassRepository) {
        this.classesRepository = classesRepository;
    };

    public async execute({
        param_week_day,
        param_time,
        param_subject
        }: RequestBODY): Promise<QueryBuilder> {

            if (!param_week_day || !param_subject || !param_time) {
                throw Error('Missing filters to search classes')
            };

            const timeInMinutes = convertHourToMinutes(param_time);

            const schedule_classes = this.classesRepository.filterBySubject(
                param_subject);
            const same_week_day_classes = this.classesRepository.filterByWeekDay(
                param_week_day, schedule_classes);
            const all_filters = this.classesRepository.filterBySchedule(
                timeInMinutes, same_week_day_classes);

            return schedule_classes;
    };
}