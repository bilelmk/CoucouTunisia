import { Component, OnInit } from '@angular/core';
import * as XLSX from "xlsx";
import { SpinnerService } from "../../../core/services/in-app/spinner.service";
import { ExternalClientService } from "../../../core/services/http/external-client.service";
import { AlertService } from "../../../core/services/in-app/alert.service";
import {error} from "protractor";

@Component({
  selector: 'app-cb-importation',
  templateUrl: './cb-importation.component.html',
  styleUrls: ['./cb-importation.component.scss']
})
export class CbImportationComponent implements OnInit {

  data: any = [[1, 2], [3, 4]];
  filtredData = []
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };

  constructor(private spinnerService: SpinnerService,
              private externalClientService: ExternalClientService,
              private alertService : AlertService) { }

  ngOnInit(): void {
    this.spinnerService.activate();
    this.externalClientService.getAll().subscribe(
      res => {
        this.spinnerService.deactivate();
        console.log(res)
      },
      error => {
        this.spinnerService.deactivate();
        console.log(error)
      }
    )
  }

  onFileChange(evt: any) {
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = <any>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
      console.log(this.data.length)
      this.filtredData = this.removeDuplicates(this.data.map(item => { return {phone: item[0] , name: item[1]}}));
      console.log(this.filtredData.length)
    };
    reader.readAsBinaryString(target.files[0]);
  }

  removeDuplicates(arr) {
    var unique = [];
    for(let i=0; i < arr.length; i++){
      if(!this.isExist(arr[i],unique))
        unique.push(arr[i]);
    }
    return unique;
  }

  isExist (object , array) {
    for(let obj of array) {
      if(object.phone === obj.phone) {
        return true
      }
    }
    return false ;
  }

  addBulk() {
    this.spinnerService.activate() ;
    this.externalClientService.addBulk(this.filtredData).subscribe(
      res => {
        this.spinnerService.deactivate() ;
        console.log(res)
      },
      error => {
        this.spinnerService.deactivate() ;
        console.log(error)
      }
    )
  }
}
