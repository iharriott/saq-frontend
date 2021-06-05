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
  eventTriggerList: number[]= [25,50,100, 200];
  eventTriggerListMetrics: string[]= ['Hours','kilometers','miles'];
  intervalList: string[] = ['Fixed','Rolling'];
  expiredByList: string[] = ['Both','Hours','Date'];
  startPMList: string[] = ['PM1','PM2','PM3','PM4'];
  startPMHrList: number[] = [250, 500];


  constructor() { }
}
