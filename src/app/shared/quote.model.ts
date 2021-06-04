import { Contact } from "./contact.model";
import { Customer } from "./customer.model";
import { Opportunity } from "./opportunity.model";
import { QuoteInfo } from "./quote-info.model";

export class Quote {   
    quoteNo: number;
    hmoContractor: string;
    owner : string;
    orignator : string;
    description: string;
    phoneNo: string;
    PONo: string;
    total:number;
    totalDiscount: number;
    grandTotal: number;
    quoteInfo: QuoteInfo;
    customer: Customer;
    opportunity: Opportunity;
    contact: Contact
}


