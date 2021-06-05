import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipmentEventsComponent } from './equipment-events.component';

describe('EquipmentEventsComponent', () => {
  let component: EquipmentEventsComponent;
  let fixture: ComponentFixture<EquipmentEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipmentEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipmentEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
