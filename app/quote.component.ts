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

        this.apiService.GetBitcoinValue().subscribe(value => this.bcValue = value);
    }

    private getRandomQuote() {

        this.requestUrl = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous';

        var localHeaders = new Headers({     
            
            'X-Mashape-Key' : 'AXcYZwz5QLmshkiUwJauIltVntULp1LmwjJjsnSQjDK1xB15p7',
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Accept' : 'application/json',
            }); 

        var requestOptions = new RequestOptions({
            method : RequestMethod.Post,
            url: this.requestUrl,
            headers: localHeaders
        });


        let response = this.http.request(this.requestUrl, requestOptions).
        map(this.mapResponse).
        catch(this.handleError).
        subscribe((quote : Quote) => this.quote = quote);
    }

    private mapResponse(res : Response) : Observable<Quote> {

        let body = res.json();

        return body;
    }

    private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    console.debug('handling error');
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return errMsg;
  }
}
