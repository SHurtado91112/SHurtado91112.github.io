<template>
  <div id="app">
    <div class="app-container">
        <NavBar/>
        <MainMenu v-bind:homeVisible="showHome"/> 
    </div>
    <div class="logo">
        {{ title }}
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import MainMenu from './components/MainMenu'
    
export default {
  name: 'App',
  components: {
    NavBar,
    MainMenu
  },
  data () {
      return {
          title: "SH",
          showHome : true
      }
  }
}
</script>

<style>
    
    .app-container {
        animation: intro 2s;
    }
    .logo {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10vw;
        color: whitesmoke;
        opacity: 0.0;
        animation: intro-inv 2s;
    }
    @keyframes intro {
        0%   {    opacity: 0.0    }
        50%  {    opacity: 0.0    }
        100% {    opacity: 1.0    }
    }

    @keyframes intro-inv {
        0%   {    opacity: 0.0   }
        25%  {    opacity: 1.0   }
        50%  {    opacity: 1.0   }
        100% {    opacity: 0.0   }
    }
</style>