import { Renderer, Directive, Component, OnInit, ElementRef, } from 'angular2/core';
import { ROUTER_PROVIDERS, ROUTER_DIRECTIVES } from 'angular2/router';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from 'angular2/common';

import { IPolice } from './police';
import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';
import { LoginService } from '../login/login.service';
import { Pagination } from '../common/pagination.component'



declare var componentHandler;
declare var jQuery: any;

@Component({
    templateUrl: `app/products/product-list.component.html`,
    styleUrls: ['app/assets/css/material-cards.css'],
    providers: [LoginService],
    pipes: [ProductFilterPipe],
    directives: [Pagination, FORM_DIRECTIVES, CORE_DIRECTIVES],

})

export class ProductListComponent implements OnInit {

    //this array contains the image we will show for each page
    private slides: Array<any> = [];
    //print to the user the selected page
    currentSelectedPage: string = "";
    //print to the user the total iterms per page
    currentItemsPerPage: string = "";
    //the maximum buttons to show
    private maxSize: number = 3;
    //the number of pages you want to print
    private totalResults: number = 60;
    //the current page
    private currentPage: number = 2;


    pageTitle: string = 'Cybersoft';
    drawerName: string = 'Drawer';
    listFilter: string = '';
    policies: IPolice[];
    errorMessage: string;

    jwt: string;

    constructor(
        private _authService: LoginService,
        private _productService: ProductService,
        private _elementRef: ElementRef) {
        this.jwt = localStorage.getItem('id_token');
        console.log(this.jwt);
        
        if (!this.jwt) {
            this.logout();
        }
        
        this.slides.push(
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5' },
            { image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6' }
        );

    }
    private setCurrentPage(pageNo: number): void {
        this.currentPage = pageNo;
    };

    private currentPageChanged(event: any): void {
        this.currentSelectedPage = ' is : ' + event.page;
        this.currentItemsPerPage = ' is : ' + event.itemsPerPage;
    };

    logout() {
        this._authService.logout();
    }

    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(
            products => this.policies = products,
            error => this.errorMessage = <any>error);
    }



    ngAfterViewInit() {
        componentHandler.upgradeDom();
    } // End of ngAfterViewInit


    // Material card show details button 
    viewItem(event) {

        var target = event.currentTarget; // event.target || event.srcElement ||

        // var idAttr = target.attributes.id;
        // var value = idAttr.nodeValue;

        var card = jQuery(target).closest('.material-card');
        var icon = jQuery(target).children('i');

        icon.addClass('fa-spin-fast');
        if (card.hasClass('mc-active')) {

            card.removeClass('mc-active');
            setTimeout(() => {
                icon
                    .removeClass('fa-arrow-left')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-bars');
            }, 800);
        }
        else {
            card.addClass('mc-active');
            setTimeout(() => {
                icon
                    .removeClass('fa-bars')
                    .removeClass('fa-spin-fast')
                    .addClass('fa-arrow-left');
            }, 800);
        }
    }
}