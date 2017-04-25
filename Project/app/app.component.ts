import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';
import { ROUTER_PROVIDERS,RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';
import { WelcomeComponent } from './home/welcome.component'
import { LoginComponent } from './login/login.component';


@Component({
    selector:'my-app',
    template : ` 
            <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ProductService, HTTP_PROVIDERS, ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/login',       name: 'Login',      component: LoginComponent, useAsDefault:true },
    { path: '/welcome',     name: 'Welcome',    component: WelcomeComponent},
    { path: '/products',    name: 'Products',   component: ProductListComponent },
    { path: '/*others',     name: 'Others',     redirectTo: ['Login']}
])
export class AppComponent { }