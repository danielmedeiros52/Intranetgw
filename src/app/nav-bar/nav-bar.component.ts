import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  clicou2(cadastro){
    if(cadastro.value==true){
    cadastro.value=false
    
    return true 
    }
  else{
    cadastro.value=true
    return false
  } 
  }

  conteudo(itemDoMenu){
if (true){

  alert(itemDoMenu.value)

}

  }

  constructor() { }

  ngOnInit() {
  }

}
