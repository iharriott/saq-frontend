import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Equipment } from 'src/app/interfaces/equipment';

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


@Component({
  selector: 'app-equipment-events',
  templateUrl: './equipment-events.component.html',
  styleUrls: ['./equipment-events.component.css']
})
export class EquipmentEventsComponent implements OnInit {

  eventColumns: string[] = ['event', 'costPerOccurence', 'occurences', 'frequency', 'price'];
  packageColumns: string[] = ['packageName', 'description', 'events', 'occurences', 'warnings', 'actions'];
  EVENT_DATA: Event[] = [
    { event: 'PM 1', costPerOccurence: '85.12', occurences: 0, frequency: 500, price: 0 },
    { event: 'PM 2', costPerOccurence: '143.28', occurences: 0, frequency: 1000, price: 0 },
    { event: 'PM 3', costPerOccurence: '305.76', occurences: 0, frequency: 2000, price: 0 },
    { event: 'PM 4', costPerOccurence: '629.76', occurences: 0, frequency: 4000, price: 0 },
  ];
  PACKAGE_DATA: any[] = [
    { packageName: 'Construction Gold 250 / 2000', description: '250 hr interval for 2000 hr', events: 4, occurences: 8, warnings: '', actions: '' },
    { packageName: 'Construction Gold 250 / 3000', description: '250 hr interval for 3000 hr', events: 4, occurences: 12, warnings: '', actions: '' },
    { packageName: 'Construction Gold 250', description: 'Gold 250', events: 3, occurences: 16, warnings: '', actions: '' },
  ];

  eventSource = new BehaviorSubject<AbstractControl[]>([]);
  packageSource = new BehaviorSubject<AbstractControl[]>([]);
  events: FormArray = this.formBuilder.array([]);
  packages: FormArray = this.formBuilder.array([]);
  form: FormGroup = this.formBuilder.group({ 'events': this.events, 'packages': this.packages });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.EVENT_DATA.forEach((d: Event) => this.addEvent(d, false));
    this.PACKAGE_DATA.forEach((d: any) => this.addPackage(d, false));
    this.updateView();
  }

  emptyTable() {
    while (this.events.length !== 0) {
      this.events.removeAt(0);
    }
  }

  addEvent(d?: Event, noUpdate?: boolean) {
    const row = this.formBuilder.group({
      'event': [d && d.event ? d.event : null, []],
      'costPerOccurence': [d && d.costPerOccurence ? d.costPerOccurence : null, []],
      'occurences': [d && d.occurences ? d.occurences : null, []],
      'frequency': [d && d.frequency ? d.frequency : 1, []],
      'price': [d && d.price ? d.price : null, []]
    });
    this.events.push(row);
    if (!noUpdate) { this.updateView(); }
  }

  addPackage(d?: any, noUpdate?: boolean) {
    const row = this.formBuilder.group({
      'packageName': [d && d.packageName ? d.packageName : null, []],
      'description': [d && d.description ? d.description : null, []],
      'occurences': [d && d.occurences ? d.occurences : null, []],
      'events': [d && d.events ? d.events : 1, []],
      'warnings': [d && d.warnings ? d.warnings : null, []],
      'actions': [d && d.actions ? d.actions : null, []]
    });
    this.packages.push(row);
    if (!noUpdate) { this.updateView(); }
  }

  updateView() {
    this.eventSource.next(this.events.controls);
    this.packageSource.next(this.packages.controls);
  }
}
