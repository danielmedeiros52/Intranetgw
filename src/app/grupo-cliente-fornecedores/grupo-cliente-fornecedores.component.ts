import { Component, OnInit } from '@angular/core';
import { trigger, state, style,  animate,query,transition,stagger,keyframes } from '@angular/animations';
@Component({
  selector: 'app-grupo-cliente-fornecedores',
  templateUrl: './grupo-cliente-fornecedores.component.html',
  styleUrls: ['./grupo-cliente-fornecedores.component.css'],
  animations: [
    trigger('dropdowngp', [
      
    transition('*=>*',[
      query(':enter',style({opacity:0}),{optional:true}),
      query(':enter',stagger('300ms',[
        animate('1s ease-in',keyframes([
          style({opacity:0,transform:'translateY(-75px)',offset:0}),
          style({opacity:.5,transform:'translateY(25px)',offset:.20}),
          style({opacity:1,transform:'translateY(0)',offset:1}),
        ]))
      ]))
    ])
    ])
  ]
})

export class GrupoClienteFornecedoresComponent implements OnInit {

  contain(content) {
    if (content.value) {
      content.value = false
      return true
    }

    else {
      content.value = true
      return false
    }
  }





  constructor() { }

  ngOnInit() {

  }

}
