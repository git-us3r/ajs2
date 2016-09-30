import { Injectable } from '@angular/core';
import { Http, Request, Response, RequestOptions, RequestMethod, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import { Quote } from './quote';

@Injectable()
export class ApiService {

    constructor(private http : Http) {

        // EMPTY
    }


    /// Public Interface

    public GetBitcoinValue() : Observable<any>{

        let returnValue : any;
        let requestUrl = 'https://bravenewcoin-v1.p.mashape.com/convert?from=btc&qty=1&to=usd';
        
        let localHeaders = new Headers({     
            
            'X-Mashape-Key' : 'AXcYZwz5QLmshkiUwJauIltVntULp1LmwjJjsnSQjDK1xB15p7',
            'Accept' : 'application/json'

        }); 

        let requestOptions = new RequestOptions({
            method : RequestMethod.Post,
            url: requestUrl,
            headers: localHeaders
        });

        returnValue = this.http.request(requestUrl, requestOptions).
        map(this.mapResponse).
        catch(this.handleError);

        return returnValue;
    }

    public GetRandomQuote() : Observable<Quote> {

        let requestUrl = 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous';

        let localHeaders = new Headers({     
            
            'X-Mashape-Key' : 'AXcYZwz5QLmshkiUwJauIltVntULp1LmwjJjsnSQjDK1xB15p7',
            'Content-Type' : 'application/x-www-form-urlencoded',
            'Accept' : 'application/json',
            }); 

        let requestOptions = new RequestOptions({
            method : RequestMethod.Post,
            url: requestUrl,
            headers: localHeaders
        });


        let response = this.http.request(requestUrl, requestOptions).
        map(this.mapResponse).
        catch(this.handleError)

        return response;
    }

    public GetMyIp() : Observable<string> {

        let requestUrl = 'https://mark-sutuer-ip-utils.p.mashape.com/api.php?_method=getMyIp';

        let localHeaders = new Headers({     
            
            'X-Mashape-Key' : 'AXcYZwz5QLmshkiUwJauIltVntULp1LmwjJjsnSQjDK1xB15p7',
            'Accept' : 'text/plain',
            }); 

        let requestOptions = new RequestOptions({
            method : RequestMethod.Get,
            url: requestUrl,
            headers: localHeaders
        });


        let response = this.http.request(requestUrl, requestOptions).
        map(this.mapResponse).
        catch(this.handleError)

        return response;
    }


    /// Mapping/Error-handling

    private mapResponse(res : Response) {

        let body = res.json();

        return body;
    }

    private handleError (error: any) {
    // Q: how to dig deeper into the error to get a better message?
    
    console.debug('handling error');
    
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    
    console.error(errMsg); // log to console instead
    return Observable.throw(error);
  }
}