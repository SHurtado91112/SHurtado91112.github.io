<template>
    <div class="navbar">
        <div class="nav-title">
            <div class="larger-text">
            {{title}}
            </div>
        </div>
        <div class="nav-right">
<!--
            <font-awesome-icon icon="mobile-alt" size="2x" />
            <font-awesome-icon icon="laptop-code" size="2x" />
-->
            <a class="icon-container" href="https://www.shurtado.site" target="_blank">
                <img src="https://img.icons8.com/ios/50/000000/email.png">
            </a>
            <a class="icon-container" href="https://www.linkedin.com/in/steven-hurtado" target="_blank">
                <img src="https://img.icons8.com/ios/50/000000/linkedin-2.png">
            </a>
            <a class="icon-container" href="https://www.github.com/SHurtado91112" target="_blank">
                <img src="https://img.icons8.com/ios/50/000000/github-2.png">
            </a>
            <a class="icon-container" href="https://www.soundcloud.com/steveshidae" target="_blank">
                <img src="https://img.icons8.com/ios/50/000000/soundcloud.png">
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
    
    .larger-text {
        font-size: 8vw;
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
        padding: 6px;
        margin: 2px;
        color: black;
        opacity: 1.0;
        border-radius: 50%;
        cursor: pointer;
        -webkit-transition: all 0.4s ease;
        transition: all 0.4s ease;
    }
    
    .nav-right .icon-container:hover {
        opacity: 0.5;
    }
    
    @media screen and (max-width: 420px) {
        .nav-right {
            width: 200px;
        }
        .nav-right .icon-container img {
            width: 24px;
        }
    }
    
    @media screen and (max-width: 500px) and (min-width: 420px) {
        .nav-right {
            width: 200px;
        }
        .nav-right .icon-container img {
            width: 32px;
        }
    }
    
    @media screen and (max-width: 768px) {
        .navbar .larger-text {
            font-size: 8vh;
        }
    }
</style>