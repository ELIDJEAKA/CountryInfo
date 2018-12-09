import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { window } from 'rxjs/internal/operators/window';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  constructor(private userService:UsersService,private router:Router, private location:Location) { }
  public userData = {
    'email': '',
    'displayName': '',
    'phoneNumber': '',
    'photoURL': '',
    'providerId': '',
    'uid': ''
  };
  photo_bool=false
  photo_default ='assets/images/avatar-1.png'

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('user'))
    if (this.userData.phoneNumber===null){
      this.photo_bool = false
    }else{
      this.photo_bool = true
    }
  }

  logout(){
    this.userService.logout().then(data=>{
      console.log(data)
      this.router.navigate(['/login']);
      location.reload()

    })
  }
}
