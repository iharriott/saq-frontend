import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-equipment-events',
  templateUrl: './equipment-events.component.html',
  styleUrls: ['./equipment-events.component.css']
})
export class EquipmentEventsComponent implements OnInit {

  addEquipmentEventsForm: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addEquipmentEventsForm = this.formBuilder.group({

      events: this.formBuilder.array(
        this.addEventsFormGroup()
       )
    });

  }

  addEventsFormGroup() : any{

    return this.formBuilder.group({
     selectedEvent: [''],
     event: [''],
     CostPerOccurrence: ['0'],
     occurrences:[0],
     frequency:[0],
     price:[0]
    });
  }

  addEventsButtonClick(): void{
    (<FormArray>this.addEquipmentEventsForm.get('events')).push(this.addEventsFormGroup());
  }

  
}
