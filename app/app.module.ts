import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { HttpModule }           from '@angular/http';
import { AppComponent }         from './app.component';
import { QuoteComponent }       from './quote.component';
import { BTCValueComponent }    from './btcvalue.component';
import { MyIpComponent }        from './my-ip.component';
import { NewsComponent }        from './news.component';
import { ApiService }           from './api.service';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  providers : [ApiService],
  declarations: [ AppComponent, QuoteComponent, BTCValueComponent, MyIpComponent, NewsComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
