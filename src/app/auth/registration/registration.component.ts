import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {emailPattern, passwordPattern} from '../../app.constants';
import {matchPassword} from '../../shared/helpers/dynamic-validation-form';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  hideNewPassword = true;
  hideRepeatNewPassword = true;

  constructor(
      private fb: FormBuilder,
      private router: Router
  ) {
  }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(emailPattern)]],
      password: this.fb.group({
            newPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordPattern)]],
            repeatNewPassword: ['', [Validators.required]]
          },
          {
            validator: [matchPassword()]
          })
    });
  }

  registration() {
    if (this.registrationForm.invalid) {
      return this.registrationForm.markAllAsTouched();
    }

    const data = this.registrationForm.value;
  }
}
