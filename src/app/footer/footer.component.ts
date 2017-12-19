import { Component, OnInit } from '@angular/core';
import { trigger, state, style,  animate,query,transition,stagger,keyframes } from '@angular/animations';

@Component({
  selector: 'app-footer' ,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  animations: [
    trigger('movetolefet', [
      
    transition('*=>*',[
      query(':enter',style({opacity:0}),{optional:true}),
      query(':enter',stagger('300ms',[
        animate('1s ease-in',keyframes([
          style({opacity:0,transform:'translateY(-75px)',offset:0}),
          style({opacity:.5,transform:'translateY(35px)',offset:.30}),
          style({opacity:1,transform:'translateY(0)',offset:1}),
        ]))
      ]))
    ])
    ])
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
