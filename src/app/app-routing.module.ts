import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RestaurantViewComponent} from './restaurant-view/restaurant-view.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'restaurants/:name', component: RestaurantViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
