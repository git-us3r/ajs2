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
    template: '<div><h2>{{quote.quote}}</h2><h3>~{{quote.author}}</h3><h3>BC: {{this.bcValue.to_quantity}}</h3></div>'
})
export class QuoteComponent {

    private quote : Quote = new Quote('','','');
    private requestUrl : string;
    private headerString : string;
    private bcValue = {};

    constructor(private http: Http, private apiService: ApiService) {

        this.getRandomQuote();
        this.getBitcoinValue();        
    }

    private getBitcoinValue() {

        this.apiService.GetBitcoinValue().
        subscribe(value => this.bcValue = value);
    }

    private getRandomQuote() {

        this.apiService.GetRandomQuote().
        subscribe((quote : Quote) => this.quote = quote);
    }
}
