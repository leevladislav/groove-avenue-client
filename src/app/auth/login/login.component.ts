import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {emailPattern, passwordPattern} from '../../app.constants';
import {AuthService} from '../auth.service';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {MatDialog} from '@angular/material/dialog';
import {ModalInfoComponent} from '../../entry-components/modal-info/modal-info.component';
import {authServerMessage} from '../../shared/helpers/auth-server-message';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    loginForm: FormGroup;
    hide = true;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        public dialog: MatDialog,
    ) {
    }

    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ['', [Validators.required, Validators.pattern(emailPattern)]],
            password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(passwordPattern)]]
        });
    }

    login() {
        this.loginForm.disable();

        if (this.loginForm.invalid) {
            return this.loginForm.markAllAsTouched();
        }

        this.authService.login(this.loginForm.value)
            .pipe(untilDestroyed(this))
            .subscribe(
                () => this.router.navigate(['/home']),
                (error) => {
                    this.dialog.open(ModalInfoComponent, {
                        data: {
                            title: 'Ошибка',
                            message: authServerMessage(error),
                        },
                        panelClass: ['primary-modal'],
                        autoFocus: false,
                    });

                    this.loginForm.enable();
                });
    }

    ngOnDestroy() {
    }
}
