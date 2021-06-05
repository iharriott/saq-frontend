import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Contact } from './contact.model';
import { Customer } from './customer.model';
import { Opportunity } from './opportunity.model';
import { QuoteInfo } from './quote-info.model';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quoteFormOverview: FormGroup;
  quoteFormDetail: Quote;
  quoteItems: Quote[] = [];
  quoteInfoItems: QuoteInfo[] = [];
  customerItems: Customer[] = [];
  opportunityItems: Opportunity[] = [];
  contactItems: Contact[] = [];
  isReadOnly: boolean = false;


  constructor() { }
}
