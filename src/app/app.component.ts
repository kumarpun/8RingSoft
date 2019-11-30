import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
public currentTabIndex = 0;
public links = [
  {
    route: ['/'],
    name: 'home'
  },
  {
    route: ['/about'],
    
  }
]

}
