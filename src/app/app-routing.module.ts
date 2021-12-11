import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {RestaurantViewComponent} from './restaurant-view/restaurant-view.component';

// Route list that sets the component and template to it's path.
const routes: Routes = [
  {path: '', component: HomeComponent },
  // The : character indicates a dynamic name field (restaurant slug name)
  {path: 'restaurants/:name', component: RestaurantViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
// Imported into main module so that it can be injected into a component.
export class AppRoutingModule {}
