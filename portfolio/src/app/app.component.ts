import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    title = 'Steven Hurtado';
    subtitle1 = 'Developer. Musician. '
    subtitle2 = 'Hokage.'

    ngAfterViewInit() {
        var parallaxBox = document.getElementById ( 'box' );
        console.log(parallaxBox);
        var c1left = document.getElementById ( 'l1' ).offsetLeft,
        c1top = document.getElementById ( 'l1' ).offsetTop,
        c2left = document.getElementById ( 'l2' ).offsetLeft,
        c2top = document.getElementById ( 'l2' ).offsetTop;
        parallaxBox.addEventListener('mousemove', function ( event ) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
            y = event.clientY - parallaxBox.offsetTop;

            mouseParallax ( 'l1', c1left, c1top, x, y, 14 );
            mouseParallax ( 'l2', c2left, c2top, x, y, 6 );
        })

        function mouseParallax ( id, left, top, mouseX, mouseY, speed ) {
            var obj = document.getElementById ( id );
            var parentObj = obj.parentNode,
            containerWidth = parseInt( parentObj.offsetWidth ),
            containerHeight = parseInt( parentObj.offsetHeight );
            obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
            obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
        }
        
        parallaxBox.classList.add('visible');
    }
}