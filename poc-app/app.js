export class App{
   
    configureRouter(config, router)
    {
        this.router=router;

        config.map(
            [
                { route : ["","home"], moduleId: "content/home/home", title: "Home", nav:true, name: "home" },
                { route : "businessunit", moduleId: "content/businessunit/businessunit", title: "Business Unit", nav:true, name:"businessunit"},
                { route : "businessunitSave", moduleId: "content/businessunit/businessunitSave", title: "Business Unit Entry", nav:true, name:"businessunitSave"},                   
                { route : "businessunitDelete", moduleId: "content/businessunit/businessunitDelete", title: "Delete Business Unit", nav:true, name:"businessunitDelete"},                   
                { route : "employee", moduleId: "content/employee/employee", title: "Employee", nav:true, name: "employee" },
                { route : "employeeSave", moduleId: "content/employee/employeeSave", title: "Register Employee", nav:true, name: "employeeSave" }                              
            ]
        );
    }
}