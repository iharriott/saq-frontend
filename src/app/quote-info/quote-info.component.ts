import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuoteService } from '../shared/quote.service';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  constructor(public quoteService: QuoteService,
    private formBuilder: FormBuilder) { }

  quoteInfoForm: FormGroup;

  ngOnInit(): void {

    this.quoteInfoForm = this.formBuilder.group({
      quoteDate: new Date().toLocaleDateString(),
      quoteStatus: [{value: 'Open', disabled:  this.quoteService.isReadOnly}],
      contractType: [{value: 'Construction Gold', disabled:  this.quoteService.isReadOnly}], 
      description:  [{value: '', disabled:  this.quoteService.isReadOnly}], 
      branch: [{value: 'Branch00', disabled:  this.quoteService.isReadOnly}], 
      costCenter: [{value: 'GR BENSALEM PA', disabled:  this.quoteService.isReadOnly}], 
      owner: [{value: 'demouser1 Uptake', disabled:  this.quoteService.isReadOnly}],
      mobilePhoneNo: [{value: '222-534-9999', disabled:  this.quoteService.isReadOnly}],
      officePhoneNo: [{value: '666-121-6758', disabled:  this.quoteService.isReadOnly}],
      faxNo: [{value: '', disabled:  this.quoteService.isReadOnly}],
      diffOwner: [{value: '', disabled:  this.quoteService.isReadOnly}],
      cpi: [{value: 'Yes', disabled:  this.quoteService.isReadOnly}],
      stage:[{value: '', disabled:  this.quoteService.isReadOnly}],
      comments: [{value: 'Need to revise', disabled:  this.quoteService.isReadOnly}],
    });
  }

  quoteInfoSubmit() {
    this.quoteService.quoteInfoItems.push(this.quoteInfoForm.value);
    console.log('quote info form value:', this.quoteService.quoteInfoItems);
  }

}
