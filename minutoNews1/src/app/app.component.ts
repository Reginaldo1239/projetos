import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'minutoNews';
  lat: number = -23.6066555;
  lng: number = -46.7032463;
  zoom:number = 16;
 
}
