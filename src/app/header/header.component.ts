import { Component, OnInit, Renderer } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PageScrollService } from 'ngx-page-scroll-core';

interface HeaderTab {
  text: string,
  route: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public currentTabIndex = 0;
    public links = [
      {
        text: 'Services',
        route: ['/services'],
      }
    ];

    public scrolled: boolean;

    constructor(private router: Router, private pageScrollService: PageScrollService) {
      router.events.subscribe((event) => {
        // see also
        if (event instanceof NavigationEnd) {
          this.links.forEach((link, index) => {
            if (router.isActive(router.createUrlTree(link.route), false)) {
              this.currentTabIndex = index;
            }
          });
        }
      });
    }
  
    public tabChange(event: any) {
      // Select the correct route for that tab
      const routeObj = this.links[event.index];
      if (routeObj && routeObj.route) {
        this.router.navigate(routeObj.route);
      }
    }
  }
