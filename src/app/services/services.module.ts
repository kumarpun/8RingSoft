import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServicesComponent } from './services.component';


@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
  
    HttpClientModule,
    
  ],
exports: [ServicesComponent]
})
export class ServicesModule { }
