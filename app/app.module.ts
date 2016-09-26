import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { AppComponent }  from './app.component';
import { QuoteComponent } from './quote.component';
import { BTCValueComponent } from './btcvalue.component';

@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, QuoteComponent, BTCValueComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
