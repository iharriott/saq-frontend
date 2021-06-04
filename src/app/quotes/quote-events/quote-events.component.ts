import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Emitters } from 'src/app/emitters/emitter';
import { QuoteEvent } from 'src/app/shared/quote-event.model';

@Component({
  selector: 'app-quote-events',
  templateUrl: './quote-events.component.html',
  styleUrls: ['./quote-events.component.css']
})
export class QuoteEventsComponent implements OnInit {

  quoteEventForm: FormGroup;
  eventList: QuoteEvent[] =[];
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.resetForm();
  }

  onSave(){

    const quoteEvent: QuoteEvent = this.quoteEventForm.value;
   /*  const {componentCode, enabled, eventCategory,eventType,jobCode,sort} =  quoteEvent;
    console.log('on save componentCode',componentCode);
    console.log('on save enabled',enabled);
    console.log('on save eventCategory',eventCategory);
    console.log('on save eventType ',eventType);
    console.log('on save jobCode ',jobCode);
    console.log('on save sort ',sort); */

    /* const event = new QuoteEvent();
    event.enabled = enabled;
    event.componentCode = componentCode;
    event.eventCategory = eventCategory;
    event.eventType = eventType;
    event.jobCode = jobCode;
    event.sort = sort; */
    const event = this.returnJson(quoteEvent);
    console.log('the event', event);
    //console.log('the quote', event);
    //this.eventList.push(eventList)
    Emitters.eventLisEmitter.emit(event);
    console.log('emitted event');
    this.resetForm();
    //console.log(this.eventList);
  }

  returnJson(quoteEvent: any): any{

    const {componentCode, enabled, eventCategory,eventType,jobCode,sort} =  quoteEvent;

    return {
      enabled,
      componentCode,
      eventCategory,
      eventType,
      jobCode,
      sort
    };
    
  }
   
  resetForm(){
    this.quoteEventForm = this.formBuilder.group({
      eventType: '',
      eventCategory: '',
      jobCode: 0,
      componentCode: 0,
      sort: 0,
      enabled: 'yes'
    });
  }

}
