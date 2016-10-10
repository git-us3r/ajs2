import { Component, NgModule, animate, state, style, transition, trigger} from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
    selector: 'news',
    templateUrl: 'app/news.component.html',
    styleUrls: ['app/news.component.css'],
    animations: [trigger(
      'openClose',
      [
        state('collapsed, void', style({opacity: '0'})),
        state('expanded', style({opacity: '1'})),
        transition(
            'collapsed <=> expanded', [animate(500)])
      ])],
})
export class NewsComponent implements OnInit {

    private categoryCollection : any;
    private stateExpression: string;  
     
    constructor(private apiService: ApiService) {

        this._Collapse();
    }

    ngOnInit() : void {

        let news : any;
        this.apiService.GetGuardianNewsByCategory().
        subscribe(news => this._HandleCategoriesResponse(news));
    }

    private _Expand() { 

        this.stateExpression = 'expanded'; 
        console.log("this.stateExpression: " + this.stateExpression);
    }

    private _Collapse() { this.stateExpression = 'collapsed'; }

    private _HandleCategoriesResponse(news : any) : void {

        this.categoryCollection = news.response.results;
        window.setTimeout(this._Expand, 6000);
    }

    private _NavigateToUrl(url : string) : void {

        window.open(url);
    }

}