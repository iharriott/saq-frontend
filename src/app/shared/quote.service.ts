import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
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

  
  constructor() { }
}
