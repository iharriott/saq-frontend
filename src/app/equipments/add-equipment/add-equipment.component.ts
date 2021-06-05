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

  equipmentSelection: string = 'Serial No Based';
  equipmentSelections: string[] = ['Serial No Based', 'Model Based'];

  radioOptions: FormGroup;

  addEquipmentForm: FormGroup;

  ngOnInit(): void {

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
      hourStart: [{ value: '', disabled: this.quoteService.isReadOnly }],
      hourEnd: [{ value: '', disabled: this.quoteService.isReadOnly }],
      dateStart: new Date().toLocaleDateString(),
      dateEnd: new Date().toLocaleDateString(),
      eventTrigger1: [{ value: '', disabled: this.quoteService.isReadOnly }],
      eventTrigger2: [{ value: '', disabled: this.quoteService.isReadOnly }],
      interval: [{ value: '', disabled: this.quoteService.isReadOnly }],
      expiresBy: [{ value: '', disabled: this.quoteService.isReadOnly }],
      startatPm: [{ value: '', disabled: this.quoteService.isReadOnly }],
      startPmHr: [{ value: '', disabled: this.quoteService.isReadOnly }],
      BillingInterval: [{ value: '', disabled: this.quoteService.isReadOnly }],
    });
  }

  addEquipment() { }

}
