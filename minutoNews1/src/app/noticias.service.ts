import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient){}
       /**
     * getFotos
     */
  
     public getFotos():Observable<any> {
    return  this.http.get('assets/noticias.json');
      
    }
  
  }

