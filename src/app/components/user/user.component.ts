import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  firstName: string;
  lastName: string;
  age: number;
  address;

  foo: any;
  hasKids: boolean;
  numberArray: number[];
  stringArray: string[];
  mixedArray: any[];
  myTuple: [string, number, boolean];
  unusable: void;
  u: undefined;
  n: null;

  constructor() {
    this.firstName = 'John';
    this.lastName = 'Doe';
    this.age = 30;

    this.address = {
      city: 'San Diego',
      state: 'California',
      street: '50 main street'
    };

    this.foo = true;
    this.hasKids = true;
    this.numberArray = [1, 2, 3];
    this.stringArray = ['Hello', 'World'];
    this.mixedArray = [1, 'Hello', undefined];
    this.myTuple = ['Hello', 1, true];
    this.unusable = undefined;
    this.u = undefined;
    this.n = null;

    console.log('this.addNumbers(1,2): ', this.addNumbers(1, 2));
  }

  addNumbers(n1: number, n2: number): number {
    return n1 + n2;
  }
}
