import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {CryptoService} from '../shared/services/crypto.service';
import {Router} from '@angular/router';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {localToken} from '../app.constants';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // private adminApiUrl = environment.adminApiUrl;
    private adminApiUrl = 'path';
    private token = null;

    constructor(
        private crypto: CryptoService,
        private http: HttpClient,
        private router: Router
    ) {
    }

    login(user): Observable<any> {
        return this.http.post<any>(`${this.adminApiUrl}/auth/login`, user)
            .pipe(
                tap(({data}) => {
                    localStorage.setItem(this.crypto.encrypt(localToken), data.attributes.accessToken);
                    this.setToken(data.attributes.accessToken);
                })
            );
    }

    setToken(token) {
        this.token = token;
    }

    getToken(): string {
        return this.token;
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }

    logout() {
        localStorage.removeItem(this.crypto.encrypt(localToken));
        this.setToken(null);
        this.router.navigate(['/auth/login']);
    }
}
