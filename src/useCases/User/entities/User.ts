import { v4 } from 'uuid';

interface UserInterface {
    id: string;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;
}

export default class User {
    id: string;
    name: string;
    avatar: string;
    whatsapp: string;
    bio: string;

    constructor({name, avatar, whatsapp, bio}: Omit<UserInterface,'id'>) {
        this.id = v4();
        this.name = name;
        this.avatar = avatar;
        this.whatsapp = whatsapp;
        this.bio = bio;
    }

};