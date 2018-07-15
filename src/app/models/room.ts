import { Reservation } from "./reservation";

export interface Room {
    id:string;
    number:number;
    reservations:Reservation[];
}
