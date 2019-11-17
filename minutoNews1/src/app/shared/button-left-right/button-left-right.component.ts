import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-left-right',
  templateUrl: './button-left-right.component.html',
  styleUrls: ['./button-left-right.component.scss']
})
export class ButtonLeftRightComponent implements OnInit {
  @Input() setaDirecao;
  @Output() trocarImg= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }



  proximaImg(direcao){
    this.trocarImg.emit(this.setaDirecao);
    console.log(this.setaDirecao);
  }

}
