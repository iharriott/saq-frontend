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
      PoNo: '',
      PoReq: '',
      address: '31 River Lane',
      cityState: 'CA',
      zip: '91326',
      Phone: '',
      TaxCodes: '45',
      exemptNo:  5656,
      chargeCode: 'FI3',
      PrevWage: 2000,
      terms: 'Charge(2)'
    });

  }

}
