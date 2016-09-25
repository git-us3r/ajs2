import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuoteComponent } from './quote.component';


@Component({
    selector: 'my-app',
    template: '<h1>{{Header}}</h1><my-quote></my-quote>',
})
export class AppComponent {

    private Header : string;

    constructor() {

        this.Header = 'AJS 2 Demo';
    }
}
