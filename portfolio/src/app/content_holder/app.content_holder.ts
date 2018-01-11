import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-content-holder',
  templateUrl: './app.content_holder.html',
  styleUrls: ['./app.content_holder.css'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [   // :enter is alias to 'void => *'
          style({opacity:0}),
          animate(480, style({opacity:1})) 
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

export class ContentHolderComponent implements OnInit, AfterViewInit {

    title = "Content";
    @Input() showContent:boolean = false;
    @Input() contentSwitch:boolean = true;
    left_title = "Portfolio";
    right_title = "Experience";

    toggleContent(content) {
        switch(content) {
            case 0:
                
                this.contentSwitch = true;
                document.getElementsByClassName("content-switcher")[0].classList.remove("content-switched");
                break;
            case 1:
                this.contentSwitch = false;
                document.getElementsByClassName("content-switcher")[0].classList.add("content-switched");
                break;
            default:
                break;
        }
    }

    init() {
        if(!this.contentSwitch && this.showContent) {
            document.getElementsByClassName("content-switcher")[0].classList.add("content-switched");
        }
    }

    ngOnInit() {
        console.log("CHILD INITED")
    }

    ngAfterViewInit() {        
    }
}