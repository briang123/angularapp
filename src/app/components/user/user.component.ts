import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;

  constructor() {}

  ngOnInit() {
    this.user = {
      address: {
        city: 'San Diego',
        state: 'CA',
        street: '50 Main St.'
      },
      age: 30,
      firstName: 'John',
      lastName: 'Doe'
    };
  }
}
