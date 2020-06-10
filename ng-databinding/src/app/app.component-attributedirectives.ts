import { Component } from '@angular/core';



@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent{
    color:string = 'red'
    firstname:string ='Default'

    public setName(name:string){
       this.firstname = name;
    }
}