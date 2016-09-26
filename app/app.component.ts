import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { QuoteComponent } from './quote.component';
import { BTCValueComponent } from './btcvalue.component';


@Component({
    selector: 'my-app',
    styleUrls : ['app/app.component.styles.css'],
    templateUrl: 'app/app.component.html',
})
export class AppComponent {

    private Header : string;

    constructor() {

        this.Header = 'AJS 2 Demo';
    }
}
