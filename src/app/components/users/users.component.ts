import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAdd: boolean = true;

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
        age: 30,
        firstName: 'John',
        image: 'http://lorempixel.com/600/600/people/3',
        lastName: 'Doe'
      },
      {
        address: {
          city: 'San Diego',
          state: 'CA',
          street: '50 Main St.'
        },
        age: 31,
        firstName: 'Jane',
        image: 'http://lorempixel.com/600/600/people/2',
        lastName: 'Doe'
      },
      {
        address: {
          city: 'San Diego',
          state: 'CA',
          street: '50 Main St.'
        },
        age: 8,
        firstName: 'Judy',
        image: 'http://lorempixel.com/600/600/people/1',
        lastName: 'Doe'
      }
    ];

    this.loaded = true;
    //this.showExtended = true;

    // this.addUser({
    //   address: {
    //     city: 'San Diego',
    //     state: 'CA',
    //     street: '50 Main St.'
    //   },
    //   age: 9,
    //   firstName: 'Jill',
    //   lastName: 'Doe'
    // });
  }

  addUser(user: User) {
    this.users.push(user);
  }
}
