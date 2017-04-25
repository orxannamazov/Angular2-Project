System.register(['angular2/core', 'rxjs/Observable', "angular2/router", 'angular2/http', '../common/customHeaders'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, Observable_1, router_1, http_1, customHeaders_1;
    var LoginService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (customHeaders_1_1) {
                customHeaders_1 = customHeaders_1_1;
            }],
        execute: function() {
            LoginService = (function () {
                function LoginService(_http, router) {
                    this._http = _http;
                    this.router = router;
                    this.loggedIn = false;
                    this._createSession = 'http://localhost:4567/session/create';
                }
                LoginService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                LoginService.prototype.login = function (username, password) {
                    var body = JSON.stringify({ username: username, password: password });
                    return this._http.post(this._createSession, body, { headers: customHeaders_1.contentHeaders });
                };
                LoginService.prototype.logout = function () {
                    localStorage.removeItem('id_token');
                    this.router.navigate(['Login']);
                };
                LoginService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, router_1.Router])
                ], LoginService);
                return LoginService;
            }());
            exports_1("LoginService", LoginService);
        }
    }
});
//# sourceMappingURL=login.service.js.map