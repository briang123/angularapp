import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild('userForm') form: any;

  constructor() {}

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

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log('Form is not valid');
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;

      this.users.unshift(value);

      this.form.reset();
    }
  }
}
