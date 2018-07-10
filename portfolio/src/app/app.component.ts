import { Component, Input, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';
import {DetailService} from './app.detail_service';

import {style, state, animate, keyframes, transition, trigger} from '@angular/core';
import * as WheelIndicator from 'wheel-indicator';
declare var jquery:any;
declare var $ :any;
//declare var WheelIndicator:any;
@Component({
  selector: 'app-home',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
    animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [   // :enter is alias to 'void => *'
          style({opacity:0}),
          animate(840, style({opacity: 1})) 
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
          animate(840, style({opacity:0})) 
        ])
      ]),
    trigger(
      'enterAnimationLonger', [
        transition(':enter', [   // :enter is alias to 'void => *'
          style({opacity:0}),
          animate(3680, keyframes([
              style({ opacity: 0, offset: 0 }),
              style({ opacity: 0, offset: 0.9 }),
              style({ opacity: 0.48, offset: 1 })
          ])) 
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
          animate(3680, style({opacity:0})) 
        ])
      ]),
    trigger(
      'enterAnimationLong', [
        transition(':enter', [   // :enter is alias to 'void => *'
          style({opacity:0}),
          animate(3680, keyframes([
              style({ opacity: 0, offset: 0 }),
              style({ opacity: 0, offset: 0.6 }),
              style({ opacity: 1, offset: 1 })
          ])) 
        ]),
        transition(':leave', [   // :leave is alias to '* => void'
          animate(3680, style({opacity:0})) 
        ])
      ]) 
  ],
  host: {
//    '(window:resize)': 'onResize($event)'
  }
})

export class AppComponent implements OnInit, AfterViewInit {
    title = 'Steven Hurtado';
    subtitle1 = 'Student.';
    subtitle2 = 'Developer.';
    subtitle3 = 'Musician.';
    
    public titleBool:boolean;
    public stop:boolean = true;
    public instantiated:boolean = false;
    public ws:any;
    public nav_opened:boolean = false;
    public returnSwitchAnimation:boolean;
    public referenceInstance:AppComponent;

    pages = [ {"name" : "Home", "icon" : "../assets/home.png"}, {"name" : "Portfolio", "icon" : "../assets/portfolio.png"}, {"name" : "Experience", "icon" : "../assets/experience.png"}, {"name" : "Skills", "icon" : "../assets/skills.png"}]

