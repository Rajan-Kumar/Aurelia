import {inject} from "aurelia-framework";
import {BusinessunitServices} from "./businessunitServices"
//import { bindable, bindingMode} from "aurelia-framework";

@inject(BusinessunitServices)
export class BusinessUnitSave
{
    //@bindable({ defaultBindingMode: bindingMode.twoWay }) businessunit;
    constructor(businessunitServices)
    {
        this.message="We are in Business Unit Save Page";    
        this.businessunitServices= businessunitServices;  
    }
    activate()
    {        
        this.businessunit = new businessUnitSaveModel({});       
    }

    save()
    {
        var businessUnits= this.businessunitServices
               .saveBusinessunit(this.businessunit)
               .then(businessUnits => {
                   this.businessUnits = businessUnits
                   console.log(this.businessUnits);                  
                   alert("New Business Unit created with Id: " + this.businessUnits.BusinessUnitId + " and Name: " + this.businessUnits.BusineesUnitName);                  
               });              
    }
      
    clear()
    {
        this.businessunit.businessUnitId = "";
        this.businessunit.busineesUnitName = "";
    }
    export class businessUnitSaveModel {
        businessUnitId: Number;
        busineesUnitName: String;        
    }
}