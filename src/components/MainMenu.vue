<template>
    <div class="main-menu">
        <!--    HOME          -->
        <div class="card" v-for="card in cards" v-if="homeVisible">
            <div class="border-container" v-on:click="show(card.title)">
                <font-awesome-icon :icon="card.icon" size="3x" />
            </div>
<!--            :style="{background: card.color}"-->
<!--            {{card.title}}    -->
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
      show: function (cardTitle) {
          var mainMenu = this;
          var mainMenuEl = $('.main-menu');
          mainMenuEl.css('opacity', 0.0);
          setTimeout(function() {
              mainMenu.$parent.showHome = false;
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
          setTimeout(function() {
              mainMenuEl.css('opacity', 1.0);
              mainMenu.addListener();
          }, 50);
      },
      addListener: function () {
          var cards = $('.card')
          console.log(cards);
          cards.hover(function() {
              var siblings = $(this).siblings();    
              //enter
              switch(cards.index($(this)))
              {
                case 0:
                case 1:
                    siblings.eq(0).addClass('hover-shrink-width');
                    siblings.eq(1).addClass('hover-shrink-height');
                    siblings.eq(2).addClass('hover-shrink-height');
                    break
                default:
                    siblings.eq(0).addClass('hover-shrink-height');
                    siblings.eq(1).addClass('hover-shrink-height');
                    siblings.eq(2).addClass('hover-shrink-width');
                    break
              }

          }, function(el) {
              //leave
              var siblings = $(this).siblings();
              //enter
              switch(cards.index($(this)))
              {
                case 0:
                case 1:
                    siblings.eq(0).removeClass('hover-shrink-width');
                    siblings.eq(1).removeClass('hover-shrink-height');
                    siblings.eq(2).removeClass('hover-shrink-height');
                    break
                default:
                    siblings.eq(0).removeClass('hover-shrink-height');
                    siblings.eq(1).removeClass('hover-shrink-height');
                    siblings.eq(2).removeClass('hover-shrink-width');
                    break
              }
          })
      }
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
                icon: "folder",
                color: "#6C0D11",
                highlight: "#F36E73"
            },
            {
                title: "experience",
                icon: "briefcase",
                color: "#971217",
                highlight: "#F36E73"
            },
            {
                title: "music",
                icon: "music",
                color: "#C2171E",
                highlight: "#F36E73"
            },
            {
                title: "resume",
                icon: "file-code",
                color: "#ED1C24",
                highlight: "#F36E73"
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
      this.addListener();
  }
}
</script>

<style>
    .main-menu {
        z-index: 0;
        position: absolute;
        top: 95px;
        left: 0;
        right: 0;
        bottom: 0;
        padding: 16px;
        overflow-y: scroll;
/*
        display: grid;
        grid-gap: 0px;
        grid-template-columns: 25% 25% 25% 25%;
        grid-template-rows: 25% 25% 25% 25%;
*/
        transition: all 0.4s ease;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    
    .card {
        z-index: 1;
        color: #0A0908;
        
        width: 46%;
        height: 46%;
        padding: 1%;
        cursor: pointer;
        transition: all 0.4s ease, color 0.1s ease;
    }
    
    .main-menu .card:hover {
        width: 56%;
        height: 56%;
        padding: 1%;        
        color: whitesmoke
    }
    
    .main-menu .card.hover-shrink-width {
        width: 36%;
        height: 56%;
    }
    
    .main-menu  .card.hover-shrink-height {
        width: 46%;
        height: 36%;
    }
    
    .card .border-container {
        display: flex;
        justify-content: center;
        align-items: center;
        
        width: 100%;
        height: 100%;
        
        border: solid #0A0908 1px;
        border-radius: 12px;
        
        transition: all 0.2s ease;
    }
    
    .card:hover .border-container {
/*
        -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
*/
        z-index: 2;
        border-width: 4px;
        background: #0A0908;
    }
    
    @media screen and (min-width: 540px) {
        
    }
    
    @media screen and (max-width: 540px) {
        .main-menu {
            font-size: 22px;
        }
    }
    
</style>