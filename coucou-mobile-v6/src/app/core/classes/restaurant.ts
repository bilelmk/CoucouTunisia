import { Image } from './image';
import { Room } from './room';
import { Menu } from './menu';
import { Planning } from './planning';

export class Restaurant {
    id: number ;
    name: string ;
    description: string ;
    email: string ;
    phone: string ;
    webSite: string ;
    responsable: string ;
    image: string ;
    logitude: number ;
    latitude: number ;
    rooms: Room[];
    menus: Menu[];
    planning: Planning;
    images: Image;
}
