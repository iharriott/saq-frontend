import { NodeWithI18n } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { QuoteService } from '../../../app/shared/quote.service';

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

    this.quoteService.currentEquipment = {
      serialNumber: '',
      make: '',
      model: '',
      stockNo:  '',
      unitNo: '',
      startHour:0,
      endHour:0,
      durationHour: 0,
      startDate: new Date(),
      endDate: new Date(),
      price: 0,
      discount: 0,
      netPrice: 0,
      costPerHour: 0,
      adjCPH: 0,
      lastUpdate:  new Date(),
      updatedBy: '',
      totalPrice: 0,
      totalDiscount: 0,
      totalNetPrice: 0,
      totalCostPerHr: 0,
      totalAdjCph: 0,
      events: []
    }
  }

  goToEvents() {
    this.mapFormValuesToEquipmentModel();
    console.log('before equipment added', this.quoteService.currentEquipment);
    this.equipmentToggle = !this.equipmentToggle;
  }

  setButtonName(): string{
    let name ='';
   if (this.equipmentToggle){
     name = "Go to Events";
   }else{
     name = "Go to Equipment";
   }

   return name;

  }

  mapFormValuesToEquipmentModel(){
    this.quoteService.currentEquipment.serialNumber = this.addEquipmentForm.value.serialNo;
    this.quoteService.currentEquipment.make = this.addEquipmentForm.value.make;
    this.quoteService.currentEquipment.stockNo = this.addEquipmentForm.value.stockNo;
    this.quoteService.currentEquipment.unitNo = this.addEquipmentForm.value.unitNo;
    this.quoteService.currentEquipment.startHour = this.addEquipmentForm.value.hourStart;
    this.quoteService.currentEquipment.endHour = this.addEquipmentForm.value.hourEnd;
    this.quoteService.currentEquipment.startDate = this.addEquipmentForm.value.dateStart;
    this.quoteService.currentEquipment.endDate =  this.addEquipmentForm.value.dateEnd;
    this.quoteService.currentEquipment.model = this.addEquipmentForm.value.model;
  }

}
