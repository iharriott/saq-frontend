import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from '../../../app/shared/quote.service';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  constructor(public quoteService: QuoteService,
    private router: Router) { }

  ngOnInit(): void {
    if(this.router.url.indexOf('quote') < 0){
      this.quoteService.isReadOnly = true;
    }

  }

}
