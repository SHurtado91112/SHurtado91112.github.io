import { Component, Input, OnInit, AfterViewInit, ViewChild, HostListener } from '@angular/core';
import {style, state, animate, transition, trigger} from '@angular/core';
import {DetailService} from '../../../app.detail_service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'content-detail',
  templateUrl: './app.content_detail.html',
  styleUrls: ['./app.content_detail.css'],
  host: {
//    '(window:resize)': 'onResize($event)'
  }
})

export class ContentDetailComponent implements OnInit, AfterViewInit {
    @Input() currentItem = {};
    @Input() sections = [];
    @Input() section = 0;
    @Input() index = 0;
    @Input() titleData:string;

    constructor(public detailService: DetailService, private route:ActivatedRoute,private router:Router) { }
    
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.section = params['id'];
            this.index = params['ind'];
        });
        
        if(!this.detailService || !this.detailService.content || this.index >= this.detailService.content.length)
        {
            this.router.navigate(['home']);
        }
        
        this.sections = this.detailService.content;
        console.log(this.sections);
        
        this.currentItem = this.sections[this.section]['items'][this.index];
        console.log(this.currentItem);
    }

    ngAfterViewInit() {
        var sharedInstance = this;
   }
}