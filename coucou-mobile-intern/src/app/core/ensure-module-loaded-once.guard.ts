// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
export class EnsureModuleLoadedOnceGuard {
  constructor( targetModule : any ) {
    if(targetModule) {
      throw new Error(`${targetModule.constructor.name} has been already loaded`)
    }
  }
}
