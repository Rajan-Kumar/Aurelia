import {inject} from "aurelia-framework";
import {BusinessunitServices} from "./businessunitServices"

@inject(BusinessunitServices)
export class BusinessUnit
{
    constructor(businessunitServices)
    {
        this.message="We are in Business Unit Page";        
        this.businessunitServices= businessunitServices;        
    }
    activate()
    {
        var businessUnits= this.businessunitServices
                 .getAllBusinessunits()
                 .then(businessUnits => this.businessUnits = businessUnits);        
        //return businessUnits;
    }    

    showEntryPanel()
    {
        if( this.showPanel === true)
            this.showPanel=false;
        else
            this.showPanel=true;
    }
}