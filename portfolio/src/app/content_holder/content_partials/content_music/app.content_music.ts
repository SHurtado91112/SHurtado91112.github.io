import { Component, Input, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';
import * as WheelIndicator from 'wheel-indicator';

@Component({
  selector: 'content-music',
  templateUrl: './app.content_music.html',
  styleUrls: ['./app.content_music.css'],
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

export class ContentMusicComponent implements OnInit, AfterViewInit {
    @Input() featureList = {};
    @Input() titleData:string;

    constructor(){}

    ngOnInit() {
    }

    ngAfterViewInit() {
        var sharedInstance = this;
   }
}