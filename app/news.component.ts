import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'news',
    templateUrl: 'app/news.component.html'
})
export class NewsComponent implements OnInit {

    private categoryCollection : any;


    constructor(private apiService: ApiService) {

        // EMPTY
    }

    ngOnInit() : void {

        let news : any;
        this.apiService.GetGuardianNewsByCategory().
        subscribe(news => this._HandleCategoriesResponse(news));
    }

    private _HandleCategoriesResponse(news : any) : void {

        this.categoryCollection = news.response.results;
    }

}