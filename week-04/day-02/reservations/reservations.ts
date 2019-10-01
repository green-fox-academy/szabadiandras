'use strict';

function codeGenerator(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function dowGenerator(length) {
    let result = '';
    let weekdays: string[] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    let randomIndex = Math.floor(Math.random() * weekdays.length); 
    let randomDoW = weekdays[randomIndex];
    for ( let i = 0; i < length; i++ ) {
        result += randomDoW;
    }
    return result;
}
// Reservations

export interface Reservationy {
    getDowBooking(): string;
    getCodeBooking(): string;
  }

export class Reservations implements Reservationy{
    public getDowBooking;
    public getCodeBooking;


    constructor(dow?: string, code?: string, getDowBooking?: string, getCodeBooking?: string) {
        this.getDowBooking = dow;
        this.getCodeBooking = code;
    }

        public DOW(): any{
            return dowGenerator(1);
        }

        public CODE(): any{
            return codeGenerator(8);
        }

        public getReservation(): void {
        console.log("Booking# " + this.CODE() + ' for ' + this.DOW());
    }
}

const testing = new Reservations('Test');

for (let i = 0; i <= 10; i++) {
    console.log(testing.getReservation());
}