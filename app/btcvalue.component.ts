import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { BTCValue } from './btcvalue';

@Component({
    
    selector : 'btc-value',
    providers : [ApiService],
    templateUrl : 'app/btcvalue.component.html'
})
export class BTCValueComponent {
    
    private btcValue : BTCValue = new BTCValue();

    constructor(private apiService : ApiService) {

        this.apiService.GetBitcoinValue().
        subscribe((value : BTCValue) => this.btcValue = value);
    }
}