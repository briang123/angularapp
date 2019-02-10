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
        balance: 100,
        firstName: 'John',
        image: 'http://lorempixel.com/600/600/people/3',
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
        balance: 50,
        firstName: 'Jane',
        image: 'http://lorempixel.com/600/600/people/2',
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
        balance: 75,
        firstName: 'Judy',
        image: 'http://lorempixel.com/600/600/people/1',
        isActive: true,
        lastName: 'Doe',
        registered: new Date('11/07/2018 12:30:00')
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
    this.setCurrentStyles();
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

  setCurrentStyles() {
    this.currentStyles = {
      'font-size': this.showExtended ? '' : '40px',
      'padding-top': this.showExtended ? '0' : '40px'
    };
  }
}
