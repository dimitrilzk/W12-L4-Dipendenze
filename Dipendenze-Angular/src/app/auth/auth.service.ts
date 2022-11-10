import { Injectable } from '@angular/core';
import { Register } from './register.class';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signup(obj: Register) {
    // console.log(obj);
    return this.http.post('http://localhost:4201/register', obj)

  }
}
