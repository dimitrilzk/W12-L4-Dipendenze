import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.css']
})
export class RegisterPage implements OnInit {
  @ViewChild('f') form!: NgForm;
  constructor(private service: AuthService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    // console.log(this.form);
    this.service.signup(this.form.value).subscribe(data => console.log(data));

  }

}
