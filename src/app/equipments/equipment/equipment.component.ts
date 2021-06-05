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
    if(this.router.url.indexOf('quote') < 0 || this.router.url.indexOf('add') < 0){
      this.quoteService.isReadOnly = true;
      this.quoteService.hideButton = true;
    }

  }

  addEquipment(eventIndex, quoteNo) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = '50%';
    dialogConfig.data = { eventIndex, quoteNo };
    this.dialog.open(AddEquipmentComponent, dialogConfig);
  }

}
