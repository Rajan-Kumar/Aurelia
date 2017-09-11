import {inject} from "aurelia-framework";
import {EmployeeServices} from "./employeeServices"

@inject(EmployeeServices)
export class Employee
{
    constructor(employeeServices)
    {
        this.message="We are in Employee Page";
        this.employeeServices= employeeServices;        
    }
    activate()
    {
        var employees= this.employeeServices
                 .getAllEmployees()
                 .then(employees => this.employees = employees);        
        return employees;
    }
}