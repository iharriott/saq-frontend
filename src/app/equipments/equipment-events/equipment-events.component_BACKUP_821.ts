import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

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
  dataSource = EVENT_DATA;

  addEquipmentEventsForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addEquipmentEventsForm = this.formBuilder.group({
      events: this.formBuilder.array([
        this.addEventFormGroup()
      ])
    });

  }

<<<<<<< HEAD
  addEventsFormGroup() : FormGroup{
=======
  addEventFormGroup(): FormGroup {

>>>>>>> 4eb1c84730d785e7bca993910079e3761cd2601c
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

<<<<<<< HEAD
 removeEventButtonClick(eventGroupIndex: number): void{
   (<FormArray>this.addEquipmentEventsForm.get('events')).removeAt(eventGroupIndex);
}

  
=======

>>>>>>> 4eb1c84730d785e7bca993910079e3761cd2601c
}
