import {Component} from 'angular2/core';
import { Router } from "angular2/router";

import { LoginService } from '../login/login.service';


@Component({
    providers: [LoginService],
    templateUrl: './app/login/login.component.html',
    styleUrls: ['app/assets/css/login.css']

})


export class LoginComponent {

    errorMsg: string;

    constructor(
        private router: Router,
        private _loginService: LoginService) {
    }

    login(event, username, password) {
        let result = this._loginService.login(username, password);
        result.subscribe(
            response => {
                localStorage.setItem('id_token', response.json().id_token);
                this.router.parent.navigate(['Products']);
                this.router.navigateByUrl
            },
            error => {
                this.errorMsg = 'The username and password you entered don\'t match.';
            }
        );
    }
}