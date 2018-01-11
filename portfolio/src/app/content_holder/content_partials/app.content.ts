import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './app.content.html',
  styleUrls: ['./app.content.css'],
  animations: [
  ],
  host: {
//    '(window:resize)': 'onResize($event)'
  }
})

export class ContentComponent implements OnInit, AfterViewInit {
    public visible:boolean;
    @Input() contentSelector: string;

    enter() {
        this.visible = true;
    }
    leave() {
        this.visible = false;
    }
    ngOnInit() {
        this.visible = false;
    }
    ngAfterViewInit() {
   }
}