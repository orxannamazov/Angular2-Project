System.register(['angular2/core', 'angular2/common', './product-filter.pipe', './product.service', '../login/login.service', '../common/pagination.component'], function(exports_1, context_1) {
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
    var core_1, common_1, product_filter_pipe_1, product_service_1, login_service_1, pagination_component_1;
    var ProductListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (product_filter_pipe_1_1) {
                product_filter_pipe_1 = product_filter_pipe_1_1;
            },
            function (product_service_1_1) {
                product_service_1 = product_service_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (pagination_component_1_1) {
                pagination_component_1 = pagination_component_1_1;
            }],
        execute: function() {
            ProductListComponent = (function () {
                function ProductListComponent(_authService, _productService, _elementRef) {
                    this._authService = _authService;
                    this._productService = _productService;
                    this._elementRef = _elementRef;
                    //this array contains the image we will show for each page
                    this.slides = [];
                    //print to the user the selected page
                    this.currentSelectedPage = "";
                    //print to the user the total iterms per page
                    this.currentItemsPerPage = "";
                    //the maximum buttons to show
                    this.maxSize = 3;
                    //the number of pages you want to print
                    this.totalResults = 60;
                    //the current page
                    this.currentPage = 2;
                    this.pageTitle = 'Cybersoft';
                    this.drawerName = 'Drawer';
                    this.listFilter = '';
                    this.jwt = localStorage.getItem('id_token');
                    console.log(this.jwt);
                    if (!this.jwt) {
                        this.logout();
                    }
                    this.slides.push({ image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' }, { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' });
                }
                ProductListComponent.prototype.setCurrentPage = function (pageNo) {
                    this.currentPage = pageNo;
                };
                ;
                ProductListComponent.prototype.currentPageChanged = function (event) {
                    this.currentSelectedPage = ' is : ' + event.page;
                    this.currentItemsPerPage = ' is : ' + event.itemsPerPage;
                };
                ;
                ProductListComponent.prototype.logout = function () {
                    this._authService.logout();
                };
                ProductListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._productService.getProducts()
                        .subscribe(function (products) { return _this.policies = products; }, function (error) { return _this.errorMessage = error; });
                };
                ProductListComponent.prototype.ngAfterViewInit = function () {
                    componentHandler.upgradeDom();
                }; // End of ngAfterViewInit
                // Material card show details button 
                ProductListComponent.prototype.viewItem = function (event) {
                    var target = event.currentTarget; // event.target || event.srcElement ||
                    // var idAttr = target.attributes.id;
                    // var value = idAttr.nodeValue;
                    var card = jQuery(target).closest('.material-card');
                    var icon = jQuery(target).children('i');
                    icon.addClass('fa-spin-fast');
                    if (card.hasClass('mc-active')) {
                        card.removeClass('mc-active');
                        setTimeout(function () {
                            icon
                                .removeClass('fa-arrow-left')
                                .removeClass('fa-spin-fast')
                                .addClass('fa-bars');
                        }, 800);
                    }
                    else {
                        card.addClass('mc-active');
                        setTimeout(function () {
                            icon
                                .removeClass('fa-bars')
                                .removeClass('fa-spin-fast')
                                .addClass('fa-arrow-left');
                        }, 800);
                    }
                };
                ProductListComponent = __decorate([
                    core_1.Component({
                        templateUrl: "app/products/product-list.component.html",
                        styleUrls: ['app/assets/css/material-cards.css'],
                        providers: [login_service_1.LoginService],
                        pipes: [product_filter_pipe_1.ProductFilterPipe],
                        directives: [pagination_component_1.Pagination, common_1.FORM_DIRECTIVES, common_1.CORE_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService, product_service_1.ProductService, core_1.ElementRef])
                ], ProductListComponent);
                return ProductListComponent;
            }());
            exports_1("ProductListComponent", ProductListComponent);
        }
    }
});
//# sourceMappingURL=product-list.component.js.map