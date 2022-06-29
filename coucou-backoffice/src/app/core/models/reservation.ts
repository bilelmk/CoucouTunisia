import { Client } from "./client";
import { Restaurant } from "./restaurant";

export class Reservation {
  id: number ;
  note: string ;
  date: string ;
  time: string ;
  adultNumber: number ;
  childrenNumber: number ;
  babeNumber: number ;
  carNumber: number ;
  price: number ;
  finalPrice: number ;
  state: boolean ;
  canceled: boolean ;
  client: Client ;
  restaurant: Restaurant
}


