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
    highlights = ["Mobile", "Resume", "Music", "iOS", "Web"];
    skills = {
        "Mobile" : ["iOS", "Android", "Swift", "Objective-C", "Android Studio", "XCode", "Xamarin", "Full-Stack", "Adobe", "Disney"],
        "Web" : ["HTML", "CSS", "JavaScript", "JQuery", "Angular", "Node.js", "npm", ".NET", "ASP .NET Core 2.0", ".NET MVC", "C#", "Front-End", "Back-End", "Full-Stack", "Disney"],
        "iOS" : ["Objective-C", "Swift", "CocoaPods", "AFNetworking", "OneSignal", "AutoLayout", "UITouch", "Apple Pencil", "ARKit", "XCode", "CoreML"],
        "Objective-C" : ["iOS", "Mobile", "UITouch", "CocoaPods", "AutoLayout", "OneSignal", "Apple Pencil", "CoreML"],
        "Swift" : ["iOS", "Mobile", "UITouch", "CocoaPods", "AutoLayout", "ARKit", "AFNetworking", "Apple Pencil", "Frameworks"],
        "ARKit" : ["Miya", "3D", "iOS", "Mobile"],
        "UITouch" : ["Apple Pencil", "Force Sensitivity", "Texturing", "iOS", "Mobile"],
        "Apple Pencil" : ["UITouch", "iOS", "Mobile"],
        "Android" : ["Java", "Android Studio", "Firebase", "XML"],
        "Front-End" : ["Design", "CSS", "JavaScript", "JQuery", "Angular", "Adobe", "InDesign", "Illustrator", "Photoshop", "Animate", "Flexbox", "Bootstrap"],
        "Back-End" : [".NET", "Firebase", "JSON", "JSON.NET", "Database", "SQL", "MS SQL Server", "Oracle", "Java", "C#", "Angular", "REST", "SOAP", "Security"],
        "Design" : ["Adobe", "InDesign", "Illustrator", "Photoshop", "Animate", "Front-End", "Storyboards", "UX", "3D", "2D"],
        "2D" : ["Awesome Island", "GameMaker"],
        "3D" : ["Awesome Island 2018 (TBA)", "Blender", "Unreal Engine"],
        "Adobe" : ["Summer 2018", "iOS", "Apple Pencil", "InDesign", "Illustrator", "Photoshop", "Animate", "Front-End", "Back-End", "Full-Stack"],
        "Disney" : ["Spring 2018", "Xamarin", "C#", ".NET", "ASP .NET Core 2.0", ".NET MVC", "JSON.NET", "SQL", "Front-End", "Back-End", "Full-Stack"],
        "Full-Stack" : ["Front-End", "Back-End", "Mobile", "Web", "Adobe", "Disney"],
        "Database" : ["SQL", "MS SQL Server", "Oracle"],
        "SQL" : ["Database", "MS SQL Server", "Oracle", "JSON Support"],
        "Frameworks" : [".NET", "AFNetworking", "UITouch", "ARKit", "CoreML", "Angular", "JSON.NET", "Firebase", "Xamarin", "Twitter API", "Facebook API"],
        "Xamarin" : ["Hybrid", "Mobile", "iOS", "Android", "C#"],
        "JSON" : ["JSON.NET", "Newtonsoft", "REST"],
        "Java" : ["Back-End", "Android", "Mobile"],
        "C#" : ["Xamarin", ".NET", ".NET MVC", "ASP .NET Core 2.0", "Back-End"],
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
            "items":[
            {
                "id" : "Miya", 
                "img" : "../assets/Miya-Logo.svg", 
                "color" : "#ff5a5a", 
                "bio":"Miya is a personal research application for interactive AR-based home automation and indoor positioning. Tools and technology currently being used include: Swift iOS, Raspberry Pi, and Firebase by Google.", 
                "images" : ["../assets/miya-1.jpeg", "../assets/miya-2.jpeg", "../assets/miya-3.jpg"], 
                "links" : [
                    {"link" : "github.com/SHurtado91112", 
                     "img" : "../assets/web.png"}]
            }, 
            {
                "id" : "Zippy Contact", 
                "img" : "../assets/zippy-logo-opc.svg", 
                "color" : "#1bc405",
                "bio":"Zippy Contact is an iOS application that will allow you to save time in making a phone call by assigning a unique gesture to listed contacts in your phone.", 
                "images" : ["../assets/zippy-1.png", "../assets/zippy-2.png"],
                "links" : [
                    {"link" : "https://github.com/SHurtado91112/Zippy-Contact", 
                     "img" : "../assets/github.png"},
                    {"link" : "https://devpost.com/software/zippy-contact", 
                     "img" : "../assets/web.png"}]
            }, 
            {
                "id" : "Autowise Loan Tracker", 
                "img" : "../assets/Autowise-Logo.svg", 
                "color" : "#1bc405",
                "bio":"This application is intended as the paperless replacement for loan applications for Autowise, a used-card dealership in Tallahassee, Florida. It also provides Autowise's customers the ability to track their application details, so they can login online whenever they want, and check their application and comments (updates, requests for more information) instead of flooding the phone lines.", 
                "images" : ["../assets/auto-1.png", "../assets/auto-2.png", "../assets/auto-3.png"],
                "links" : [
                    {"link" : "https://github.com/MEAN-Script-Org/Autowise-Loan-Tracker", 
                     "img" : "../assets/github.png"}]
            }, 
            {
                "id" : "Langua", 
                "img" : "../assets/langua-logo.png", 
                "color" : "#1bc405",
                "bio":"Language learning application that provides mentors, resources, and courses for learning clients. Final project for CodePath University's iOS boot camp. Includes: course registration, chat features with a live feed of who’s online, and database supported through Firebase by Google.",
                "images" : ["../assets/lang-1.png", "../assets/lang-2.png", "../assets/lang-3.png", "../assets/lang-4.png", "../assets/lang-5.png"],
                "links" : [
                    {"link" : "https://github.com/Langua/Langua", 
                     "img" : "../assets/github.png"}]
            }, 
            {
                "id" : "SGSenate", 
                "img" : "../assets/sgsenate-logo.png", 
                "color" : "#1bc405",
                "bio":"SGSenate is an iOS application made for the University of Florida's Student Government senate hearings in order to replace their 100% paper system. Functionality includes: displaying SG’s agenda, bills, and miscellaneous items, a live queue for public debates, a voting system on concurrent bills, and admin features.", 
                "images" : [],
                "links" : [
                    {"link" : "https://github.com/SHurtado91112/SGSenate", 
                     "img" : "../assets/github.png"}]
            }, 
            {
                "id" : "Chirpi", 
                "img" : "../assets/chirpi-logo.png", 
                "color" : "#1bc405",
                "bio":"Chirpi is a basic twitter app to read and compose tweets using the Twitter API. This was one of many clone applications made to further iOS development skills for Code Path University's iOS boot camp.", 
                "images" : ["../assets/chirp-1.png", "../assets/chirp-2.png", "../assets/chirp-3.png", "../assets/chirp-4.png"],
                "links" : [
                    {"link" : "https://github.com/SHurtado91112/Chirpi", 
                     "img" : "../assets/github.png"}]
            },
            {
                "id" : "Fiestagram", 
                "img" : "../assets/fiestagram-logo.png", 
                "color" : "#1bc405",
                "bio":"Fiestagram is a photo sharing app using Parse as its backend. No real party inside. Simply an Instagram clone. With lots of confetti. This was one of many clone applications made to further iOS development skills for Code Path University's iOS boot camp.", 
                "images" : ["../assets/fiesta-1.png", "../assets/fiesta-2.png", "../assets/fiesta-3.png", "../assets/fiesta-4.png"],
                "links" : [
                    {"link" : "https://github.com/SHurtado91112/Fiestagram", 
                     "img" : "../assets/github.png"}]
            }]
        },
        {
            "title": "Experience", 
            "items": 
            [
                {
                    "id" : "Adobe", 
                    "img" : "../assets/adobe-logo.svg", 
                    "color" : "#ff0000",
                    "bio":"My 2018 Summer internship as a Full-Stack Mobile Development Intern on Adobe Acrobat's iOS team. I researched and built a demo of a handwriting-to-text proof of concept feature as my main project. I also built shippable features that were requested in high demand from customers.", 
                    "images" : ["../assets/adobe-1.png", "../assets/adobe-2.jpg"],
                    "links" : []
                },
                {
                    "id" : "Disney", 
                    "img" : "../assets/Disney_Logo.png", 
                    "color" : "#006e99",
                    "bio":"My 2018 Spring internship as a Software Engineering Intern at Walt Disney World's Central Shops. I updated an internal Xamarin based application for searching attraction documents, built and designed ASP .NET tools and UI Framework to make it easier for future developers on the team, and added Disney internal authentication for Central Shops’ customer facing websites.", 
                    "images" : ["../assets/disney-1.jpg", "../assets/disney-2.jpeg", "../assets/disney-3.jpeg"],
                    "links" : []
                },
                {
                    "id" : "Agora", 
                    "img" : "../assets/agora-logo.svg", 
                    "color" : "#184C7C",
                    "bio":"My 2017 Summer internship as a Software Engineering Intern at Agora, a Gainesville based startup. I mainly worked developing various features on both their iOS and Android platforms. I added a point-system for Agora members, a notification subscription feature, and enhanced the UX and performance of the application on both platforms.",
                    "images" : ["../assets/agora-1.jpg", "../assets/agora-2.png", "../assets/agora-3.gif"],
                    "links" : [{"link" : "https://www.agoraorg.com/about-us", 
                     "img" : "../assets/web.png"}]
                },
                {
                    "id" : "University of Florida", 
                    "img" : "../assets/uf-logo.png", 
                    "color" : "#ff0000",
                    "bio":"I worked as a Teaching Assistant for Programming Fundamentals COP3502 at the University of Florida. I held labs and office hours to better develop students in basic programming concepts. In terms of involvement on campus, I also acted as the Vice President of Professional Affairs for UF's Association for Computing Machinery. In that role, I worked directly with sponsoring companies and related student organizations to provide opportunities for our members.", 
                    "images" : ["../assets/uf-1.jpg", "../assets/uf-2.png", "../assets/uf-3.jpg"],
                    "links" : [{"link" : "https://ufacm.xyz/", 
                     "img" : "../assets/web.png"}]
                },
                {
                    "id" : "iD Tech", 
                    "img" : "../assets/id-logo.png", 
                    "color" : "#24f04b",
                    "bio":"Over the Summer of 2016 I worked as a C++/Java Programming Instructor for iD Tech Camps at their Boca Raton site. I instructed students between the ages of 13-17 in the C++/Java Programming Languages. I taught programming basics, including Object-Orientation and dynamic memory allocation.", 
                    "images" : ["../assets/id-1.jpg", "../assets/id-2.jpg", "../assets/id-3.jpg"],
                    "links" : []
                }   
            ]
        }];
    }

    ngOnInit() {
        this.initSections();
    }

    ngAfterViewInit() {        
    }
}