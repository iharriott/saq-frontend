import { Injectable } from '@angular/core';
import { Quote } from './quote.model';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  quoteFormOverview: Quote;
  
  constructor() { }
}
