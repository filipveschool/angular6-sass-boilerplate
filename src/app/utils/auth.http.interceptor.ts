import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {TokenStorage} from './token.storage';
import {Observable} from 'rxjs';

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {
    constructor(private tokenStorage: TokenStorage) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.tokenStorage.token) {
            const clonedRequest = req.clone({headers: req.headers.set('Authorization', `Bearer ${this.tokenStorage.token}`)});
            return next.handle(clonedRequest);
        } else {
            return next.handle(req);
        }
    }
}
