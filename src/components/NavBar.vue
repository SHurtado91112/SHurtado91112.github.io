<template>
    <div class="navbar">
        <div class="nav-left">
            <div class="large-text">
            {{title}}
            </div>
            <div class="raleway-light">
                {{subtitle}}
            </div>
        </div>
        <div class="nav-right">
            <font-awesome-icon icon="mobile-alt" size="2x" />
            <font-awesome-icon icon="laptop-code" size="2x" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'NavBar',
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
        background: white;
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
        
    }
    .nav-right {
        
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