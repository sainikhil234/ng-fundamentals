import { Injectable } from '@angular/core'
import { Iuser } from './user.model'

@Injectable()
export class AuthService {
  currentUser:Iuser|any;

  loginUser(userName: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: userName,
      firstName: 'sai',
      lastName: 'nikhil'
    }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName:any,lastName:any){

    this.currentUser.firstName =  firstName;
    this.currentUser.lastName = lastName

  }

}