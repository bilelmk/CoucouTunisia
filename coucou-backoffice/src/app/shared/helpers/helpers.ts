export class Helpers {

  public static deleteFromArray(object , array) {
    array.splice( array.findIndex( obj => {
      return obj.id === object.id
    }) ,  1)
  }

  public static addToArray (object , array) {
    if (!array) array = [];
    array.push(object)
  }

  public static isExist (object , array) {
    for(let obj of array) {
      if(object.id === obj.id) {
        return true
      }
    }
    return false ;
  }

  public static updateFields(object , toUpadateObject) {
    for(const key in object ){
      toUpadateObject[key] = object[key]
    }
  }
}
