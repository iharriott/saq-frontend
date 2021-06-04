import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuoteService } from '../shared/quote.service';

@Component({
  selector: 'app-quote-info',
  templateUrl: './quote-info.component.html',
  styleUrls: ['./quote-info.component.css']
})
export class QuoteInfoComponent implements OnInit {

  constructor(private quoteService: QuoteService,
    private formBuilder: FormBuilder) { }

  quoteInfoForm: FormGroup;

  ngOnInit(): void {

    this.quoteInfoForm = this.formBuilder.group({
      quoteDate: Date(),
      quoteStatus: 'Open',
      contractType: 'Construction Gold',
      description: '',
      branch: 'Branch00',
      costCenter: 'GR BENSALEM PA',
      owner: 'demouser1 Uptake',
      mobilePhoneNo: '222-534-9999',
      officePhoneNo: '666-121-6758',
      diffOwner: '',
      comments: 'Need to revise'
    });
  }

  quoteInfoSubmit() {
    this.quoteService.quoteInfoItems.push(this.quoteInfoForm.value);
    console.log(' form value', this.quoteService.quoteInfoItems);
  }

}
