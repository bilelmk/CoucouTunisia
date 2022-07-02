import { Component, OnInit } from '@angular/core';
import { Client } from '../../../core/models/client';
import { PageEvent } from '@angular/material/paginator';
import { ClientsService } from '../../../core/services/http/clients.service';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { SearchClientRequest } from '../../../core/dtos/search-client-request';
import { environment } from "../../../../environments/environment";

@Component({
  selector: 'app-cb-clients',
  templateUrl: './cb-clients.component.html',
  styleUrls: ['./cb-clients.component.scss']
})
export class CbClientsComponent implements OnInit {

  public dataSource: Client[];
  displayedColumns = ['image' , 'firstName', 'lastName' , 'phone', 'email' ,'active' , 'buttons' ];
  clients : Client[] = [] ;

  error = false ;
  loading = false ;

  limit = 10 ;
  offset = 0 ;
  key = "" ;

  recordsNumber ;
  pageEvent: PageEvent ;

  url = environment.url + '/api/images/'

  constructor(private clientsService: ClientsService ,
              private spinnerService: SpinnerService ) { }

  ngOnInit() {
    this.getRecords()
  }

  onPaginationChange(event){
    this.offset = this.limit * event.pageIndex
    this.getRecords()
  }

  getRecords(){
    this.loading = true ;
    this.spinnerService.activate()
    let searchClientRequest = new SearchClientRequest(this.offset, this.limit, this.key)
    this.clientsService.getAll(searchClientRequest).subscribe(
      (res :any) => {
        this.loading = false ;
        this.recordsNumber = res.count ;
        this.clients = res.rows ;
        this.dataSource = this.clients
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  search(key){
    this.offset = 0 ;
    this.key = key.value
    this.getRecords()
  }

  toggleActiveStatus(client: Client) {
    this.spinnerService.activate()
    if(client.active == true) {
      this.clientsService.block(client.id).subscribe(
        res => {
          client.active = false ;
          this.spinnerService.deactivate()
        },
        error => {
          this.spinnerService.deactivate()
          console.log(error)
        }
      )
    } else if(client.active == false) {
      this.clientsService.deblock(client.id).subscribe(
        res => {
          client.active = true ;
          this.spinnerService.deactivate()
        },
        error => {
          this.spinnerService.deactivate()
          console.log(error)
        }
      )
    }
  }


  openDetailsDialog(client: any) {

  }

}
