import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    MenuEstaVisivel= false;
  constructor() { }

  ngOnInit() {
  }
  mostrarMenuMobile(){
    console.log(this.MenuEstaVisivel);
  this.MenuEstaVisivel= this.MenuEstaVisivel?this.MenuEstaVisivel =false :this.MenuEstaVisivel=true;
 
  
  }
}
