import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key':'717d1ee7d4msh862fde6611023f9p101041jsnb25768499c1a',
                'x-rapidapi-host':'rawg-video-games-database.p.rapidapi.com',
            },
            setParams: {
                key: 'c8748e22897644e7b5406fdc8101cdbf'
            }
        });
        return next.handle(req)
    }
}