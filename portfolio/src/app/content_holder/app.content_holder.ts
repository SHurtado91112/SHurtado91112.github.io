import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './app.content_holder.html',
  styleUrls: ['./app.content_holder.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [   // :enter is alias to 'void => *'
          style({opacity:0}),
          animate(1480, style({opacity:1})) 
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
          animate(480, style({opacity:0})) 
        ])
      ])
  ],
  host: {
//    '(window:resize)': 'onResize($event)'
  }
})

export class ContentComponent implements OnInit, AfterViewInit {

    title = "Content";
    @Input() showContent:boolean = false;
    links = "Links Links Links Links";
    left_title = "Experience";
    right_title = "Portfolio";

    ngOnInit() {
        console.log("CHILD INITED")
    }

    ngAfterViewInit() {        
    }
}