    displayerInd = 0;
    activateInd = 0;
    resumeLink = "../assets/Steven_Hurtado_Resume.pdf"
    content_images = [
        [
            {"src" : "../assets/displayer/student/gbm.jpg",
            "alt" : "GBM - ACM VP of Prof. Affairs", "settings" : {"size" : "120%", "position" : "center"}}
        ],
        [{"src" : "../assets/displayer/developer/mission.mp4", "settings" : {"height" : "130%"}},{"src" : "../assets/displayer/developer/miya.mp4", "settings" : {"height" : "130%"}}],
        [{"src" : ".ttps://www.youtube.com/embed/sFftFqjVuZY", "settings" : {"height" : "100%%"}}]
    ];
    intro_links = [
        {"src":"../assets/email.png","src2":"../assets/email-icon-resource-hov.svg",
        "link":"https://www.google.com", "bg":"#323232","title":"Email Me"},{"src":"../assets/linkedin.png","src2":"../assets/linked-resource-hov.svg","bg":"#cbcbcb",
        "link":"https://www.linkedin.com/in/steven-hurtado","title":"LinkedIn"},{"src":"../assets/github.png","src2":"../assets/git-resource-hov.svg",
        "link":"https://www.github.com/SHurtado91112", "bg":"#cbcbcb","title":"GitHub"},{"src":"../assets/soundcloud.png","src2":"../assets/sound-resource-hov.svg",
        "link":"https://www.soundcloud.com/steveshidae", "bg":"#323232","title":"SoundCloud"}
    ];

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if(window.innerWidth <= 400 ) {
            var el = document.getElementById("nav-overlay");
            el.classList.remove("show");
        }
    }
    @HostListener('scroll', ['$event']) private onScroll($event:Event):void {
        console.log($event.srcElement.scrollLeft, $event.srcElement.scrollTop);
    };

    selectSubtitle(event, ind) {
        var target = event.target || event.srcElement || event.currentTarget;
        
        var alreadySelected = Array.from(document.getElementsByClassName("selected"));

        alreadySelected.forEach((element) => {    
            element.classList.remove("selected");
        });
        
        target.classList.add("selected");
        
        //for carousel data
        this.displayerInd = ind;
    }

    IsEmbedded(image) {
        let endOf = image.src.substring(image.src.length - 3);
        return !(endOf == "mp4");
    }

    IsVideo(image) {
        let endOf = image.src.substring(image.src.length - 3);
        return !(endOf == "jpg");
    }

    getVideoStyles(image) {
        return {'width' : '100%', 'height' : image.settings.height};
    }

    getStyles(image) {
        return {'background-image': 'url(' + image.src + ')',
                   'background-size': image.settings.size, 
                'background-position' : image.settings.position, 'background-repeat': 'no-repeat', 'background-color': '#323232'};
    }

    getProfPic() {
        return {'background-image': "../assets/prof.jpg"};
    }

    goTo(link) {
        window.open(link, "_blank");
    }

    ngOnInit() {
        this.referenceInstance = this;
    }

    updateNavigation(dir) {
        var navItems = Array.from(document.getElementsByClassName("nav-item"));
        
        var selected = document.getElementsByClassName("selected")[0];
        if(selected == null) {
            return;
        }
        selected.classList.remove("selected");
        
        var indPrime = navItems.indexOf(selected);
        var index = 0;
        if(dir > 0) index = indPrime+1;
        else
            index = indPrime-1;
        
        if(index < 0) index = navItems.length-1;
        else if(index >= navItems.length)
            index = 0;
        
         var setTo = document.getElementsByClassName("nav-item")[index];     setTo.classList.add("selected");
    }
    scrollUp() {
        if(this.stop)
        {
            return;    
        }
        var self = this.referenceInstance;
        
        console.log('scrolling up');
        var scrollSections = Array.from(document.getElementsByClassName("scroll-sec"));
        scrollSections.forEach((element, index)=> {           
            var elem = <HTMLElement>element;
            //reshuffle
            elem.style.top = parseInt(elem.style.top) + 100 +"%";
            if(parseInt(elem.style.top) > 99 *(scrollSections.length-1)) {
                elem.style.top = -100 + "%";
            }
            
            //visibility check
            if(parseInt(elem.style.top) == 0) 
            {
                elem.classList.add("inwindow");
                
                console.log(elem);
                var child = <HTMLElement>elem.getElementsByTagName("content-skill")[0];
                if(child != null) {
                    console.log("child exists: " + child);
                    //add focus to searchInput
                    setTimeout( function() {
                       (<HTMLInputElement>document.getElementById("searchInput")).focus();
                    }, 480); 
                }
            }
            else 
            {
                elem.classList.remove("inwindow");
            }
            
        });
        this.updateNavigation(-1);
    }
    scrollDown() {
        if(this.stop)
        {
            return;    
        }
        var self = this.referenceInstance;
        
        console.log('scrolling down');
        var scrollSections = Array.from(document.getElementsByClassName("scroll-sec"));
        scrollSections.forEach((element, index)=> {
            var elem = <HTMLElement>element;
            console.log(elem);
            //shuffle
            elem.style.top = parseInt(elem.style.top) - 100 +"%";
            if(parseInt(elem.style.top) < -100) {
                elem.style.top = 100 * (scrollSections.length-2) + "%";
            }
            
            //visibility check
            if(parseInt(elem.style.top) == 0) 
            {
                elem.classList.add("inwindow");
                var child = <HTMLElement>elem.getElementsByTagName("content-skill")[0];
                if(child != null) {
                    console.log("child exists: " + child);
                    //add focus to searchInput
                   setTimeout( function() {
                       (<HTMLInputElement>document.getElementById("searchInput")).focus();
                   }, 480); 
                }
            }
            else 
            {
                elem.classList.remove("inwindow");
            }
        });
        this.updateNavigation(1);
    }

    GoToSelected(ind, indP, sharedInstance) {
        var delta = ind - indP;
        for(var i = 0; i < Math.abs(delta); i++)
        {
            if(delta < 0) {
                sharedInstance.scrollUp();
            }
            else {
                sharedInstance.scrollDown();
            }
        }
    }
    
    scrollSetUp(sharedInstance) {
        
        var scrollSections = Array.from(document.getElementsByClassName("scroll-sec"));
        scrollSections.forEach((element, index)=> {
            var elem = <HTMLElement>element;

            if(index*100 == 0) 
            {
               elem.classList.add("inwindow");
            } 
            else 
            {
               elem.classList.remove("inwindow");
            }
                
            
            elem.style.top = (index * 100)+"%";
            
            //reshuffle sections
            if(parseInt(elem.style.top) > 99 *(scrollSections.length-1)) {
                elem.style.top = -100 + "%";
            }
        });
        
        //BY TOUCH
        var lastTouch;
        if(!sharedInstance.instantiated)
        {
            document.getElementsByClassName("loop")[0].addEventListener("touchstart", TouchStart);
                                                                       
            document.getElementsByClassName("loop")[0].addEventListener("touchend", TouchEnd);         
            
            //BY SWIPE (WEB)
            //var WheelSwipe = require('wheel-swipe');
            
            sharedInstance.ws = new WheelIndicator({
                elem: window,
                callback: function(e) {
                    switch(e.direction) {
                        case "up":
                            sharedInstance.scrollUp();
                            break;
                        case "down":
                            sharedInstance.scrollDown();
                            break;
                    }     
                }
            });

            //nav functionality
            var navItems = Array.from(document.getElementsByClassName("nav-item"));
            navItems.forEach((element, index) => {
                element.addEventListener("click", function() {
                       var selected = document.getElementsByClassName("selected")[0];
                       var indPrime = navItems.indexOf(selected);
                        sharedInstance.GoToSelected(index, indPrime, sharedInstance);
                   });
            });
            sharedInstance.instantiated = true;
        }

        function TouchStart(e) {
            lastTouch = e.touches[0];
        }
        
        function TouchEnd(e) {

          var touch = e.changedTouches[0];
          var threshold = 20; 
          var deltaY = Math.abs(touch.clientY - lastTouch.clientY);
          var deltaX = Math.abs(touch.clientX - lastTouch.clientX);
            
          if (touch.clientY > lastTouch.clientY && deltaY > threshold && deltaY > deltaX) {
            sharedInstance.scrollUp();
          }
          else if (touch.clientY < lastTouch.clientY && deltaY > threshold && deltaY > deltaX) {
            sharedInstance.scrollDown();
          }
          lastTouch = touch;
        }
        
        //mobile check
        function mobilecheck() {
          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
          return check;
        };
    }

    ToggleNav() {
        var target = document.getElementById("nav-toggle");
        var navoverlay = document.getElementById("nav-overlay");
        this.nav_opened = !this.nav_opened;
        if(this.nav_opened) {
            navoverlay.classList.add("open");
            target.classList.add("open");
        }
        else {
            navoverlay.classList.remove("open");
            target.classList.remove("open");
        }
    }


    constructor(router:Router) {
      router.events.forEach((event) => {
        if(event instanceof NavigationEnd) {
            if(this.ws) {
                this.ws.destroy();
            }
        }
        // NavigationStart
        // NavigationEnd
        // NavigationCancel
        // NavigationError
        // RoutesRecognized
      });
    }

    ngAfterViewInit() {
        var self = this.referenceInstance;
        setTimeout(()=>{
           
           var awaited = Array.from(document.getElementsByClassName("await")); 
            awaited.forEach((element) => {
               element.classList.add("enter"); 
            });
            
            var awaited = Array.from(document.getElementsByClassName("scroll-sec")); 
            awaited.forEach((element) => {
               element.classList.add("enter"); 
            });
            
            setTimeout(()=>{
                self.stop = false;
            }, 840);
        }, 840);
        
        this.scrollSetUp(self);    
        
        //window check to present navoverlay intro
        if(window.innerWidth > 400 ) {
            var el = document.getElementById("nav-overlay");
            el.classList.add("show");
        }
    }
}