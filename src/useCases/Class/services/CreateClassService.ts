import { IScheduleRepository } from "@useCases/Schedule/IScheduleRepository";
import Schedule from "@useCases/Schedule/Schedule";
import IUserRepository from "@useCases/User/repositories/IUserRepository";
import convertHourToMinutes from "@utils/convertHourToMinutes";
import IClassRepository from "../repositories/IClassRepository";

interface RequestBody {
    name: string,
    avatar: string,
    whatsapp: string,
    bio: string,
    subject: string,
    cost: number,
    schedule: Schedule[]
};

export default class CreateClassService {
    private classesRepository: IClassRepository;
    private usersRepository: IUserRepository;
    private scheduleRepository: IScheduleRepository;

    constructor(
        classesRepository: IClassRepository,
        usersRepository: IUserRepository,
        scheduleRepository: IScheduleRepository ) {
        this.classesRepository = classesRepository;
        this.usersRepository = usersRepository;
        this.scheduleRepository = scheduleRepository;
    }

    public async excute({
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost,
        schedule }:RequestBody): Promise<Number> {

        const insertedUsersIds = await this.usersRepository.create({
            name,
            avatar,
            whatsapp,
            bio
        });

        const user_id = insertedUsersIds[0];

        const insertedClassesIds = await this.classesRepository.create({
            subject,
            cost,
            user_id
        });

        const class_id = insertedClassesIds[0];

        const register = await schedule.map((scheduleItem: Schedule) => {
            const sc_from = String(scheduleItem.from);
            const sc_to = String(scheduleItem.from);

            return this.scheduleRepository.create({
                class_id,
                week_day: scheduleItem.week_day,
                from: convertHourToMinutes(sc_from),
                to: convertHourToMinutes(sc_to)
            })
        });

        return class_id
    };
}