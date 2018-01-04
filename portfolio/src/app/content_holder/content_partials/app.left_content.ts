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
        var c1 = document.getElementById ( 'l1' ),
        c2 = document.getElementById ( 'l2' ), 
        c3 = document.getElementById( 'nav-btn' ),
        c4 = c3.getElementsByClassName( 'img' )[0],
        c5 = document.getElementsByClassName( 'title-container' )[0];
        var c6 = document.getElementById('right_content');
//        c1.classList.add('perspect');
//        c2.classList.add('perspect');
//        c3.classList.add('perspect');
//        c4.classList.add('perspect');
        c6.classList.add('perspect');
    }
    leave() {
        this.visible = false;
        var c1 = document.getElementById ( 'l1' ),
        c2 = document.getElementById ( 'l2' ), 
        c3 = document.getElementById( 'nav-btn' ),
        c4 = c3.getElementsByClassName( 'img' )[0],
        c5 = document.getElementsByClassName( 'title-container' )[0];
        var c6 = document.getElementById('right_content');
//        c1.classList.remove('perspect');
//        c2.classList.remove('perspect');
//        c3.classList.remove('perspect');
//        c4.classList.remove('perspect');
//        c5.classList.remove('perspect');
        c6.classList.remove('perspect');
    }
    ngOnInit() {
        this.visible = false;
    }
    ngAfterViewInit() {
        
    }
}