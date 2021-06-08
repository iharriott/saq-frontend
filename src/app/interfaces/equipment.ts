import { IEvent } from "./event";

export interface Equipment {
  serialNumber: string;
  make: string;
  model: string;
  stockNo: string;
  unitNo: string;
  startHour: number;
  endHour: number;
  durationHour: number;
  startDate: Date;
  endDate: Date;
  price: number;
  discount: number;
  netPrice: number;
  costPerHour: number;
  adjCPH: number;
  lastUpdate: Date;
  updatedBy: string;
  totalPrice: number;
  totalDiscount: number;
  totalNetPrice: number;
  totalCostPerHr: number;
  totalAdjCph: number;
  events: IEvent[];
}
