import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users: User[];
  data: Observable<Array<any>>;

  constructor() {
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
  }

  getUsers = (): Observable<User[]> => of(this.users);
  addUser = (user: User) => this.users.unshift(user);
}
