import { Component } from '@angular/core';
import { Http, Request, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';
import { Quote } from './quote';
import { ApiService } from './api.service';

@Component({
    selector: 'my-quote',
    providers : [ApiService],
    templateUrl: 'app/quote.component.html'
})
export class QuoteComponent {

    private quote : Quote = new Quote();

    constructor(private http: Http, private apiService: ApiService) {

        this.apiService.GetRandomQuote().
        subscribe((quote : Quote) => this.quote = quote);
    }

}
