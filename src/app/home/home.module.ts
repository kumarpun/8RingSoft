import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AboutComponent } from '../home/about/about.component';
import { HomeMainModule } from './home-main/homemai.module';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team/team.component';
import { SeemoreModule } from './seemore/seemore.module';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [
  
    HttpClientModule,
    CommonModule,
    HomeMainModule,
    SeemoreModule
    
  ],
exports: [HomeComponent]
})
export class HomeModule { }
