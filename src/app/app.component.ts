import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OperanticDevTest';
  authentification = false;
 
  constructor(public user: UsersService) {
    console.log("appcomponent : " + this.authentification)
    console.log(localStorage.getItem('user'))
    if (localStorage.getItem('user') === null) {
      this.authentification = false;
    } else {
      this.authentification = true;
      
    }
  }
}
