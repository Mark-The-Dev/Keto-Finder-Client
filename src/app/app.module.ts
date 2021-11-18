import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MealCardListComponent } from './meal-card/meal-card-list.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {environment} from '../environments/environment';
import {HomeComponent} from './home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RestaurantViewComponent } from './restaurant-view/restaurant-view.component';
import {MatSelectModule} from '@angular/material/select';
import {MatOptionModule} from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MealCardListComponent,
    HomeComponent,
    RestaurantViewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
  ],
  providers: [
    { provide: 'env', useValue: environment },
    HttpClientModule,
  ],
  exports: [
    MealCardListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
