import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  animations: [
  trigger('sidenav',[
    state('show', style({opacity:'2',height:'*'})),
    state('hide',style({opacity:'0',height:'0px'})),
    transition('show<=>hide',[
      animate(800)
    ])
  ])
  ]
})


export class NavBarComponent implements OnInit {
  clicou2(cadastro) {
    if (cadastro.value == true) {
      cadastro.value = false

      return true
    }

    else {
      cadastro.value = true
      return false
    }
  }

state: string ='hide';
teste(){
this.state=(this.state=='show'?'hide':'show')
}

  constructor() { }

  ngOnInit() {
  }

}
