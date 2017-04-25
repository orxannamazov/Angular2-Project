import { Injectable } from 'angular2/core';
import { Observable } from 'rxjs/Observable';
import { Router } from "angular2/router";
import { Http, Response, Headers } from 'angular2/http';

import { contentHeaders }  from '../common/customHeaders';


@Injectable()
export class LoginService {

    private loggedIn = false;
    errorMessage: string;
    
    private _createSession = 'http://localhost:4567/session/create';

    constructor(private _http: Http, private router: Router) { }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }


    login(username, password) {
        let body = JSON.stringify({ username, password });
        return this._http.post(this._createSession, body, { headers: contentHeaders });
    }
    

    logout() {
        localStorage.removeItem('id_token');
        this.router.navigate(['Login']);
    }



}