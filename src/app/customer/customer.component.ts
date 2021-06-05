import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuoteService } from '../shared/quote.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private quoteService: QuoteService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.customerForm = this.formBuilder.group({
      name: [{value: 'OED MECHANICAL SERVICES INC(1753320)', disabled:  this.quoteService.isReadOnly}],
      poNo: [{value: '', disabled:  this.quoteService.isReadOnly}],
      poReq: [{value: '', disabled:  this.quoteService.isReadOnly}],
      address: [{value: '31 River Lane', disabled:  this.quoteService.isReadOnly}], 
      cityState: [{value: 'CA', disabled:  this.quoteService.isReadOnly}], 
      zip:  [{value: '91326', disabled:  this.quoteService.isReadOnly}],
      phone: [{value: '', disabled:  this.quoteService.isReadOnly}],
      taxCodes: [{value: '45', disabled:  this.quoteService.isReadOnly}], 
      exemptNo: [{value: 5656, disabled:  this.quoteService.isReadOnly}],
      chargeCode: [{value: 'FI3', disabled:  this.quoteService.isReadOnly}], 
      prevWage: [{value: 2000, disabled:  this.quoteService.isReadOnly}],
      terms: [{value: 'Charge(2)', disabled:  this.quoteService.isReadOnly}], 
    });

  }

  customerSubmit() {
    this.quoteService.customerItems.push(this.customerForm.value);
    console.log('customer form value:', this.quoteService.customerItems);
  }

}
