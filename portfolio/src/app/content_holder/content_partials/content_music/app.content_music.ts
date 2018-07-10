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
    @Input() musicList = [{
        "title" : "Legal Drink", 
        "sub" : "Out on Soundcloud.", 
        "link" : "../../../../assets/legaldrink_sample.m4a"
    },{
        "title" : "Venting", 
        "sub" : "Coming out soon.", 
        "link" : "../../../../assets/venting_sample.m4a"
    },{
        "title" : "Break Out Of It", 
        "sub" : "Out on Soundcloud.", 
        "link" : "../../../../assets/breakout_sample.m4a"
    },{
        "title" : "First Thing On My Mind (You Are)", 
        "sub" : "Out on Soundcloud.", 
        "link" : "../../../../assets/firstthing_sample.m4a"
    }];
    @Input() initMusic = true;
    @Input() currentIndex = 0;
    @Input() context:any;
    @Input() src:any;
    
    toggleMusic(start) {
        var startMusic = document.getElementById("start-music");
        var stopMusic = document.getElementById("stop-music");
        if(start) {
            startMusic.style.display = "none";
            stopMusic.style.display = "block";
            this.playCurrentSelected();
        }
        else {
            startMusic.style.display = "block";
            stopMusic.style.display = "none";
            this.pauseCurrentSelected();
        }
    }
    
    endOfAudio() {
        this.currentIndex++;
        if(this.currentIndex >= this.musicList.length) {
            this.currentIndex = 0;
        }
        this.playWithSelected(this.currentIndex, this.musicList[this.currentIndex]['link']);
    }
    
    playCurrentSelected() {
        if(this.initMusic) {
            this.initMusic = false;
            var sharedInstance = this;
            setTimeout(function() {
                sharedInstance.playWithSelected(
                0,
                sharedInstance.musicList[0]['link']
            );
            }, 480);
            document.getElementById("canvas").classList.add("initted");
             document.getElementById("sound-list").classList.add("initted");
            document.getElementById("music-footer").classList.add("initted");
        }
           
        var audio = document.getElementById("audio");
        audio.play();
    }
    pauseCurrentSelected() {
        var audio = document.getElementById("audio");
        audio.pause();
    }
    playWithSelected(ind, link) {
        var startMusic = document.getElementById("start-music");
        var stopMusic = document.getElementById("stop-music");
        
        startMusic.style.display = "none";
        stopMusic.style.display = "block";
        this.playCurrentSelected();
        
        this.currentIndex = ind;
        document.querySelectorAll('.grid-link').forEach(function(elem) {
            elem.classList.remove("selected");
        });
        document.getElementsByClassName("grid-link")[ind].classList.add("selected");
        
        var audio = document.getElementById("audio");
        audio.src = link;  
        audio.play();
    }

    constructor(){}

    ngOnInit() {
    }

    ngAfterViewInit() {
        var sharedInstance = this;
        var audio = document.getElementById("audio");
        
        var context = new AudioContext();
        var src = context.createMediaElementSource(audio);

        var analyser = context.createAnalyser();

        var canvas = document.getElementById("canvas");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        var ctx = canvas.getContext("2d");

        src.connect(analyser);
        analyser.connect(context.destination);

        analyser.fftSize = 256;

        var bufferLength = analyser.frequencyBinCount;
        console.log(bufferLength);

        var dataArray = new Uint8Array(bufferLength);

        var WIDTH = canvas.width;
        var HEIGHT = canvas.height;

        var barWidth = (WIDTH / bufferLength) * 2.5;
        var barHeight;
        var x = 0;

        function renderFrame() {
          requestAnimationFrame(renderFrame);

          x = 0;

          analyser.getByteFrequencyData(dataArray);

          ctx.fillStyle = "#000";
          ctx.fillRect(0, 0, WIDTH, HEIGHT);

          for (var i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i];

            var r = barHeight + (25 * (i/bufferLength));
            var g = 250 * (i/bufferLength);
            var b = 50;

            ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
            ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

            x += barWidth + 1;
          }
        }

        renderFrame();

        audio.addEventListener("ended", function(){
             audio.currentTime = 0;
             sharedInstance.endOfAudio();
        });
   }
}