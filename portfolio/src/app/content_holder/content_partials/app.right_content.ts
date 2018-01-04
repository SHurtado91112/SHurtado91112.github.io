import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';

@Component({
  selector: 'right-content',
  templateUrl: './app.right_content.html',
  styleUrls: ['./app.content.css'],
  animations: [
  ],
  host: {
//    '(window:resize)': 'onResize($event)'
  }
})

export class RightComponent implements OnInit, AfterViewInit {
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