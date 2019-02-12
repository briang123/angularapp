import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User = {
    email: '',
    firstName: '',
    lastName: ''
  };
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = false;
  showUserForm: boolean = false;

  constructor() {
    console.log('dependency injection');
  }

  ngOnInit() {
    this.users = [
      {
        email: 'john@yahoo.com',
        firstName: 'John',
        hide: true,
        isActive: true,
        lastName: 'Doe',
        registered: new Date('02/09/2019 08:30:00')
      },
      {
        email: 'jane@gmail.com',
        firstName: 'Jane',
        hide: true,
        isActive: false,
        lastName: 'Doe',
        registered: new Date('01/08/2019 05:30:00')
      },
      {
        email: 'judy@yahoo.com',
        firstName: 'Judy',
        hide: true,
        isActive: true,
        lastName: 'Doe',
        registered: new Date('11/07/2018 12:30:00')
      }
    ];

    this.loaded = true;
  }

  // addUser(user: User) {
  //   this.user.isActive = true;
  //   this.user.registered = new Date();
  //   this.users.unshift(this.user);

  //   this.user = {
  //     email: '',
  //     firstName: '',
  //     lastName: ''
  //   };
  // }

  onSubmit(e: any) {
    e.preventDefault();
  }
}
