import { Component, OnInit } from '@angular/core';

import * as XLSX from "xlsx";

@Component({
  selector: 'app-cb-importation',
  templateUrl: './cb-importation.component.html',
  styleUrls: ['./cb-importation.component.scss']
})
export class CbImportationComponent implements OnInit {

  data: any = [[1, 2], [3, 4]];
  filtredData = []
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };

  constructor() { }

  ngOnInit(): void {
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
      this.filtredData = this.removeDuplicates(this.data.map(item => { return {number: item[0] , name: item[1]}}));
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
      if(object.number === obj.number) {
        return true
      }
    }
    return false ;
  }
}
