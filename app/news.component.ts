import { Component, NgModule, animate, state, style, transition, trigger} from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';


@Component({
    selector: 'news',
    templateUrl: 'app/news.component.html',
    styleUrls: ['app/news.component.css'],
    animations: [trigger('flyInOut', [
        state('in', style({opacity: 1, transform: 'translateX(0)'})),
        transition('void => *', [
          style({
            opacity: 0,
            transform: 'translateX(-100%)'
          }),
          animate('0.2s ease-in')
        ]),
        transition('* => void', [
          animate('0.2s 10 ease-out', style({
            opacity: 0,
            transform: 'translateX(100%)'
          }))
        ])
      ]),
    ],
})
export class NewsComponent implements OnInit {

    private categoryCollection : any[];
    private displayCategoryCollection : any[];
    private stateExpression: string;  
     
    constructor(private apiService: ApiService) {

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
        this.displayCategoryCollection = [];

        for(var id in this.categoryCollection.slice(0,5)) {

            var element = this.categoryCollection[id];
            this.displayCategoryCollection.push(element);
            console.log("pushed news category: " + element.webTitle);

            setTimeout(function(_id = id){ console.log("waiting on: " + _id); }, 2000);     
        }   
    }

    private _NavigateToUrl(url : string) : void {

        window.open(url);
    }

}