import { Injectable, Provider } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';
import { AuthStore } from '../stores/auth.store';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authStore: AuthStore) {}

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        return this.authStore.token$.pipe(
            take(1),
            switchMap((token) => {
                // if token doesn't exist, do next thing
                if (!token) {
                    return next.handle(req);
                }

                // add bearer token to headers
                const headers = req.headers.set('Authorization', `Bearer ${token}`);
                const authReq = req.clone({
                    headers,
                });
                return next.handle(authReq);
            })
        );
    }
}

export const authInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};
