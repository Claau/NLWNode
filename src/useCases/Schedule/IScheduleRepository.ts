import Schedule from "./Schedule";

export interface IScheduleRepository {
    create(data: Schedule): any;
}