import { Component, Input, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'content-skill',
  templateUrl: './app.content_skill.html',
  styleUrls: ['./app.content_skill.css', './app.content.css'],
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
    @Input() resultList = [];
    @Input() titleData:string;
    inputElement;

    InitSearchInput(sharedInstance){
        
        this.inputElement = document.getElementById("searchInput");
        
        this.inputElement.addEventListener("keyup", function(e) {
            var resultList = sharedInstance.resultList;
            var featureList = sharedInstance.featureList;
            
            //clear result list
            var target = e.target;
            resultList = [];
            console.log(target);
            var input = target.value;
            const keys = Object.keys(featureList);
            
            var ind;
            for(ind in keys) {
                var key = keys[ind].toLowerCase();
                if(key.includes(input.toLowerCase())) {
                    var list = featureList[key];
                    console.log(list);
                    resultList.push.apply(resultList, list);
                    console.log("ADD ME");
                    console.log(resultList.length);
                }
                    
            }
            console.log(resultList);
            console.log(featureList);
        });
    }

    constructor(){}

    ngOnInit() {
    }

    ngAfterViewInit() {
        var sharedInstance = this;
        this.InitSearchInput(sharedInstance);
   }
}