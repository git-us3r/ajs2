import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { BTCValue } from './btcvalue';

@Component({
    
    selector : 'btc-value',
    templateUrl : 'app/btcvalue.component.html'
})
export class BTCValueComponent implements OnInit {
    
    private btcValue : BTCValue;

    constructor(private apiService : ApiService) {

        // EMPTY
    }

    ngOnInit() : void {

        this.apiService.GetBitcoinValue().
        subscribe((value : BTCValue) => this.btcValue = value);
    }
}