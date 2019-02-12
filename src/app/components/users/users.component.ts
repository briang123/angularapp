import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = false;
  loaded: boolean = false;
  enableAdd: boolean = true;
  currentClasses: object = {};
  currentStyles: object = {};

  constructor() {
    console.log('dependency injection');
  }

  ngOnInit() {
    this.users = [
      {
        address: {
          city: 'San Diego',
          state: 'CA',
          street: '50 Main St.'
        },
        age: 70,
        firstName: 'John',
        hide: true,
        isActive: true,
        lastName: 'Doe',
        registered: new Date('02/09/2019 08:30:00')
      },
      {
        address: {
          city: 'San Diego',
          state: 'CA',
          street: '50 Main St.'
        },
        age: 31,
        firstName: 'Jane',
        hide: true,
        isActive: false,
        lastName: 'Doe',
        registered: new Date('01/08/2019 05:30:00')
      },
      {
        address: {
          city: 'San Diego',
          state: 'CA',
          street: '50 Main St.'
        },
        age: 8,
        firstName: 'Judy',
        hide: true,
        isActive: true,
        lastName: 'Doe',
        registered: new Date('11/07/2018 12:30:00')
      }
    ];

    this.loaded = true;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  // toggleHide(user: User) {
  //   user.hide = !user.hide;
  // }
}
