import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { QuoteService } from '../shared/quote.service';

@Component({
  selector: 'app-quote-header',
  templateUrl: './quote-header.component.html',
  styleUrls: ['./quote-header.component.css']
})
export class QuoteHeaderComponent implements OnInit {

  constructor(public quoteService: QuoteService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.quoteService.quoteFormOverview = this.formBuilder.group({
      quoteNo: [{value: Math.floor(1000000 + Math.random() * 900000), disabled:  this.quoteService.isReadOnly}],
      hmoContractor: '',
      owner: [{value: 'demouser1 Uptake', disabled:  this.quoteService.isReadOnly}],
      orignator: [{value:'demouser1 Uptake', disabled:  this.quoteService.isReadOnly}],
      description: [{value:'', disabled:  this.quoteService.isReadOnly}],
      phoneNo: [{value:'', disabled:  this.quoteService.isReadOnly}],
      PONo: [{value:'', disabled:  this.quoteService.isReadOnly}],
      total:4960,
      totalDiscount:  0, 
      grandTotal: 4960, 
        });
  }

  onSumbit() {
    //console.log(this.quoteForm.getRawValue());
  }

}
