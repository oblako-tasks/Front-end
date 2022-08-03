import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { MaterialAngular } from './material.angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { CreateComponent } from './components/create/create.component';
import { HttpClientModule } from '@angular/common/http';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    HeaderComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    MaterialAngular,
    BrowserAnimationsModule,
    HttpClientModule,
    GraphQLModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }