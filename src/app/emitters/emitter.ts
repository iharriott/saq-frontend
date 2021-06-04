import { EventEmitter } from '@angular/core';
import { QuoteDataTableItem } from '../quote-data-table/quote-data-table-datasource';
import { QuoteEvent } from '../shared/quote-event.model';

export class Emitters {
  static _eventList = null;
  static eventLisEmitter = new EventEmitter<QuoteDataTableItem>();

  static set eventList(quoteEvent: QuoteDataTableItem) {
    this._eventList = quoteEvent;
    this.eventLisEmitter.emit(quoteEvent);
  }

  static get eventList():  QuoteDataTableItem {
    return this._eventList;
  }
}
