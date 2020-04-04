import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthLayoutComponent} from './auth/auth-layout.component';
import {AuthGuard} from './auth/auth.guard';
import {LoginComponent} from './auth/login/login.component';
import {ForgotPasswordComponent} from './auth/forgot-password/forgot-password.component';
import {ResetPasswordComponent} from './auth/reset-password/reset-password.component';
import {RegistrationComponent} from './auth/registration/registration.component';
import {AppGuard} from './app.guard';
import {MainLayoutComponent} from './main/main-layout.component';


const routes: Routes = [
    {
        path: 'auth',
        component: AuthLayoutComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'login'
            },
            {
                path: 'login',
                component: LoginComponent,
            },
            {
                path: 'forgot-password',
                component: ForgotPasswordComponent
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent
            },
            {
                path: 'registration',
                component: RegistrationComponent
            }
        ]
    },
    {
        path: '',
        component: MainLayoutComponent,
        canActivate: [AppGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'home'
            },
            {
                path: 'home',
                loadChildren: () => import('./main/home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'sale',
                loadChildren: () => import('./main/sale/sale.module').then(m => m.SaleModule)
            },
            {
                path: 'about',
                loadChildren: () => import('./main/about/about.module').then(m => m.AboutModule)
            },
            {
                path: 'info',
                loadChildren: () => import('./main/info/info.module').then(m => m.InfoModule)
            },
            {
                path: 'profile',
                loadChildren: () => import('./main/profile/profile.module').then(m => m.ProfileModule)
            },
        ]
    },
    {path: '**', redirectTo: 'home'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
