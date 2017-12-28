import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './app.content_holder.html',
  styleUrls: ['./app.content_holder.css'],
  host: {
//    '(window:resize)': 'onResize($event)'
  }
})
export class ContentComponent implements OnInit, AfterViewInit {

    title = "Content"
    links = "Links Links Links Links"
    left_title = "Experience"
    right_title = "Portfolio"

    ngOnInit() {
        console.log("INITED")
    }

    ngAfterViewInit() {        
    }
}