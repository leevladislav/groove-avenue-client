import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {emailPattern} from '../../app.constants';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
    forgotPasswordForm: FormGroup;

    constructor(
        private fb: FormBuilder,
        private router: Router
    ) {
    }

    ngOnInit() {
        this.forgotPasswordForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern(emailPattern)]]
        });
    }

    forgotPassword() {
        if (this.forgotPasswordForm.invalid) {
            return this.forgotPasswordForm.markAllAsTouched();
        }

        const data = this.forgotPasswordForm.value;
    }
}
