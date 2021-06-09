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
  // dataSource = ELEMENT_DATA;
  // columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  // expandedElement: PeriodicElement | null;
  // eventDisplayedColumns: string[] = ['event', 'costPerOccurence', 'occurences', 'price'];
  displayedColumns: string[] = ['event', 'costPerOccurence', 'occurences', 'price'];
  // dataSourcee = ELEMENT_DATA;

  ngOnInit(): void {
    if (this.router.url.indexOf('quote') < 0 || this.router.url.indexOf('add') < 0) {
      this.quoteService.isReadOnly = true;
      this.quoteService.hideButton = true;
      console.log(this.quoteService.hideButton);
    }

    // this.form

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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    position: 1,
    name: 'Hydrogen',
    weight: 1.0079,
    symbol: 'H',
    description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
        atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
  }, {
    position: 2,
    name: 'Helium',
    weight: 4.0026,
    symbol: 'He',
    description: `Helium is a chemical element with symbol He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`
  }, {
    position: 3,
    name: 'Lithium',
    weight: 6.941,
    symbol: 'Li',
    description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`
  }, {
    position: 4,
    name: 'Beryllium',
    weight: 9.0122,
    symbol: 'Be',
    description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`
  }, {
    position: 5,
    name: 'Boron',
    weight: 10.811,
    symbol: 'B',
    description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`
  }, {
    position: 6,
    name: 'Carbon',
    weight: 12.0107,
    symbol: 'C',
    description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`
  }, {
    position: 7,
    name: 'Nitrogen',
    weight: 14.0067,
    symbol: 'N',
    description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`
  }, {
    position: 8,
    name: 'Oxygen',
    weight: 15.9994,
    symbol: 'O',
    description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`
  }, {
    position: 9,
    name: 'Fluorine',
    weight: 18.9984,
    symbol: 'F',
    description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`
  }, {
    position: 10,
    name: 'Neon',
    weight: 20.1797,
    symbol: 'Ne',
    description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`
  },
];
