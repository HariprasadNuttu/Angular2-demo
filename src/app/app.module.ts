import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ElementRefComponent } from './element-ref/element-ref.component';
import { BasicObservableComponent } from './basic-observable/basic-observable.component';
import { HttpObservableComponent } from './http-observable/http-observable.component';
import { SearchWithFlatComponent } from './search-with-flat/search-with-flat.component';
import { HttpHeaderComponent } from './http-header/http-header.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { ViewPageComponent } from './view-page/view-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementRefComponent,
    BasicObservableComponent,
    HttpObservableComponent,
    SearchWithFlatComponent,
    HttpHeaderComponent,
    ViewChildComponent,
    ViewPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
