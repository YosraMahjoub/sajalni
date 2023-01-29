import { Role } from "./role";

export class User {
    
    id!: number;
    nom!: string;
    mdp!: string ;
    email!: string;
    date!: Date;
    roles!: Role[];

}
