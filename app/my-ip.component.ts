import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
    selector: 'my-ip',
    templateUrl: 'app/my-ip.component.html'
})
export class MyIpComponent implements OnInit {

    private ip : string;

    constructor(private apiService: ApiService) {

        // EMPTY
    }

    ngOnInit() : void {

        this.apiService.GetMyIp().
        subscribe(IP => this.ip = IP['myIp']);
    }

}