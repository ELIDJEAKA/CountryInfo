import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public af: AngularFireAuth, private router: Router) { }
  userData={
    "email":"",
    "displayName":"",
    "phoneNumber":"",
    "photoURL":"",
    "providerId":"",
    "uid":""
  }
  loginFb() {
    return this.af.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
  }

  loginGoogle() {
    return this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
  }

  onLogin(email,password) {
    return this.af.auth.signInWithEmailAndPassword(email, password)
  }

  onRegister(email,password) {
    return  this.af.auth.createUserWithEmailAndPassword(email, password)
  }

  logout() {
    localStorage.removeItem('user')
    return this.af.auth.signOut();
  }

  safeUser(user){
    this.userData.email= user.email
    this.userData.displayName = user.displayName
    this.userData.phoneNumber= user.phoneNumber
    this.userData.photoURL = user.photoURL
    this.userData.providerId= user.providerId
    this.userData.uid= user.uid
    
    //console.log(JSON.parse(JSON.stringify(this.userData)))
    localStorage.setItem('user', JSON.stringify(this.userData));
    //console.log(this.userData)
  }
}
