import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  cards = [];
  carousel = [];
  constructor() { 
  
  }

  ngOnInit() {
    this.cards = [
      {title:"Clean & Simple",body:"A clean interface is the key to a good looking product.I always like to keep things clean and simple",icon:"fas fa-shower"},
      {title:"Pixel Perfect",body:"Every pixel,icon or piece of interface on this awesome premium templates is manualy and carefully crafted .",icon:"fas fa-puzzle-piece"},
      {title:"Multiple Options",body:"The theme comes with a variety of colors,styles and layouts,so it can be a match for any business",icon:"fas fa-folder-open"},
      {title:"Retina Ready",body:"The themes are designed and developed to look absolutely amazing on any retina resolution",icon:"fas fa-eye"},
      {title:"Responsive",body:"Your clients will be able to have a unique,awesome and smart experience on every mobile device out there",icon:"fas fa-mobile"},
      {title:"24/7 Support",body:"If you need any support and you are interested in any of the templates everything its free to use",icon:"fab fa-angellist"}
    ]
    this.carousel = [
      {link:"http://random.ultimatefreehost.in/?i=1",img:"../../assets/webb.jpg"},
      {link:"http://chucknoris.ultimatefreehost.in/?i=1",img:"../../../assets/chuk.png"},
      {link:"http://convertor.ultimatefreehost.in/?i=1",img:"../../../assets/convert.png"}
    ]   
  }
}
