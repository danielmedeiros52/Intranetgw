import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo-cliente-fornecedores',
  templateUrl: './grupo-cliente-fornecedores.component.html',
  styleUrls: ['./grupo-cliente-fornecedores.component.css']
})
export class GrupoClienteFornecedoresComponent implements OnInit {


  contain(content){
    if(content.value=='use'){
    content.value=false
    alert("lindo")
    return true 
    }
 
  else{
    content.value=true
    return false
  } 
  }





  constructor() { }

  ngOnInit() {
    
  }

}
