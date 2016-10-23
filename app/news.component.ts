import { Component, NgModule, animate, state, style, transition, trigger} from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';


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
          animate('.5s 250ms ease-in')
        ]),
        transition('* => void', [
          animate('.5s 250ms ease-out', style({
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
    private indexOfLastDisplayedArticle : number;
     
    constructor(private apiService: ApiService) {

        this.indexOfLastDisplayedArticle = 0;
    }

    public ngOnInit() : void {

        let news : any;
        this.apiService.GetGuardianNewsByCategory().
        subscribe(news => this._HandleCategoriesResponse(news));
    }

    public _CloseNewsArticle(article : any) {

        for(var id in this.displayCategoryCollection) {

            if(this.displayCategoryCollection[id] === article) {

                this.displayCategoryCollection[id].isVisible = false;
                break;
            }
        }

        let newArticle = this.categoryCollection[++this.indexOfLastDisplayedArticle];
        newArticle.isVisible = true;

        this.displayCategoryCollection.push(newArticle);
    }

    private _Collapse() { this.stateExpression = 'collapsed'; }

    private _HandleCategoriesResponse(news : any) : void {

        this.categoryCollection = news.response.results;
        this.displayCategoryCollection = [];

        this._UpdateDisplayCollection();
    }

    private _UpdateDisplayCollection() : void {

        for(var id in this.categoryCollection.slice(0,5)) {

            var element = this.categoryCollection[id];
            element.isVisible = true;
            this.displayCategoryCollection.push(element);
        }

        this.indexOfLastDisplayedArticle = 4;
    }

    private _NavigateToUrl(url : string) : void {

        window.open(url);
    }

    private _Sleep(ms : number) {

        let entryTime = Date.now();

        while(Date.now() <= entryTime + ms) {

            // spin
        }
    }
}