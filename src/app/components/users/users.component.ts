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
  currentClasses: object = {};

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
        image: 'http://lorempixel.com/600/600/people/3',
        isActive: true,
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
        isActive: false,
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
        isActive: true,
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

    this.setCurrentClasses();
  }

  addUser(user: User) {
    this.users.push(user);
  }

  setCurrentClasses() {
    this.currentClasses = {
      'big-text': this.showExtended,
      'btn-success': this.enableAdd
    };
  }
}
