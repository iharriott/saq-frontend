import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuoteService } from 'src/app/shared/quote.service';

@Component({
  selector: 'app-add-equipment',
  templateUrl: './add-equipment.component.html',
  styleUrls: ['./add-equipment.component.css']
})
export class AddEquipmentComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    public quoteService: QuoteService) { }

  equipmentToggle: boolean = true;
  equipmentSelection: string = 'Serial No Based';

  equipmentSelections: string[] = ['Serial No Based', 'Model Based'];

  eventTriggerList: number[];
  eventTriggerMetricsList: string[];
  intervalList: string[];
  expiresByList: string[];
  startPMList: string[];

  radioOptions: FormGroup;

  addEquipmentForm: FormGroup;

  ngOnInit(): void {

    this.quoteService.isReadOnly = false;

    this.eventTriggerList = this.quoteService.eventTriggerList;
    this.eventTriggerMetricsList = this.quoteService.eventTriggerMetricsList;
    this.intervalList = this.quoteService.intervalList;
    this.expiresByList = this.quoteService.expiresByList;
    this.startPMList = this.quoteService.startPMList;

    this.addEquipmentForm = this.formBuilder.group({
      serialNo: [{ value: '', disabled: this.quoteService.isReadOnly }],
      smu: [{ value: '', disabled: this.quoteService.isReadOnly }],
      lastBilledSmu: [{ value: '', disabled: this.quoteService.isReadOnly }],
      productLink: [{ value: '', disabled: this.quoteService.isReadOnly }],
      stockNo: [{ value: '', disabled: this.quoteService.isReadOnly }],
      unitNo: [{ value: '', disabled: this.quoteService.isReadOnly }],
      annualUsage: [{ value: '', disabled: this.quoteService.isReadOnly }],
      model: [{ value: '', disabled: this.quoteService.isReadOnly }],
      make: [{ value: '', disabled: this.quoteService.isReadOnly }],
      family: [{ value: '', disabled: this.quoteService.isReadOnly }],
      serialNoRange: [{ value: '', disabled: this.quoteService.isReadOnly }],
      hourStart: [{ value: 0, disabled: this.quoteService.isReadOnly }],
      hourEnd: [{ value: 0, disabled: this.quoteService.isReadOnly }],
      dateStart: new Date().toLocaleDateString(),
      dateEnd: new Date().toLocaleDateString(),
      eventTrigger: [{ value: '', disabled: this.quoteService.isReadOnly }],
      eventTriggerMetric: [{ value: '', disabled: this.quoteService.isReadOnly }],
      interval: [{ value: '', disabled: this.quoteService.isReadOnly }],
      expiresBy: [{ value: '', disabled: this.quoteService.isReadOnly }],
      startAtPM: [{ value: '', disabled: this.quoteService.isReadOnly }],
      startPMHr: [{ value: '', disabled: this.quoteService.isReadOnly }],
      billingInterval: [{ value: '', disabled: this.quoteService.isReadOnly }],
    });
  }

  goToEvents() {
    this.equipmentToggle = !this.equipmentToggle;
  }

}
