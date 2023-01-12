import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {


  form: FormGroup = this.fb.group({
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    rememberMe: [false]
  });

  hide = true;

  constructor(
    private fb: FormBuilder
  ) { }


  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  onSubmit() {
    console.log(this.form.value);

  }
}
