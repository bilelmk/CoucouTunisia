export class SearchClientRequest {
  offset: number ;
  limit: number ;
  key: string ;

  constructor( offset: number ,limit: number ,key: string ) {
    this.offset = offset ;
    this.limit = limit ;
    this.key = key ;
  }
}
