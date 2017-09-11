import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl="/api/BusinessUnits"

@inject(HttpClient)
export class BusinessunitServices
{
    constructor(httpClient)
    {
        this.http= httpClient;
    }
    
    getAllBusinessunits()
    {
        return this.http.get(baseUrl)
                   .then(response => {
                       return response.content;
                   });
    }  
    saveBusinessunit(businessunit)
    {
        console.log(businessunit);
        var request= this.http.createRequest();
        request.asPost()
                .withUrl(baseUrl)
                .withHeader("Accept","application/json")
                .withHeader("Content-Type","application/json")
                .withContent(businessunit)
        
        return request.send().then(response => response.content);
    }    
    
}