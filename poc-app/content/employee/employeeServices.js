import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl="/api/Employees"

@inject(HttpClient)
export class EmployeeServices
{
    constructor(httpClient)
    {
        this.http= httpClient;
    }
    
    getAllEmployees()
    {
        return this.http.get(baseUrl)
                   .then(response => {
                       return response.content;
                   });
    }   
        
    saveEmployee(employee){
        console.log(employee);
        var request= this.http.createRequest();
        request.asPost()
                .withUrl(baseUrl)
                .withHeader("Accept","application/json")
                .withHeader("Content-Type","application/json")
                .withContent(employee)
        
        return request.send().then(response => response.content);
    }
}