import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuoteService } from '../../../app/shared/quote.service';
import { AddEquipmentComponent } from '../add-equipment/add-equipment.component';
import { animate, state, style, transition, trigger } from '@angular/animations';

export interface Equipment {
  serialNo: string;
  stockNo: string;
  model: string;
  unitNo: string;
}

const EQUIPMENT_DATA: Equipment[] = [
  {
    serialNo: '123',
    stockNo: '111',
    model: '130A',
    unitNo: '1432'
  },
  {
    serialNo: '943',
    stockNo: '222',
    model: '130B',
    unitNo: '1432'
  },
  {
    serialNo: '522',
    stockNo: '333',
    model: '130C',
    unitNo: '1432'
  },
  {
    serialNo: '745',
    stockNo: '444',
    model: '130D',
    unitNo: '7648'
  },
  {
    serialNo: '544',
    stockNo: '555',
    model: '130E',
    unitNo: '7646'
  },


];

export interface Event {
  event: string;
  costPerOccurence: string;
  occurences: number;
  price: string;
}

const EVENT_DATA: Event[] = [
  {
    event: 'PM 1',
    costPerOccurence: '$85.12',
    occurences: 4,
    price: '$340.48'
  },
  {
    event: 'PM 2',
    costPerOccurence: '$143.28',
    occurences: 2,
    price: '$286.56'
  },
  {
    event: 'PM 3',
    costPerOccurence: '$305.76',
    occurences: 1,
    price: '$305.76'
  },
  {
    event: 'PM 4',
    costPerOccurence: '$629.76',
    occurences: 1,
    price: '$629.76'
  }
];

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class EquipmentComponent implements OnInit {

  constructor(public quoteService: QuoteService,
    private router: Router,
    private dialog: MatDialog) { }

  dataSource = EQUIPMENT_DATA;
  columnsToDisplay = ['serialNo', 'stockNo', 'model', 'unitNo'];
  expandedElement: Equipment | null;
  dataSourcee = EVENT_DATA;
  displayedColumns: string[] = ['event', 'costPerOccurence', 'occurences', 'price'];

  ngOnInit(): void {
    if (this.router.url.indexOf('quote') < 0 || this.router.url.indexOf('add') < 0) {
      this.quoteService.isReadOnly = true;
      this.quoteService.hideButton = true;
      console.log(this.quoteService.hideButton);
    }
  }

  addEquipment(eventIndex, quoteNo) {
    this.dialog.open(AddEquipmentComponent, {
      autoFocus: true,
      disableClose: true,
      width: '70%',
      data: { eventIndex, quoteNo },
      height: '90vh'
    });
  }

}