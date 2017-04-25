import {Component, OnInit} from 'angular2/core';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {PaginatePipe, PaginationService, PaginationControlsCmp, IPaginationInstance} from 'ng2-pagination';

export interface PagedResponse<T> {
    total: number;
    data: T[];
}

export interface DataModel {
    id: number;
    data: string;
}

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers: [HTTP_PROVIDERS, PaginationService],
    directives: [PaginationControlsCmp],
    pipes: [PaginatePipe]
})
export class AppComponent implements OnInit {
    private _data: Observable<DataModel[]>;
    private _page: number = 1;
    private _total: number;

    constructor(private _http: Http) {

    }
    ngOnInit() {
        this.getPage(1);
    }
    getPage(page: number) {
        this._data = this._http.get("http://localhost:52472/api/data/" + page + "/10")
            .do((res: any) => {
                this._total = res.json().total;
                this._page = page;
            })
            .map((res: any) => res.json().data);
    }

    
}