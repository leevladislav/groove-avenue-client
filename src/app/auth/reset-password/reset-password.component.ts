import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {passwordPattern} from '../../app.constants';
import {matchPassword} from '../../shared/helpers/dynamic-validation-form';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
    resetPasswordForm: FormGroup;
    hideNewPassword = true;
    hideRepeatNewPassword = true;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.resetPasswordForm = this.fb.group({
            password: this.fb.group({
                    newPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordPattern)]],
                    repeatNewPassword: ['', [Validators.required]]
                },
                {
                    validator: [matchPassword()]
                })
        });
    }

    resetPassword() {
        if (this.resetPasswordForm.invalid) {
            return this.resetPasswordForm.markAllAsTouched();
        }

        const data = this.resetPasswordForm.value;
    }
}
