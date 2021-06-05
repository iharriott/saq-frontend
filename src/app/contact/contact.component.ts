import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuoteService } from '../shared/quote.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private quoteService: QuoteService,
    private formBuilder: FormBuilder) { }

  contactForm: FormGroup;

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: 'Doug Carter',
      type: 'Invoice',
      phoneNo: '888-888-8888',
      mobileNo: '999-999-9999',
      email: ''
    });
  }

  contactSubmit() {
    this.quoteService.contactItems.push(this.contactForm.value);
    console.log('contact form value:', this.quoteService.contactItems);
  }

}
