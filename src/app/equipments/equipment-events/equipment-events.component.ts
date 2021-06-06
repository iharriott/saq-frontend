import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {Equipment} from 'src/app/interfaces/equipment';

//https://stackblitz.com/edit/angular-material-editable-table-fazhbc?file=src%2Fapp%2Fapp.component.html

export interface Event {
  // selectedEvent: boolean;
  event: string;
  costPerOccurence: string;
  occurences: number;
  frequency: number;
  price: number;
}

// const EVENT_DATA: Event[] = [
//   { selectedEvent: false, event: 'PM 1', costPerOccurence: '85.12', occurences: 0, frequency: 500, price: 0 },
//   { selectedEvent: false, event: 'PM 2', costPerOccurence: '143.28', occurences: 0, frequency: 1000, price: 0 },
//   { selectedEvent: false, event: 'PM 3', costPerOccurence: '305.76', occurences: 0, frequency: 2000, price: 0 },
//   { selectedEvent: false, event: 'PM 4', costPerOccurence: '629.76', occurences: 0, frequency: 4000, price: 0 },
// ];

const EVENT_DATA: Event[] = [
  { event: 'PM 1', costPerOccurence: '85.12', occurences: 0, frequency: 500, price: 0 },
  { event: 'PM 2', costPerOccurence: '143.28', occurences: 0, frequency: 1000, price: 0 },
  { event: 'PM 3', costPerOccurence: '305.76', occurences: 0, frequency: 2000, price: 0 },
  { event: 'PM 4', costPerOccurence: '629.76', occurences: 0, frequency: 4000, price: 0 },
];

@Component({
  selector: 'app-equipment-events',
  templateUrl: './equipment-events.component.html',
  styleUrls: ['./equipment-events.component.css']
})
export class EquipmentEventsComponent implements OnInit {

  displayedColumns: string[] = ['event', 'costPerOccurence', 'occurences', 'frequency', 'price'];
  //dataSource = EVENT_DATA;
  data: Event[] =  [{ 
    event: '',
    costPerOccurence: '',
    occurences:0,
    frequency: 0,
    price: 0 } ];
    dataSource = new BehaviorSubject<AbstractControl[]>([]);
    rows: FormArray = this.formBuilder.array([]);
    form: FormGroup = this.formBuilder.group({ 'events': this.rows });

  addEquipmentEventsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
    this.data.forEach((d: Event) => this.addRow(d, false));
        this.updateView();
    
    this.addEquipmentEventsForm = this.formBuilder.group({
      events: this.formBuilder.array([
        this.addEventFormGroup()
      ])
    });

  }

  addEventFormGroup(): FormGroup {

    return this.formBuilder.group({
      selectedEvent: [''],
      event: [''],
      CostPerOccurrence: ['0'],
      occurrences: [0],
      frequency: [0],
      price: [0]
    });
  }

  addEventsButtonClick(): void {
    (<FormArray>this.addEquipmentEventsForm.get('events')).push(this.addEventFormGroup());
  }

removeEventButtonClick(eventGroupIndex: number): void
{
   (<FormArray>this.addEquipmentEventsForm.get('events')).removeAt(eventGroupIndex);
}

emptyTable() {
  while (this.rows.length !== 0) {
    this.rows.removeAt(0);
  }
}

addRow(d?: Event, noUpdate?: boolean) {
  const row = this.formBuilder.group({
    'event'   : [d && d.event ? d.event : null, []],
    'costPerOccurence'     : [d && d.costPerOccurence   ? d.costPerOccurence   : null, []],
    'occurences'     : [d && d.occurences   ? d.occurences   : null, []],
    'frequency'     : [d && d.frequency   ? d.frequency   : null, []],
    'price'     : [d && d.price   ? d.price   : null, []]
  });
  this.rows.push(row);
  if (!noUpdate) { this.updateView(); }
}

updateView() {
  this.dataSource.next(this.rows.controls);
}


}
