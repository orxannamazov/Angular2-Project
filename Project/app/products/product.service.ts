import { Injectable } from 'angular2/core';
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

import { IPolice } from './police';

@Injectable()
export class ProductService {
    private _productUrl = 'http://localhost:4567/police';
    // private _productUrl = 'api/products/products.json';
    constructor(private _http: Http) { }

    getProducts(): Observable<IPolice[]> {

        return this._http.get(this._productUrl)
                    .map((response: Response) => response.json())
                    // .do(data => console.log('All: ' + JSON.stringify(data)))
                    // .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
