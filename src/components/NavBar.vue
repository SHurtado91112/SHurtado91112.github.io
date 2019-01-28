<template>
    <div class="navbar">
        <div id="back-navigator" class="nav-left" v-if="!$parent.showHome" v-on:click="backPressed">
            <font-awesome-icon :icon="['fas', 'arrow-left']"/>
        </div>
        <div class="nav-title">
            <div class="large-text">
            {{title}}
            </div>
            <div class="raleway-light">
                {{subtitle}}
            </div>
        </div>
        <div class="nav-right">
<!--
            <font-awesome-icon icon="mobile-alt" size="2x" />
            <font-awesome-icon icon="laptop-code" size="2x" />
-->
            <a class="icon-container" href="https://www.shurtado.site" target="_blank">
                <font-awesome-icon :icon="['fas', 'envelope']" size="2x" />
            </a>
            <a class="icon-container" href="https://www.linkedin.com/in/steven-hurtado" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin-in']" size="2x" />
            </a>
            <a class="icon-container" href="https://www.github.com/SHurtado91112" target="_blank">
                <font-awesome-icon :icon="['fab', 'github-alt']" size="2x" />
            </a>
            <a class="icon-container" href="https://www.soundcloud.com/steveshidae" target="_blank">
                <font-awesome-icon :icon="['fab', 'soundcloud']" size="2x" />
            </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
  methods: {
    backPressed: function() {    
        var navBar = this;
        var navLeft = $('.nav-left');
        var mainMenuEl = $('.main-menu');
        mainMenuEl.css('opacity', 0.0);
        navLeft.css('opacity', 0.0);
        navLeft.css('margin-left', '-32px');
        setTimeout(function() {
            navBar.$parent.showHome = true
        }, 400);
    }
  },
  data () {
    return {
        title: "Steven Hurtado",
        subtitle: "developer and musician",
        icon: "PHONE HERE"
    }
  }
}
</script>

<style>
    .navbar {
        background: whitesmoke;
        color: #0A0908;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        min-height: 50px;
        
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 16px 32px 16px 32px;
        transition: all 0.4s ease;
        z-index: 10;
        border-bottom: 1px #0A0908 solid;
    }
    
    .nav-left {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        
        height: 100%;
        left: 0px;
        width: 32px;
        color: whitesmoke;
        background: #0A0908;
        opacity: 1.0;
        cursor: pointer;
        z-index: 10;
        animation: nav-left-appear 0.4s ease;
        transition: all 0.4s ease;
    }
    
    .nav-left:hover {
        opacity: 0.5;
    }
    
    @keyframes nav-left-appear {
        from {  
            margin-left: -32px;
        }
        to   {  
            margin-left: 0px;
        }
    }
    
    .nav-title {
        margin-left: 8px;
    }
    
    .nav-right {
        font-size: 12px;
        max-width: 160px;
        display: flex;
        justify-content: flex-end;
        flex-wrap: wrap;
    }
    
    .nav-right .icon-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 24px;
        height: 24px;
        padding: 6px;
        margin: 2px;
        background: #0A0908;
        color: whitesmoke;
        opacity: 1.0;
        border-radius: 50%;
        cursor: pointer;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
    }
    
    .nav-right .icon-container:hover {
        opacity: 0.5;
    }
    
    @media screen and (max-width: 416px) {
        .nav-right {
            width: 80px;
            font-size: 8px;
        }
        .nav-right .icon-container {
            width: 12px;
            height: 12px;
        }
    }
    
    @media screen and (min-width: 540px) {
        body .navbar {
            font-size: 22px;
        }
        .navbar .large-text {
            font-size: 32px;
        }
        .navbar {
            max-height: 98px;
        }
    }
</style>