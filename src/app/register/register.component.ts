import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: any;
  constructor(public af: AngularFireAuth, private location: Location,private router: Router, private userService: UsersService) { }

  ngOnInit() {
  }

  onSubmit(formData) {
    if (formData.valid) {
      this.af.auth.createUserWithEmailAndPassword(formData.value.email,formData.value.password).then(
        (data) => {
          console.log('user info ',data);
          this.userService.safeUser(data.user.providerData[0])
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
