System.register(['angular2/core', 'angular2/http', 'rxjs/add/operator/map', 'rxjs/add/operator/do', 'ng2-pagination'], function(exports_1, context_1) {
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
    var core_1, http_1, ng2_pagination_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (ng2_pagination_1_1) {
                ng2_pagination_1 = ng2_pagination_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_http) {
                    this._http = _http;
                    this._page = 1;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getPage(1);
                };
                AppComponent.prototype.getPage = function (page) {
                    var _this = this;
                    this._data = this._http.get("http://localhost:52472/api/data/" + page + "/10")
                        .do(function (res) {
                        _this._total = res.json().total;
                        _this._page = page;
                    })
                        .map(function (res) { return res.json().data; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/app.component.html',
                        providers: [http_1.HTTP_PROVIDERS, ng2_pagination_1.PaginationService],
                        directives: [ng2_pagination_1.PaginationControlsCmp],
                        pipes: [ng2_pagination_1.PaginatePipe]
                    }), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map