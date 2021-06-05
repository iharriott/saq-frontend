import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { QuoteService } from '../../../app/shared/quote.service';
import { AddEquipmentComponent } from '../add-equipment/add-equipment.component';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(public quoteService: QuoteService,
    private router: Router,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    if (this.router.url.indexOf('quote') < 0 || this.router.url.indexOf('add') < 0) {
      this.quoteService.isReadOnly = true;
      this.quoteService.hideButton = true;
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
