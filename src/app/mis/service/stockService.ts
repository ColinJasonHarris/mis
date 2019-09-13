import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StockInterface} from '../interfaces/stock.interface';
import {Observable, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:15540/api/sasStock';

@Injectable()
export class StockService {

    constructor(private http: HttpClient) {}

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error('Debug [3]: ' + error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    getStock(): Observable<StockInterface[]> {
        return this.http.get<StockInterface[]>(apiUrl).pipe(
            // tap(_ => console.log('fetched Suppliers')),
            map(response => response as StockInterface[]),
            catchError(this.handleError('getSuppliers', []))
        );



        // .pipe(
        //  map(response => response as StockInterface[]))
        // ;
    }

    getAllPronto() {
        /*return this.http.get<any>('http://localhost:15540/api/sasStock')
                    .toPromise()
                    .then(res => <Stock[]> res.data)
                    .then(data => data)
        */

    }


}
