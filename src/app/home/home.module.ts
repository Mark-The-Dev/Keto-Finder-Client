import {HomeComponent} from './home.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppModule} from '../app.module';


@NgModule({
  declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HomeComponent,
            }
        ]),
        AppModule,
    ],
  exports: [HomeComponent],
})
export class HomeModule {}
