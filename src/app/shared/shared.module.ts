import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptor} from './interceptors/requests.interceptor';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';
import {ValidatorMessageComponent} from './validator-message/validator-message.component';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {CustomPaginatorIntl} from './material/custom-paginator-intl';
import {BackBtnComponent} from './back-btn/back-btn.component';
import {ModalHeaderComponent} from './modal/modal-header/modal-header.component';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {CustomDateAdapter} from './custom-date-adapter';
import {CUSTOM_FORMATS} from '../app.constants';
import {NumberOnlyDirective} from './derectives/numbers-only.derective';
import {LoaderComponent} from './loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule
    ],
    declarations: [
        ValidatorMessageComponent,
        BackBtnComponent,
        ModalHeaderComponent,
        NumberOnlyDirective,
        LoaderComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        },
        {
            provide: MatPaginatorIntl,
            useClass: CustomPaginatorIntl
        },
        {provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_LOCALE, useValue: 'ru-RU'},
        {provide: MAT_DATE_FORMATS, useValue: CUSTOM_FORMATS},
    ],
    exports: [
        MaterialModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormsModule,
        ValidatorMessageComponent,
        BackBtnComponent,
        ModalHeaderComponent,
        NumberOnlyDirective,
        LoaderComponent
    ]
})
export class SharedModule {
}
