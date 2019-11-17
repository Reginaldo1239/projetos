import { Component, OnInit } from '@angular/core';
import { TouchSequence } from 'selenium-webdriver';
import { NoticiasService } from '../noticias.service';
import { config } from 'rxjs';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {
  indice:number=0;
  pathImg = "assets/Imagens/Slide/";
  imgs=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg']
  service
  imgAtualId =this.imgs[this.indice];
    imgAtual;
  constructor(private http :NoticiasService) { }
 
   ngOnInit() {
    
    this.imgAtual = this.pathImg+this.imgs[this.indice];
    
  }

   onproximaImg(direcao){
 
      if( direcao =='>'){     
      
        switch(this.indice){   
               case 0:
                  this.indice++;
                this.imgAtual = this.pathImg+this.imgs[this.indice];
             
                break;
              case 1:
                  this.indice++;
                this.imgAtual = this.pathImg+this.imgs[this.indice]; 
             
                break;
              case 2:
                  this.indice++;
                this.imgAtual = this.pathImg+ this.imgs[this.indice];
               
                break;
              case 3:
                  this.indice++;
                this.imgAtual = this.pathImg +this.imgs[this.indice];    
                
                break;
              case 4:
                  
                this.imgAtual = this.pathImg + this.imgs[this.indice-1];
                this.indice= 0;
               
               break;
                 }            
        }else if(direcao=='<'){
          console.log(this.indice);
          console.log(this.imgs[this.indice]);
          switch(this.indice){   
            case 0:
                this.indice=4;
             this.imgAtual = this.pathImg+this.imgs[this.indice];
             
             break;
           case 1:
              this.indice--;
             this.imgAtual = this.pathImg+this.imgs[this.indice]; 
          
             break;
           case 2:
              this.indice--;
             this.imgAtual = this.pathImg+ this.imgs[this.indice];
            
             break;
           case 3:
              this.indice--;
             this.imgAtual = this.pathImg +this.imgs[this.indice];    
            
             break;
           case 4:
              this.indice--;
             this.imgAtual = this.pathImg + this.imgs[this.indice];
           
            break;
              }       

        }
}

essaImg(img){

    this.imgAtual= this.pathImg+this.imgs[img];
    this.indice = img;

}

}



