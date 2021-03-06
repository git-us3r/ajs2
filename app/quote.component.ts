import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Quote } from './quote';
import { ApiService } from './api.service';

@Component({
    selector: 'my-quote',
    templateUrl: 'app/quote.component.html'
})
export class QuoteComponent implements OnInit {

    private quote : Quote;

    constructor(private apiService: ApiService) {

        // EMPTY
    }

    ngOnInit() : void {

        this.apiService.GetRandomQuote().
        subscribe((quote : Quote) => this.quote = quote);
    }

}
