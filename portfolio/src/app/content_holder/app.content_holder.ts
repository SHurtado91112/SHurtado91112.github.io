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
          animate(840, style({opacity:1})) 
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
    resumeLink = "../assets/Steven_Hurtado_Resume.pdf"
    intro_links = [
        {"src":"../assets/email-icon-resource.svg","src2":"../assets/email-icon-resource-hov.svg",
        "link":"https://www.google.com", "bg":"#323232","title":"Email Me"},{"src":"../assets/linked-resource.svg","src2":"../assets/linked-resource-hov.svg","bg":"#cbcbcb",
        "link":"https://www.linkedin.com/in/steven-hurtado","title":"LinkedIn"},{"src":"../assets/git-resource.svg","src2":"../assets/git-resource-hov.svg",
        "link":"https://www.github.com/SHurtado91112", "bg":"#cbcbcb","title":"GitHub"},{"src":"../assets/sound-resource.svg","src2":"../assets/sound-resource-hov.svg",
        "link":"https://www.soundcloud.com/steveshidae", "bg":"#323232","title":"SoundCloud"}
    ];

    left_title = "Experience";
    right_title = "Portfolio";

//    assignBackground();
    goTo(link) {
        console.log("GO TO: " + link);
        window.open(link, "_blank");
    }

    ngOnInit() {
        console.log("CHILD INITED")
    }

    ngAfterViewInit() {        
    }
}