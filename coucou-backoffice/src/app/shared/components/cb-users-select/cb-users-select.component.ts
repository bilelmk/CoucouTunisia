import { Component, Input, OnChanges } from '@angular/core';
import { Client } from "../../../core/models/client";

@Component({
  selector: 'app-cb-users-select',
  templateUrl: './cb-users-select.component.html',
  styleUrls: ['./cb-users-select.component.scss']
})
export class CbUsersSelectComponent implements OnChanges {

  error = false ;
  loading = false ;

  public dataSource: Client[];
  displayedColumns = ['checkbox', 'firstName', 'lastName' , 'phone', 'email' ,'active' ];
  @Input('clients') clients ;


  constructor() { }

  ngOnChanges(): void {
    this.dataSource = this.clients
  }

  selectActive() {
    this.clients.map(client => client.selected = client.active)
  }

  deselectAll() {
    this.clients.map(client => client.selected = false )
  }

  selectAll() {
    this.clients.map(client => client.selected = true )
  }

  search(filterValue: string) {
    let toFilterList = [...this.clients]
    toFilterList = toFilterList.filter(
      client => {
        return client.phone.indexOf(filterValue.toLowerCase()) !== -1
          || client.firstName.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1
          || client.lastName.toLowerCase().indexOf(filterValue.toLowerCase()) !== -1;
      }
    )
    this.dataSource = toFilterList;
  }
}
