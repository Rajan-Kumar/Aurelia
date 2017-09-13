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

        var businessUnit= this.businessunitServices
                .deleteBusinessUnit(BusinessUnitId)
                .then(businessUnit => this.businessUnits = businessUnits);
        return businessUnit;            
    }
} 
      
  
export class businessUnitSaveModel {
    businessUnitId: Number;
    busineesUnitName: String;        
}
