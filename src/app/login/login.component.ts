import { Component, OnInit, HostBinding } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  error: any;
  constructor(public af: AngularFireAuth, private router: Router, private userService: UsersService, private location: Location) { }

  ngOnInit() {
  }


  loginFb() {
    this.userService.loginFb().then(
      (data) => {
        console.log("user info ", data.user.providerData[0])
        this.userService.safeUser(data.user.providerData[0])
        this.router.navigate(['/admin-dashboard']);
        location.reload()
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  loginGoogle() {
    this.userService.loginGoogle().then(
      (data) => {
        console.log("user info ", data)
        this.userService.safeUser(data.user.providerData[0])
        this.router.navigate(['/admin-dashboard']);
        location.reload()
      }).catch(
      (err) => {
        this.error = err;
      })
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.userService.onLogin(formData.value.email, formData.value.password).then(
        (data) => {
          console.log(data.user.providerData[0])
          this.userService.safeUser(data.user.providerData[0])
          //console.log(success);
          this.router.navigate(['/admin-dashboard']);
          location.reload()
        }).catch(
        (err) => {
          console.log(err);
          this.error = err;
        })
    }
  }

}
