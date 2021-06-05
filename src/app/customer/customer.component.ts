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
      name: 'OED MECHANICAL SERVICES INC(1753320)',
      poNo: '',
      poReq: '',
      address: '31 River Lane',
      cityState: 'CA',
      zip: '91326',
      phone: '',
      taxCodes: '45',
      exemptNo: 5656,
      chargeCode: 'FI3',
      prevWage: 2000,
      terms: 'Charge(2)'
    });

  }

  customerSubmit() {
    this.quoteService.customerItems.push(this.customerForm.value);
    console.log('customer form value:', this.quoteService.customerItems);
  }

}
