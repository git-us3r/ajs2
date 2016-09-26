import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ApiService {

    constructor(private http : Http) {

        // EMPTY
    }

    public GetBitcoinValue() : Observable<any>{

        var returnValue : any;
        var requestUrl = 'https://bravenewcoin-v1.p.mashape.com/convert?from=btc&qty=1&to=usd';
        
        var localHeaders = new Headers({     
            
            'X-Mashape-Key' : 'AXcYZwz5QLmshkiUwJauIltVntULp1LmwjJjsnSQjDK1xB15p7',
            'Accept' : 'application/json'

        }); 

        var requestOptions = new RequestOptions({
            method : RequestMethod.Post,
            url: requestUrl,
            headers: localHeaders
        });

        returnValue = this.http.request(requestUrl, requestOptions).
        map(this.mapResponse).
        catch(this.handleError);

        return returnValue;
    }

    private mapResponse(res : Response) {

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