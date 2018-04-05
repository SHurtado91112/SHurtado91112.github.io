import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-content-holder',
  templateUrl: './app.content_holder.html',
  styleUrls: ['../app.component.css','./app.content_holder.css']
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
    contentSections = [];

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

    initSections() {
        this.contentSections = [
                  [{"id" : "Miya", "img" : "../assets/Miya-Logo.svg", "color" : "#ff5a5a"}, {"id" : "Zippy Contact", "img" : "../assets/zippy-logo-opc.svg", "color" : "#1bc405"},{"id" : "Autowise", "img" : "../assets/Autowise-Logo.svg", "color" : "#1bc405"},{"id" : "Langua", "img" : "../assets/langua-logo.png", "color" : "#24f04b"},{"id" : "SGSenate", "img" : "..", "color" : "#24f04b"},{"id" : "Chirpi", "img" : "../assets/chirpi-logo.png", "color" : "#24f04b"},{"id" : "Fiestagram", "img" : "../assets/fiestagram-logo.png", "color" : "#24f04b"},{"id" : "Foodda", "img" : "../assets/foodda-logo.png", "color" : "#24f04b"}],
                    [{"id" : "Adobe", "img" : "..", "color" : "#ff0000"}, {"id" : "Disney", "img" : "..", "color" : "#006e99"},{"id" : "Agora", "img" : "../assets/agora-logo.svg", "color" : "#184C7C"},{"id" : "University of Florida", "img" : "..", "color" : "#24f04b"},{"id" : "Wahi Ride", "img" : "..", "color" : "#61b3ff"},{"id" : "iD Tech", "img" : "..", "color" : "#24f04b"}]
                ];
    }

    ngOnInit() {
        console.log("CHILD INITED")
        this.initSections();
    }

    ngAfterViewInit() {        
    }
}