import { Injectable } from '@angular/core';
import { Iuser } from './Iuser';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UserService {
    baseUrl = 'http://localhost:3000/user';
    constructor(private httpClient: HttpClient) {
    }

    getEmployees(): Observable<Iuser[]> {
        return this.httpClient.get<Iuser[]>(this.baseUrl)
            .pipe(catchError(this.handleError));
    }

    private handleError(errorResponse: HttpErrorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            console.error('Client Side Error :', errorResponse.error.message);
        } else {
            console.error('Server Side Error :', errorResponse);
        }
        return throwError('There is a problem with the service. We are notified & working on it. Please try again later.');
    }

    getEmployee(id: number): Observable<Iuser> {
        return this.httpClient.get<Iuser>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    addEmployee(employee: Iuser): Observable<Iuser> {
        return this.httpClient.post<Iuser>(this.baseUrl, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
        .pipe(catchError(this.handleError));
    }

    updateEmployee(employee: Iuser): Observable<void> {
        return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        })
            .pipe(catchError(this.handleError));
    }

    deleteEmployee(id: number): Observable<void> {
        return this.httpClient.delete<void>(`${this.baseUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }
}
