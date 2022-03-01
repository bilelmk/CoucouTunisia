import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeService {

    modeSubject = new BehaviorSubject(null);

    constructor( private storage : Storage) { }

  setInitialMode(){
        console.log("test")
    this.storage.get('mode').then(
        mode => {
            console.log(mode)
          if (mode){
            this.modeSubject.next(mode)
          }
          else {
            this.modeSubject.next('passenger')
            this.storage.set('mode' , 'passenger');
          }
        }
    ).catch(err => console.log(err) )
  }

  changeMode(mode){
    this.modeSubject.next(mode)
    this.storage.set('mode' , mode);
  }
}
