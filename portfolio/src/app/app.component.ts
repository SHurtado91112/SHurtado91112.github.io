import { Component, Input, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
//    '(window:resize)': 'onResize($event)'
  }
})

export class AppComponent implements OnInit, AfterViewInit {
    title = 'Steven Hurtado';
    subtitle1 = 'Developer. Musician. ';
    subtitle2 = 'Hokage.';

    public titleBool:boolean;
    public returnSwitchAnimation:boolean;
    public referenceInstance:AppComponent;

    resumeLink = "../assets/Steven_Hurtado_Resume.pdf"
    intro_links = [
        {"src":"../assets/email-icon-resource.svg","src2":"../assets/email-icon-resource-hov.svg",
        "link":"https://www.google.com", "bg":"#323232","title":"Email Me"},{"src":"../assets/linked-resource.svg","src2":"../assets/linked-resource-hov.svg","bg":"#cbcbcb",
        "link":"https://www.linkedin.com/in/steven-hurtado","title":"LinkedIn"},{"src":"../assets/git-resource.svg","src2":"../assets/git-resource-hov.svg",
        "link":"https://www.github.com/SHurtado91112", "bg":"#cbcbcb","title":"GitHub"},{"src":"../assets/sound-resource.svg","src2":"../assets/sound-resource-hov.svg",
        "link":"https://www.soundcloud.com/steveshidae", "bg":"#323232","title":"SoundCloud"}
    ];

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if(this.titleBool) {
            return
        }
        var l1 = document.getElementById('l1');
        var l2 = document.getElementById('l2');
        l1.style.top = '';
        l2.style.top = '';
        l1.style.left = '';
        l2.style.left = '';
        this.ngAfterViewInit();
    }

    goTo(link) {
        console.log("GO TO: " + link);
        window.open(link, "_blank");
    }

    titleSwitch = function() {  
        var c1 = document.getElementById ( 'l1' ),
        c2 = document.getElementById ( 'l2' ), 
        c3 = document.getElementById( 'nav-btn' ),
        c4 = c3.getElementsByClassName( 'img' )[0],
        c5 = document.getElementsByClassName( 'title-container' )[0];
        
        this.titleBool = !this.titleBool;
        if(!this.titleBool) {
            c1.classList.remove('switched');
            c2.classList.remove('switched');
            c3.classList.remove('switched');
            c4.classList.remove('switched');
            c5.classList.remove('switched');
            setTimeout(()=>{
                this.ngAfterViewInit();
                this.returnSwitchAnimation = false;
            },840);
        }
        else {
            c1.style.top = '';
            c1.style.left = '';
            c2.style.top = '';
            c2.style.left = '';

            c1.classList.add('switched');
            c2.classList.add('switched');
            c3.classList.add('switched');
            c4.classList.add('switched');
            c5.classList.add('switched');
            this.returnSwitchAnimation = true;
        }
        
    };

    ngOnInit() {
        console.log("PARENT INITED");
        this.titleBool = false;
        this.returnSwitchAnimation = false;
        this.referenceInstance = this;
    }

    ngAfterViewInit() {
        var stop = false
        setTimeout(()=>{
            stop = true
        }, 10000);
        var self = this.referenceInstance;
        var parallaxBox = document.getElementById ( 'box' );
        var c1left = document.getElementById ( 'l1' ).offsetLeft,
        c1top = document.getElementById ( 'l1' ).offsetTop,
        c2left = document.getElementById ( 'l2' ).offsetLeft,
        c2top = document.getElementById ( 'l2' ).offsetTop;
        var c6 = document.getElementById('background'), c6Top = c6.offsetTop, c6Left = c6.offsetLeft;
        parallaxBox.addEventListener('mousemove', function ( event ) {
            
            if(self.titleBool) {
//                var l1 = document.getElementById('l1');
//                var l2 = document.getElementById('l2');
//                l1.style.top = '42px';
//                l2.style.top = '84px';
                return
            }
            var x = event.clientX - parallaxBox.offsetLeft,
            y = event.clientY - parallaxBox.offsetTop;

            mouseParallax ( 'l1', c1left, c1top, x, y, 18 );
            mouseParallax ( 'l2', c2left, c2top, x, y, 12 );
            mouseParallax( 'background' , c6Top, c6Left, x, y, -48 );
        })

        function mouseParallax (id, left, top, mouseX, mouseY, speed ) {
            if(mobilecheck()) {
               return
            }
            
            if(self.returnSwitchAnimation) {
                return
            }
            
            var obj = document.getElementById ( id );
            
            var parentObj = parallaxBox;
            
            var containerWidth = parseInt( parentObj.offsetWidth.toString() ),
            containerHeight = parseInt( parentObj.offsetHeight.toString() );
            
            obj.style.left = left - ( ( ( mouseX - ( parseInt( obj.offsetWidth.toString() ) / 2 + left ) ) / containerWidth ) * speed ) + 'px';
        
            obj.style.top = top - ( ( ( mouseY - ( parseInt( obj.offsetHeight.toString() ) / 2 + top ) ) / containerHeight ) * speed ) + 'px';
        }
        
        //mobile check
        function mobilecheck() {
          var check = false;
          (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor);
          return check;
        };
        document.getElementsByClassName('back-container')[0].classList.add('visible');
        document.getElementsByClassName('background')[0].classList.add('visible');
        parallaxBox.classList.add('visible');
        document.getElementById ( 'nav-btn' ).classList.add('visible');
    }
}