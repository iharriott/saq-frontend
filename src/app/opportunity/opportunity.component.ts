import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuoteService } from '../shared/quote.service';

@Component({
  selector: 'app-opportunity',
  templateUrl: './opportunity.component.html',
  styleUrls: ['./opportunity.component.css']
})
export class OpportunityComponent implements OnInit {

  constructor(private quoteService: QuoteService,
    private formBuilder: FormBuilder) { }

  opportunityForm: FormGroup;

  ngOnInit(): void {
    this.opportunityForm = this.formBuilder.group({
      oppNo: '',
      estDelivery: '',
      probClosing: '',
      commodity: '',
      source: ''
    });
  }

  opportunitySubmit() {

  }

}
