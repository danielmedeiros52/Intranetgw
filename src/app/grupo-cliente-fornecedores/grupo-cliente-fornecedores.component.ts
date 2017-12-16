import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@Component({
  selector: 'app-grupo-cliente-fornecedores',
  templateUrl: './grupo-cliente-fornecedores.component.html',
  styleUrls: ['./grupo-cliente-fornecedores.component.css'],
  animations: [
    trigger('showcontent', [
      state('show', style({ opacity: '2', height: '*' })),
      state('hide', style({ opacity: '0', height: '0px' })),
      transition('hide=>show', [
        animate(800)
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

  state: string ='show';
  teste(){
    this.state=(this.state=='show'?'hide':'show')
    }


  constructor() { }

  ngOnInit() {

  }

}
