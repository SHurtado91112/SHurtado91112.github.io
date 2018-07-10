import { Component, Input, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';
import * as WheelIndicator from 'wheel-indicator';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'content-skill',
  templateUrl: './app.content_skill.html',
  styleUrls: ['./app.content.css', './app.content_skill.css'],
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

export class ContentSkillComponent implements OnInit, AfterViewInit {
    @Input() featureList = {};
    @Input() highlightList = {};
    @Input() resultList = [];
    @Input() titleData:string;
    resumeLink = "../assets/Steven_Hurtado_Resume.pdf";
    @Input() inputElement:any;
    
    initSearchInput(sharedInstance){
        
        this.inputElement = document.getElementById("searchInput");
        
        this.inputElement.addEventListener("keyup", function(event) {
            var target = event.target;
            
            if ((<KeyboardEvent>event).keyCode === 13) {
                 sharedInstance.activateSpecialInput(target.value);
            }
            
            sharedInstance.searchThis(target.value);
        });    
        
        
        var interv = 0;
        setTimeout(updatePlaceholder, 2240);
        
        function updatePlaceholder() {
            
            if(sharedInstance.inputElement == null)
            {
                return;
            }
           
            if(sharedInstance.inputElement.value == "") {
                sharedInstance.inputElement.classList.add("blur");
            }
            
            setTimeout(function() {  
                if(sharedInstance.inputElement.value == "")
                {
                    sharedInstance.inputElement.placeholder = "Try '" + sharedInstance.highlightList[interv++] + "'";
                }
                
                if(interv >= sharedInstance.highlightList.length)
                {
                    interv = 0;
                } sharedInstance.inputElement.classList.remove("blur");
                setTimeout(updatePlaceholder, 1760);
            }, 480);
        }
    }

    activateSpecialInput(skill) {
        switch(skill.toLowerCase()) {
            case "resume":
                window.open(this.resumeLink);
                break;
            case "music":
                var router = this.router;
                var flash = document.getElementById("loader-flash");
                
                flash.classList.add("active");
                
                setTimeout(function() {
                    router.navigate(['music']);
                    flash.classList.remove("out");
                    flash.classList.remove("active");
                }, 480);
                
                break;
            default:
                break;
        }           
    }

    searchThis(skill) {
        var sharedInstance = this;
        this.inputElement.value = skill;
        
        var resultList = sharedInstance.resultList;
        var featureList = sharedInstance.featureList;

        //clear result list
        resultList = [];
        var input = skill;
        if(input == "")
        {
            sharedInstance.resultList = [];
            return;
        }

        const keys = Object.keys(featureList);

        var ind;
        for(ind in keys) {
            var key = keys[ind];
            if(key.toLowerCase().includes(input.toLowerCase())) {
                var list = featureList[key];
                resultList.push.apply(resultList, list);
            }
        }

        sharedInstance.resultList = resultList;
    }

    setUpSearchWall(self)
    {
        
    }

    constructor(private route:ActivatedRoute,private router:Router) { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        var sharedInstance = this;
        this.initSearchInput(sharedInstance);
        this.setUpSearchWall(sharedInstance);
   }
}