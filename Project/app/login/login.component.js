System.register(['angular2/core', "angular2/router", '../login/login.service'], function(exports_1, context_1) {
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
    var core_1, router_1, login_service_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(router, _loginService) {
                    this.router = router;
                    this._loginService = _loginService;
                }
                LoginComponent.prototype.login = function (event, username, password) {
                    var _this = this;
                    var result = this._loginService.login(username, password);
                    result.subscribe(function (response) {
                        localStorage.setItem('id_token', response.json().id_token);
                        _this.router.parent.navigate(['Products']);
                        _this.router.navigateByUrl;
                    }, function (error) {
                        _this.errorMsg = 'The username and password you entered don\'t match.';
                    });
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        providers: [login_service_1.LoginService],
                        templateUrl: './app/login/login.component.html',
                        styleUrls: ['app/assets/css/login.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, login_service_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map