import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MealCardListComponent } from './meal-card/meal-card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MealCardListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [
    MealCardListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
