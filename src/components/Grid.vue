<template>
    <div class="grid">
        <div class="card" v-for="card in cards" :style="{background: card.color}" >
<!--            {{card.title}}    -->
            <font-awesome-icon :icon="card.icon" size="3x" />
        </div>
    </div>
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery

export default {
  name: 'Grid',
  data () {
    return {
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
        ]
    }
  },
  mounted: function() {
      var cards = $('.card')
      cards.hover(function() {
          var siblings = $(this).siblings();
          console.log(siblings);
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
          console.log(siblings);
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
}
</script>

<style>
    .grid {
        background: slategray;
        z-index: 0;
        position: absolute;
        top: 14vw;
        left: 0;
        right: 0;
        bottom: 0;
        
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
        display: flex;
        justify-content: center;
        align-items: center;
        
        z-index: 1;
        color: #262020;
        
        width: 50%;
        height: 50%;

        transition: all 0.4s ease;
    }
    
    .card:hover {
        width: 60%;
        height: 60%;
        -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        z-index: 2;
    }
    
    .card.hover-shrink-width {
        width: 40%;
        height: 60%;
    }
    .card.hover-shrink-height {
        width: 50%;
        height: 40%;
    }
    
    @media screen and (min-width: 540px) {
        .grid {
            top: 95px;
        }
    }
    @media screen and (max-width: 540px) {
        .grid {
            font-size: 22px;
        }
    }
</style>