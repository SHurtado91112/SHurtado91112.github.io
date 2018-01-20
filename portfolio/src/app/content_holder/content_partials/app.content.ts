import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './app.content.html',
  styleUrls: ['./app.content.css'],
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

export class ContentComponent implements OnInit, AfterViewInit {
    public visible:boolean;
    public appear:boolean;
    @Input() contentSelector: string = "0";

    contentData = [];

    // carousel attributes
    carousel;
    incr = 0;
    rotation = 0;
    rotateFn = 'rotateY';
    theta = 0;
    radius = 0;

    enter() {
        this.visible = true;
    }
    leave() {
        this.visible = false;
    }

    trackData(index, cont) {
        return cont.id;
    }

    getImgPath(selector) {
        switch(selector) {
            case 0:
                return "../assets/carousel-switcher.svg";
            case 1:
                return "../assets/carousel-switcher.svg";
            default:
                return "";
        }
    }

    getContentData() {
        switch(parseInt(this.contentSelector)) {
            case 0:
                this.contentData = [
                  {"id" : "Miya", "img" : "..", "color" : "#ff5a5a"}, {"id" : "Autowise", "img" : "..", "color" : "#1bc405"},{"id" : "Reach&Relief", "img" : "..", "color" : "#ffb3b3"},{"id" : "Langua", "img" : "..", "color" : "#24f04b"},{"id" : "SGSenate", "img" : "..", "color" : "#24f04b"},{"id" : "Chirpi", "img" : "..", "color" : "#24f04b"},{"id" : "Fiestagram", "img" : "..", "color" : "#24f04b"},{"id" : "Foodda", "img" : "..", "color" : "#24f04b"},{"id" : "Salon Invoice", "img" : "..", "color" : "#24f04b"},{"id" : "Mission: Debug", "img" : "..", "color" : "#24f04b"},{"id" : "Photag", "img" : "..", "color" : "#FFFFFF"}
                ];
                break;
            case 1:
                this.contentData = [
                  {"id" : "Adobe", "img" : "..", "color" : "#ff0000"}, {"id" : "Disney", "img" : "..", "color" : "#006e99"},{"id" : "Agora", "img" : "..", "color" : "#184C7C"},{"id" : "University of Florida", "img" : "..", "color" : "#24f04b"},{"id" : "Wahi Ride", "img" : "..", "color" : "#61b3ff"},{"id" : "iD Tech", "img" : "..", "color" : "#24f04b"}
                ];
                break;
            default:
                break;
        }
    }

    turn(dir) {
        switch(dir) {
            case 0: this.incr += 1; break;
            case 1: this.incr += -1; break;
            default: break;
        }
        
        var increment = this.incr;
        this.rotation = this.theta * increment * -1;
        this.carouselTransform();
    }

    carouselTransform() {
        this.carousel.style.transform = 'translateZ(-' + this.radius + 'px) ' + this.rotateFn + '(' + this.rotation + 'deg)';
    }
        
    carouselSetUp() {
        
        //set up for carousel js
        var panelCount = this.contentData.length;
        
        this.carousel = document.getElementById('carousel');
        var panelSize = this.carousel.offsetWidth;
        this.rotateFn = 'rotateY';
        this.theta = 360 / panelCount;
        var theta = this.theta;
        // do some trig to figure out how big the carousel
        // is in 3D space
        this.radius = Math.round( ( panelSize / 2) / Math.tan( Math.PI / panelCount ) );
        var radius = this.radius;
        
        var panel, angle, i;
        for ( i = 0; i < panelCount; i++ ) {
            panel = this.carousel.children[i];
            angle = theta * i;
            panel.style.opacity = 1;
            panel.style.backgroundColor = hexToRgb(this.contentData[i].color);
            // rotate panel, then push it out in 3D space
            panel.style.transform = this.rotateFn + '(' + angle + 'deg) translateZ(' + radius + 'px)';
            panel.classList.add('frosted')
        }

        // adjust rotation so panels are always flat
        this.rotation = Math.round( this.rotation / theta ) * theta;
        var rotation = this.rotation;
        this.carouselTransform();
        
        function hexToRgb(hex) {
            var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            var r = parseInt(result[1], 16),
                g = parseInt(result[2], 16),
                b = parseInt(result[3], 16);
            return 'rgba('+ r + ', '+ g + ', ' + b + ', 0.72)';
        }
    }

    ngOnInit() {
        this.visible = false;
        console.log("SELECTOR: " + this.contentSelector);
        
        this.getContentData();
    }

    ngAfterViewInit() {
   }
}