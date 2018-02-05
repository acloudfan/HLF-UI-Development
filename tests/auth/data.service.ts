import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from './configuration';

@Injectable()
export class DataService<Type> {
    private resolveSuffix: string = '?resolve=true';
    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private _configuration: Configuration) {
        this.actionUrl = _configuration.ServerWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
        
        // Change the access token value
        this.headers.append('x-access-token', 'WPiSPIMPiWU2LhdjnuXYkWpoPffKYV1DO9lF4eEeA2QYukcwZAAk90dW66SXtzIs');
    }

    public getAll(ns: string): Observable<Type[]> {
        
        console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns);

        // Added the headers to the call
        return this.http.get(`${this.actionUrl}${ns}`, {headers: this.headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    public getSingle(ns: string, id: string): Observable<Type> {
        console.log('GetSingle ' + ns);
        // Added the headers to the call
        return this.http.get(this.actionUrl + ns + '/' + id + this.resolveSuffix,{headers: this.headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    public add(ns: string, asset: Type): Observable<Type> {
        console.log('Entered DataService add');
        console.log('Add ' + ns);
        console.log('asset', asset);
        // Added the headers to the call
        return this.http.post(this.actionUrl + ns, asset,{headers: this.headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    public update(ns: string, id: string, itemToUpdate: Type): Observable<Type> {
        console.log('Update ' + ns);
        console.log('what is the id?', id);
        console.log('what is the updated item?', itemToUpdate);
        console.log('what is the updated item?', JSON.stringify(itemToUpdate));
        // Added the headers to the call
        return this.http.put(`${this.actionUrl}${ns}/${id}`, itemToUpdate,{headers: this.headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    public delete(ns: string, id: string): Observable<Type> {
        console.log('Delete ' + ns);
        // Added the headers to the call
        return this.http.delete(this.actionUrl + ns + '/' + id,{headers: this.headers})
          .map(this.extractData)
          .catch(this.handleError);
    }

    private handleError(error: any): Observable<string> {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractData(res: Response): any {
        return res.json();
    }

}
