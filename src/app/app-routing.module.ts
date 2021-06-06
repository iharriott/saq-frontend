import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEquipmentComponent } from './equipments/add-equipment/add-equipment.component';
import { EquipmentEventsComponent } from './equipments/equipment-events/equipment-events.component';
import { EquipmentComponent } from './equipments/equipment/equipment.component';
import { MainComponent } from './main/main.component';
import { QuoteComponent } from './quotes/quote/quote.component';

const routes: Routes = [
  {path: 'events', component: MainComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'equipment',  children: [
    {path: '', component: EquipmentComponent},
    {path: 'add', component: AddEquipmentComponent},
    {path: 'events', component: EquipmentEventsComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
