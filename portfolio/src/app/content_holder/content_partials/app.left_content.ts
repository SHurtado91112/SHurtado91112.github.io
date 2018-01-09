import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'left-content',
  templateUrl: './app.left_content.html',
  styleUrls: ['./app.content.css'],
  animations: [
  ],
  host: {
//    '(window:resize)': 'onResize($event)'
  }
})

export class LeftComponent implements OnInit, AfterViewInit {
    public visible:boolean;

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