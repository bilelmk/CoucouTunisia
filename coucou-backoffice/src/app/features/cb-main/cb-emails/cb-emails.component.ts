import { Component, OnInit } from '@angular/core';
import { SpinnerService } from '../../../core/services/in-app/spinner.service';
import { ClientsService } from '../../../core/services/http/clients.service';
import { MailingService } from '../../../core/services/http/mailing.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import { UploadAdapter } from '../../../../core/services/in-app/upload-adapter';

@Component({
  selector: 'app-cb-emails',
  templateUrl: './cb-emails.component.html',
  styleUrls: ['./cb-emails.component.scss']
})
export class CbEmailsComponent implements OnInit {

  clients = [] ;
  error = false ;
  loading = false ;

  Editor = ClassicEditor;

  constructor(private spinnerService: SpinnerService ,
              private clientService: ClientsService ,
              private mailingService: MailingService) { }

  ngOnInit(): void {
    this.loading = true ;
    this.spinnerService.activate()
    this.clientService.getAllLower().subscribe(
      res => {
        this.loading = false ;
        this.clients = res ;
        this.spinnerService.deactivate()
      },
      error => {
        this.loading = false ;
        this.error = true ;
        this.spinnerService.deactivate()
      }
    )
  }

  send(){
    console.log(this.content)
    this.mailingService.sendOne({content: this.content}).subscribe(
      res => {
        console.log(res)
      },
      error => {
        console.log(error)
      }
    )
  }

  // onReady(editor: ClassicEditor): void {
  //   editor.plugins.get( 'FileRepository' ).createUploadAdapter = ( loader ) => {
  //     return new UploadAdapter( loader );
  //   };
  // }
  content: any;
}
