import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ServicesComponent } from './services/services.component';


@NgModule({
  imports: [
    RouterModule.forRoot([
        {
          path: '',
          component: HomeComponent
        },
        {
          path: 'services',
          component: ServicesComponent
        },
        {
          path: 'footer',
          component: FooterComponent
        }
    ]),
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
