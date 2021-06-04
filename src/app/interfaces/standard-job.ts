export interface StandardJob {
    RS_Type: string;
    EventTypeId: string;
    EventTypeDesc: string;
    EventCategoryDesc: string;
    JobCode: string;
    ComponentCode: string;
    ComponentCodeDesc: string;
    ModifierCode?: string;
    ModifierDesc?: string;
    BusinessGroup?: string;
    BusinessGroupDesc?: string;
    QuantityCode?: string;
    QuantityDesc?: string;
    WorkAppCode?: string;
    WorkApplicationDesc?: string;
    CabTypeCode?: string;
    CabTypeDesc?: string;
    JobLocationCode?: string;
    JobLocationDesc?: string;
    JobConditionCode?: string;
    JobConditionDesc?: string;
    ShopFieldCode?: string;
    ShopFieldDesc?: string;
    EnableInd: number;
    Sort: number;  
}