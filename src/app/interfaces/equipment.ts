export interface Equipment {
    serialNumber: string;
    make: string;
    model: string;
    stockNo: string;
    UnitNo: string;
    startHour: number;
    endHour: number;
    durationHour: number;
    startDate: Date;
    endDate: Date;
    price: number;
    discount: number;
    netPrice: number;
    costPerHour;
    adjCPH: number;
    lastUpdate: number;
    updatedBy: string
    totalPrice: number;
    totalDiscount: number;
    totalNetPrice: number;
    totalCostPerHr: number;
    totalAdjCph: number;
}
