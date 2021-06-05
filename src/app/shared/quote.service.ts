import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Equipment } from '../interfaces/equipment';
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
  hideButton: boolean = false;
  equipmentList: Equipment[] = [];
  eventTriggerList: number[] = [25, 50, 100, 200];
  eventTriggerMetricsList: string[] = ['Hours', 'Kilometers', 'Miles'];
  intervalList: string[] = ['Fixed', 'Rolling'];
  expiresByList: string[] = ['Hours', 'Date', 'Both'];
  startPMList: string[] = ['PM1', 'PM2', 'PM3', 'PM4'];
  startPMHrList: number[] = [250, 500];


  constructor() { }
}
