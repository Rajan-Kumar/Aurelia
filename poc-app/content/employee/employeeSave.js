import {inject} from "aurelia-framework";
import {EmployeeServices} from "./employeeServices"
import {BusinessunitServices} from "../businessunit/businessunitServices"

@inject(EmployeeServices, BusinessunitServices)
export class Employee
{
    constructor(employeeServices, businessunitServices)
    {
        this.message="We are in Employee Save Page";
        this.employeeServices= employeeServices;  
        this.businessunitServices=businessunitServices;
    }
    activate()
    {
        this.employee= new employeeModel({});
        this.selectedBusinessunitId= null; 
        var businessUnits= this.businessunitServices
                 .getAllBusinessunits()
                 .then(businessUnits => this.businessUnits = businessUnits);        
        return businessUnits;
    }

    saveEmployee()
    {
        alert(this.employee.employeeId);
        this.employee.employeeId=this.employee.employeeId;
        this.employee.employeeName=this.employee.employeeName;
        this.employee.BusinessunitId=this.selectedBusinessunitId;

        var employee = this.employeeServices
               .saveEmployee(this.employee)
               .then(employee => {
                   this.employee = employee
                   console.log(this.employee);
                  
                   alert("New Employee Registered with Id: " + this.employee.employeeId + " and Name: " + this.employee.employeeName);
                 
               });     
    }
    clear()
    {
        this.employee.employeeId="";
        this.employee.employeeName="";
        this.selectedBusinessunitId=0;
    }
}

export class employeeModel{
    employeeId: String
    employeeName: String
    BusinessunitId: Number
}