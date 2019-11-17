import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {
  
  profileForm = this.fb.group({
    nome:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    mensagem:['',[Validators.required,Validators.minLength(5)]],
    aliases: this.fb.array([
      this.fb.control('')
    ])
  });
  formControl;
  constructor( private fb:FormBuilder) { }
  
  ngOnInit() {
this.a();
  console.log(this.nome());
  }
  get aliases() {
    return this.profileForm.get('aliases') as FormArray;
  }
  a(){
    this.formControl= this.profileForm;
    console.log(this.formControl)
    console.log(this.profileForm);
  }

  validarInput(nomeDoinput){
    console.log(this.profileForm.controls[nomeDoinput].errors);
      if(this.profileForm.controls[nomeDoinput].status=="VALID"){
        
        return true;
      }else{
        return false;
      }

  }
  nome(){return this.profileForm.get('nome');}
  email(){return this.profileForm.get('email');}
  mensagem(){return this.profileForm.get('mensagem')}
}
