import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MyInterceptor implements HttpInterceptor {

  intercept(httpRequest: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    // Extract the endpoint from the URL
    let requestURL = httpRequest.url.split("/")[5];
    requestURL = requestURL ? requestURL.split("?")[0] : "";

    // Initialize headers object with a type that allows dynamic keys
    const headers: { [key: string]: string } = {};

    // Check if the request is not for the login endpoint
    if (requestURL !== "login") {
      const sessionToken = sessionStorage.getItem("securitysession");
      if (sessionToken) {
        // Set the session token in the Authorization header
        headers['Authorization'] = sessionToken;

        // Special case for notification requests
        if (requestURL.includes("/task?show=notification")) {
          const currentDate = new Date();
          currentDate.setMinutes(currentDate.getMinutes() - 5);
          const isoDateTime = currentDate.toISOString();
          headers['If-Modified-Since'] = isoDateTime; // Add if-modified-since header
        }

        // Clone the request and set headers
        const authReq = httpRequest.clone({ setHeaders: headers });
        return next.handle(authReq).pipe(
          catchError(error => {
            console.error('Request error:', error);
            throw error; // Handle or rethrow error    
          })
        );
      }
    }

    // If no session token or login request, proceed without setting headers
    return next.handle(httpRequest).pipe(
      catchError(error => {
        console.error('Request error:', error);
        throw error; // Handle or rethrow error
      })
    );
  }
}
