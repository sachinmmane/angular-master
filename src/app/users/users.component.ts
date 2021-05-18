import { Component, OnInit } from '@angular/core';

@Component({
  //different way to use selectors 
  //we need to upated in the html file as well the way which are using
  selector: 'app-users',
  // selector: '[app-users]',
  // selector: '.app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  allowUser = false;
  userCreatedStatus = 'No user is created';
  userName = 'normal'
  userNameNgModel = 'ngModel'
  createdUser = ''
  isUserCreated = false;

  //ng For
  users = ['user1', 'user2']
  createdName = '';
  nameCreatedStatus;
  nameNameNgModel;
  isNamecreated = false



  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.allowUser = true
    }, 3000);
  }

  chageUserCreatedStatus() {
    this.userCreatedStatus = "User is created Succefully"
  }

  createUser() {
    this.isUserCreated = true;
  }

  onUpdateUser(event: Event) {
    // this.userName = (event.target as HTMLInputElement).value;
    this.userName = (<HTMLInputElement>event.target).value;
  }

  //ngFor Loop 
  changeNgForUserCreatedStatus() {
    this.isNamecreated = true;
    this.users.push(this.createdName);
  }
}
