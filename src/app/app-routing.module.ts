import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { EquipmentComponent } from './equipments/equipment/equipment.component';
import { MainComponent } from './main/main.component';
import { QuoteComponent } from './quotes/quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';

const routes: Routes = [
  {path: 'events', component: MainComponent},
  {path: 'quote', component: QuoteComponent},
  {path: 'equipment', component: EquipmentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
