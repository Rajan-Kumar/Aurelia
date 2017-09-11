import {inject} from "aurelia-framework";
import {BusinessunitServices} from "./businessunitServices"

@inject(BusinessunitServices)
export class BusinessUnitDelete
{    
    constructor(businessunitServices)
    {
        this.message="We are in Business Unit Delete Page";    
        this.businessunitServices= businessunitServices;  
    }
    activate()
    {    
        var businessUnits= this.businessunitServices
                .getAllBusinessunits()
                .then(businessUnits => this.businessUnits = businessUnits);        
        //return businessUnits;
    }

    deleteBusinessUnit(BusinessUnitId)
    {
        alert(BusinessUnitId);
    }
} 
      
  
export class businessUnitSaveModel {
    businessUnitId: Number;
    busineesUnitName: String;        
}
