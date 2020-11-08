interface ScheduleInterface {
    class_id: number; //foreingKey
    week_day : number;
    from: number; //inMinutes
    to: number;   //inMinutes
}

export default class Schedule {
    week_day : number;
    from: number;
    to: number;
    class_id: number;

    constructor({week_day, from, to, class_id}: ScheduleInterface) {
        this.week_day = week_day;
        this.class_id = class_id;
        this.from = from;
        this.to  = to;
    }
};