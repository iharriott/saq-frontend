import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Emitters } from 'src/app/emitters/emitter';
import { QuoteEvent } from '../../../app/shared/quote-event.model';
import { QuoteEventsComponent } from '../quote-events/quote-events.component';


@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private dialog: MatDialog) { }

  quoteForm: FormGroup;
  eventList: QuoteEvent[] = [];
  showHeader: boolean = true;
  isEditable: boolean = true;

 /*  eventList: QuoteEvent[] = [{"eventType": "PM3", "eventCategory": "PM3", "jobCode": 9, "componentCode": 11, "sort": 5, "enabled":"yes"},
  {"componentCode": 11,"enabled":"yes", "eventCategory": "PM3","eventType": "PM3", "jobCode": 8,  "sort": 4, }];
  myEvent =  {"componentCode": 50,"enabled":"yes", "eventCategory": "PM3","eventType": "PM3", "jobCode": 7,  "sort": 10, };
   */
  isValid: boolean = true;
  

  dataSource = new MatTableDataSource<QuoteEvent>();
  columns = ['enabled','eventType','eventCategory','jobCode','componentCode','sort'];

  ngOnInit(): void {

    this.quoteForm = this.formBuilder.group({
      quoteNo: Math.floor(1000000 + Math.random() * 900000),
      hmoContractor: '',
      owner: '',
      orignator: '',
      description: '',
      phoneNo: '',
      PONo: '',
      grandTotal: 0
    });
     //this.eventList.push(this.myEvent);
    this.dataSource.data =this.eventList;
    console.log('initial data', this.dataSource.data);

    Emitters.eventLisEmitter.subscribe(
      quoteEvent => {
    
        console.log('quote', quoteEvent);
        //this.dataSource.data = eventList; 
        this.eventList.push(quoteEvent);
        console.log('events list', this.eventList);
      },

    ) 

    this.dataSource.data =this.eventList;
    console.log('data', this.dataSource.data);
    
  }

onSumbit(){
  console.log(this.quoteForm.getRawValue());
}

openDialog(action: string, elem: any){

}

addOrEditEvents(eventIndex, quoteNo){
 const dialogConfig = new MatDialogConfig()
dialogConfig.autoFocus = true;
dialogConfig.disableClose = true;
dialogConfig.width = '50%';
dialogConfig.data = {eventIndex, quoteNo};
this.dialog.open(QuoteEventsComponent,dialogConfig);
}

}

