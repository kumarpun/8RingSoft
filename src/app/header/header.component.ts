import { Component, Renderer } from '@angular/core';

interface NavTab {
  text: string;
  route: string;
}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  public links: NavTab[] = [
    {
      text: 'ABOUT',
      route: 'about'
    }
  ];

  public scrolled: boolean;

  constructor(renderer: Renderer) {
    renderer.listenGlobal('window', 'scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.scrolled = scrollTop > 60 ? true : false;
    });
}
}
