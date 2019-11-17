import { Component, OnInit } from '@angular/core';
import { NoticiasService } from '../noticias.service';
import { Marker } from '@agm/core/services/google-maps-types';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-box-editoriais',
  templateUrl: './box-editoriais.component.html',
  styleUrls: ['./box-editoriais.component.scss']
})
export class BoxEditoriaisComponent implements OnInit {
services;
 pathImgs;
 lat: number = -23.6066555;
 lng: number = -46.7032463;
 zoom:number = 16;

a=['0','1','2','5','7']
  constructor(private http: NoticiasService) { }


  ngOnInit() {
    this.noticias();
    this.pathImgs="assets/noticias/";
  }
  noticias(){
    this.http.getFotos().subscribe(data=>{
      this.services = data[0].Editorias;
      
      console.log(data[0].Editorias[0].noticias[4].data)

    },error=>{})
  }

}
