import { Component, Input, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
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
    @Input() contentData = [];
    @ViewChild('carouselContent') carouselContent;

    // carousel attributes
    carousel;
    carouselTarget;
    incr = 0;
    rotation = 0;
    rotateFn = 'rotateY';
    theta = 0;
    radius = 0;

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        console.log("RESIZING");
//        this.scrollClear(this.referenceInstance);
//        this.scrollSetUp(this.referenceInstance);
        if(this.carouselTarget != null) {
            this.carouselSetUp(this.carouselTarget);
        }
    }

    enter() {
        this.visible = true;
    }
    leave() {
        this.visible = false;
    }

    trackData(index, cont) {
        return cont.id;
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

    carouselSwipeSetUp() {
        //BY TOUCH
        var sharedInstance = this;
        var lastTouch;
        this.carousel.addEventListener("touchstart", function(e) {
            lastTouch = e.touches[0];
        });

        this.carousel.addEventListener("touchend", function(e) {

          var touch = e.changedTouches[0];
          
          if (touch.clientX < lastTouch.clientX) {
            //right
              console.log("right");
              sharedInstance.turn(0);
          }  
          else if (touch.clientX > lastTouch.clientX) {
            //left
              console.log("left");
              sharedInstance.turn(1);
          }
          else {
              //ignore
              console.log("OTHER");
          }
          lastTouch = touch;
        });
    }
        
    carouselSetUp(target) {
        
        //set up for carousel js
        var panelCount = this.contentData.length;
        this.carouselTarget = target;
        this.carousel = target.querySelector("#carousel");
        //document.getElementById('carousel');
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
            //panel.style.backgroundColor = hexToRgb(this.contentData[i].color);
            // rotate panel, then push it out in 3D space
            panel.style.transform = this.rotateFn + '(' + angle + 'deg) translateZ(' + radius + 'px)';
            panel.classList.add('frosted')
        }

        // adjust rotation so panels are always flat
        this.rotation = Math.round( this.rotation / theta ) * theta;
        var rotation = this.rotation;
        this.carouselTransform();
        this.carouselSwipeSetUp();
    }

    constructor(){}

    ngOnInit() {
        this.visible = false;
        
        //this.getContentData();
    }

    ngAfterViewInit() {
        //listener and set up for enter detection of content
        var config = { attributes: true };
        var sharedInstance = this;
        // Callback function to execute when mutations are observed
        var callback = function(mutationsList) {
            for(var mutation of mutationsList) {
                if (mutation.type == 'attributes') {
                    console.log('The ' + mutation.attributeName + ' attribute was modified.');
                    if(mutation.attributeName == 'style')
                        {
                            sharedInstance.carouselSetUp(mutation.target);    
//                            console.log("MUTANT");
//                            console.log(mutation.target);
//                            console.log(mutation.target);
                        }
                        
                }
            }
        };
        
        var elementInstance = this.carouselContent.nativeElement;
          
        var carouselView =
        Array.from(document.getElementsByClassName("content-container")); 
        carouselView.forEach((element) => {
           var elem = <HTMLElement>element;
            console.log("HOIIIYA");
            console.log(elem);
            
            if(isDescendant(elem, elementInstance))
            {
                console.log("isMEEE");
                // Create an observer instance linked to the callback function
                var observer = new MutationObserver(callback);
                // Start observing the target node for configured mutations
                console.log("NATIVE ELEMENT TO OBSERVE");
                console.log(elementInstance);
                observer.observe(elem, config);
            }
            
        });

        function isDescendant(parent, child) {
             var node = child.parentNode;
             while (node != null) {
                 if (node == parent) {
                     return true;
                 }
                 node = node.parentNode;
             }
             return false;
        }
        
   }
}