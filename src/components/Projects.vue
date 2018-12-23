<template>
<div class="grid">
    <div class="card" v-for="card in projectCards">
        <img :src="card.img"/>
<!--
        <div class="border-container">
            
        </div>
-->
    <!--            {{card.title}}    -->
    </div>

</div>
<!--
            <font-awesome-icon icon="mobile-alt" size="2x" />
            <font-awesome-icon icon="laptop-code" size="2x" />
-->
</template>

<script>
import JQuery from 'jquery'
let $ = JQuery
export default {
  name: 'Projects',
  methods: {
  },
  data () {
    return {
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
        ]
    }
  }
}
</script>

<style scoped>
    .grid {
        display: flex;
        flex-wrap: wrap;
        
        overflow-y: scroll;
        height: auto;
        max-width: 1250px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        padding: 16px;
        margin: auto;
    }    
    
    .grid .card {
        width: unset;
        height: unset;
        min-width: 100px;
        max-height: 280px;
/*        max-height: 400px;*/
        overflow: hidden;
        opacity: 0.5;
    }
    
    .grid .card:hover {
        padding-top: 24px;
        opacity: 1.0;
    }
    
    .grid .card img {
        width: auto;
        height: 100%;
        border-radius: 12px;
    }
</style>