<template>
    <div class="main-menu">
        <!--    HOME          -->
        <div class="card" :class="{selected: card.selected}" v-for="card in cards" v-if="homeVisible" v-on:click="show(card)">
            {{card.title}}
        </div>
        <!--    PROJECTS      -->
        <Grid v-if="showProjects" :cards=projectCards />
        <!--    EXPERIENCE    -->
        <Grid v-if="showExperience" :cards=experienceCards />
        <!--    MUSIC         -->
<!--        <Grid v-if="showProjects"/>-->
        <!--    RESUME        -->
<!--        <PDFViewer v-if="showProjects"/>-->
    </div>
</template>

<script>
import Grid from '../components/Grid'
import JQuery from 'jquery'

let $ = JQuery

export default {
  name: 'MainMenu',
  components: {
    Grid
  },
  methods: {
      windowResized: function() {
          var navBar = $('.navbar');
          var position = navBar.position().top + navBar.height() + 16; // 16 for padding
          $('.main-menu').css({top: position});
      },
      show: function (card) {
          
          var cardTitle = card.title;
          for (var i=0; i < this.cards.count; i++) {
              var c = this.cards[i];
              c.selected = false;
              this.cards[i] = c;
          }
          card.selected = true;
          
          var mainMenu = this;
          var mainMenuEl = $('.main-menu');
          mainMenuEl.addClass('active');
          console.log(card);
          
          setTimeout(function() {
//              mainMenu.$parent.showHome = false;
              switch(cardTitle) {
                  case "projects":
                      mainMenu.showProjects = true;
                      break
                  case "experience":
                      mainMenu.showExperience = true;
                      break
                  default:
                      break
              }
              setTimeout(function() {
                  mainMenuEl.css('opacity', 1.0);
              }, 50);
          }, 400);
      },
      hide: function () {
          var mainMenu = this;
          var mainMenuEl = $('.main-menu');
          mainMenu.showProjects = false;
          mainMenu.showExperience = false;
          mainMenu.showMusic = false;
          mainMenu.showResume = false;
      },
  },
  props : {
      homeVisible : Boolean
  },
  data () {
    return {
        showProjects : false,
        showExperience : false,
        showMusic : false,
        showResume : false,
        cards : [
            {
                title: "projects",
                selected: false
            },
            {
                title: "experience",
                selected: false
            },
            {
                title: "music",
                selected: false
            },
            {
                title: "resume",
                selected: false
            },
        ],
        projectCards : [
            {
                title: "miya",
                img: require('../assets/miya.jpeg')
            },
            {
                title: "zippyContact",
                img: require('../assets/zippy.png')
            },
            {
                title: "autowise",
                img: require('../assets/autowise.png')
            },
            {
                title: "langua",
                img: require('../assets/langua.png')
            },
            {
                title: "miya",
                img: require('../assets/miya.jpeg')
            },
            {
                title: "chirpi",
                img: require('../assets/chirpi.png')
            },
            {
                title: "fiestagram",
                img: require('../assets/fiesta.png')
            },
        ],
        experienceCards : [
            {
                title: "zippyContact",
                img: require('../assets/zippy.png')
            },
            {
                title: "autowise",
                img: require('../assets/autowise.png')
            },
            {
                title: "autowise",
                img: require('../assets/autowise.png')
            },
            {
                title: "langua",
                img: require('../assets/langua.png')
            },
            {
                title: "miya",
                img: require('../assets/miya.jpeg')
            },
            {
                title: "chirpi",
                img: require('../assets/chirpi.png')
            },
            {
                title: "fiestagram",
                img: require('../assets/fiesta.png')
            },
        ],
    }
  },
  watch: {
      homeVisible: function(val) {
        if(val) {
            this.hide();
        }
      } 
  },
  mounted: function() {
      window.addEventListener('resize', this.windowResized);
      this.windowResized();
  }
}
</script>

<style>
    .main-menu {
        z-index: 0;
        position: absolute;
        top: 8vh;
        left: 0;
        bottom: 0;
        padding: 16px;
        overflow: hidden;

        transition: all 0.4s ease;
        
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    
    .card {
        z-index: 1;
        color: #0A0908;
        padding: 1%;
        opacity: 1.0;
        cursor: pointer;
        transition: all 0.4s ease, color 0.1s ease;
    }
    
    .card.selected {
        opacity: 0.5;
    }
    
    .main-menu .card:hover {
        padding: 1%;        
        opacity: 0.5;
    }
    
    .card .border-container {
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 100%;
        height: 100%;
        
        transition: all 0.2s ease;
    }
    
    .card:hover .border-container {
        z-index: 2;
    }
    
    @media screen and (min-width: 540px) {
        
    }
    
    @media screen and (max-width: 540px) {
        .main-menu {
            font-size: 32px;
        }
    }
    
</style>