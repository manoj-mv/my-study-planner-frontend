import { Component, OnInit, } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  form: FormGroup = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.email, Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password_verify: ['', [Validators.required, this.passwordMatchValidator.bind(this)]]
  });

  hide = true;   // property used to control the visibility of text in password field

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

  }

  get email() { return this.form.get('email'); }
  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get password_verify() { return this.form.get('password_verify'); }

  // custom validator checking password filed value and re entering field value are same
  passwordMatchValidator(control: FormControl): { [s: string]: boolean } | null {
    if (control.value !== this.form?.get('password')?.value && control.touched) {
      return { passwordMatched: true }
    }
    return null;
  }

  onSubmit() {
    console.log(this.form, this.form.value);
  }
}
