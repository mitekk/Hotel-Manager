import { Guest } from "./guest";

export interface Reservation {
    id:string;
    fromTime:number;
    toTime:number;
    guests? :Guest[];
}
