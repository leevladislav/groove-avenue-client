import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthLayoutComponent} from './auth/auth-layout.component';
import {ModalInfoComponent} from './entry-components/modal-info/modal-info.component';
import {ModalConfirmComponent} from './entry-components/modal-confirm/modal-confirm.component';
import {SharedModule} from './shared/shared.module';
import {LoginComponent} from './auth/login/login.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {ResetPasswordComponent} from './auth/reset-password/reset-password.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {MainLayoutComponent} from './main/main-layout.component';
import {HeaderComponent} from './main/header/header.component';

@NgModule({
    declarations: [
        AppComponent,
        AuthLayoutComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        RegistrationComponent,
        ModalInfoComponent,
        ModalConfirmComponent,
        MainLayoutComponent,
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    entryComponents: [
        ModalInfoComponent,
        ModalConfirmComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
