import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'app-content-holder',
  templateUrl: './app.content_holder.html',
  styleUrls: ['../app.component.css','./app.content_holder.css'],
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
    skillTitle = "Skills";
    skills = {
        "Mobile" : ["iOS", "Android", "Swift", "Obj-C", "CocoaPods", "AFNetworking", "OneSignal", "Android Studio"],
        "Web" : ["HTML", "CSS", "JavaScript", "JQuery", "Angular 5", "Node.js", "npm", ".NET", "ASP .NET Core 2.0", ".NET MVC", "C#", "Front-End", "Back-End"]
    };

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
        this.contentSections = 
        [{
            "title": "Portfolio", 
            "items":[{"id" : "Miya", "img" : "../assets/Miya-Logo.svg", "color" : "#ff5a5a"}, {"id" : "Zippy Contact", "img" : "../assets/zippy-logo-opc.svg", "color" : "#1bc405"},{"id" : "Autowise", "img" : "../assets/Autowise-Logo.svg", "color" : "#1bc405"},{"id" : "Langua", "img" : "../assets/langua-logo.png", "color" : "#24f04b"},{"id" : "SGSenate", "img" : "../assets/sgsenate-logo.png", "color" : "#24f04b"},{"id" : "Chirpi", "img" : "../assets/chirpi-logo.png", "color" : "#24f04b"},{"id" : "Fiestagram", "img" : "../assets/fiestagram-logo.png", "color" : "#24f04b"}]
        },
        {
            "title": "Experience", 
            "items":[{"id" : "Adobe", "img" : "../assets/adobe-logo.svg", "color" : "#ff0000"}, {"id" : "Disney", "img" : "../assets/Disney_Logo.png", "color" : "#006e99"},{"id" : "Agora", "img" : "../assets/agora-logo.svg", "color" : "#184C7C"},{"id" : "University of Florida", "img" : "../assets/uf-logo.png", "color" : "#24f04b"},{"id" : "Wahi Ride", "img" : "../assets/wahi-logo.png", "color" : "#61b3ff"},{"id" : "iD Tech", "img" : "../assets/id-logo.png", "color" : "#24f04b"}]
        }];
    }

    ngOnInit() {
        console.log("CHILD INITED")
        this.initSections();
    }

    ngAfterViewInit() {        
    }
}