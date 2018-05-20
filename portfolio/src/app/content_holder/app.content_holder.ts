import { Component, Input, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';
import { InViewportModule } from 'ng-in-viewport';
// Remember to import `intersection-observer` polyfill to support all major browsers
import 'intersection-observer';

@Component({
  selector: 'app-content-holder',
  encapsulation: ViewEncapsulation.None,
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
    visible = {};
    skillTitle = "Skills";
    skills = {
        "Mobile" : ["iOS", "Android", "Swift", "Obj-C", "Android Studio", "XCode", "Xamarin", "Full-Stack", "Adobe", "Disney"],
        "Web" : ["HTML", "CSS", "JavaScript", "JQuery", "Angular", "Node.js", "npm", ".NET", "ASP .NET Core 2.0", ".NET MVC", "C#", "Front-End", "Back-End", "Full-Stack", "Disney"],
        "iOS" : ["Obj-C", "Swift", "CocoaPods", "AFNetworking", "OneSignal", "AutoLayout", "UITouch", "Apple Pencil", "ARKit", "XCode", "iBeacon"],
        "Obj-C" : ["iOS", "Mobile", "UITouch", "CocoaPods", "AutoLayout", "OneSignal", "Apple Pencil"],
        "Swift" : ["iOS", "Mobile", "UITouch", "CocoaPods", "AutoLayout", "ARKit", "AFNetworking", "Apple Pencil", "Frameworks"],
        "iBeacon" : ["iOS", "Bluetooth", "Positioning", "ARKit"],
        "ARKit" : ["Miya", "3D", "iOS", "Mobile"],
        "UITouch" : ["Apple Pencil", "Force Sensitivity", "Altitude", "Azimuth", "Texturing", "iOS", "Mobile"],
        "Apple Pencil" : ["UITouch", "iOS", "Mobile"],
        "Android" : ["Java", "Android Studio", "Firebase", "XML"],
        "Front-End" : ["Design", "CSS", "JavaScript", "JQuery", "Angular", "Adobe", "InDesign", "Illustrator", "Photoshop", "Animate", "Flexbox", "Bootstrap"],
        "Back-End" : [".NET", "Firebase", "JSON", "JSON.NET", "Database", "SQL", "MS SQL Server", "Oracle", "Java", "C#", "Angular", "REST", "SOAP", "Security"],
        "Design" : ["Adobe", "InDesign", "Illustrator", "Photoshop", "Animate", "Front-End", "Storyboards", "UX", "3D", "2D"],
        "2D" : ["Awesome Island", "GameMaker"],
        "3D" : ["Awesome Island 2018", "Blender", "Unreal Engine"],
        "Adobe" : ["Summer 2018", "iOS", "Apple Pencil", "InDesign", "Illustrator", "Photoshop", "Animate", "Front-End", "Back-End", "Full-Stack"],
        "Disney" : ["Spring 2018", "Xamarin", "C#", ".NET", "ASP .NET Core 2.0", ".NET MVC", "JSON.NET", "SQL", "Front-End", "Back-End", "Full-Stack"],
        "Full-Stack" : ["Front-End", "Back-End", "Mobile", "Web", "Adobe", "Disney"],
        "Database" : ["SQL", "MS SQL Server", "Oracle"],
        "SQL" : ["Database", "MS SQL Server", "Oracle", "JSON Support"],
        "Frameworks" : [".NET", "AFNetworking", "UITouch", "ARKit", "Angular", "JSON.NET", "Firebase", "Xamarin", "Twitter API", "Facebook API"],
        "Xamarin" : ["Hybrid", "Mobile", "iOS", "Android", "C#"],
        "JSON" : ["JSON.NET", "Newtonsoft", "REST"],
        "Java" : ["Back-End", "Android", "Mobile"],
        "C#" : ["Xamarin", ".NET", ".NET MVC", "ASP .NET Core 2.0", "Back-End", "Security"],
        "Security" : ["OAuth", "Authentication", "Back-End"],
        "Internships" : ["Check out the 'Experience' tab!"],
        "Experience" : ["Check out the 'Experience' tab!"],
        "Projects" : ["Check out the 'Portfolio' tab!"],
        "Portfolio" : ["Check out the 'Portfolio' tab!"],
        "Resume" : ["Press Enter."],
        "Music" : ["Press Enter."]
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