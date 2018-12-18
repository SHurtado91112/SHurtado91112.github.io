<template>
    <div class="grid">
        <div class="card" v-for="card in cards" :style="{background: card.color}" >
<!--            {{card.title}}    -->
            <font-awesome-icon :icon="card.icon" size="3x" />
        </div>
    </div>
</template>

<script>
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
        flex-basis: 50%;
        height: 50%;
        z-index: 1;
        color: #262020;
/*
        width: 50%;
        height: 50%;
*/
/*        flex-shrink: 0.5;*/
        transition: all 0.4s ease;
    }
    .card:hover {
        flex-basis: 60%;
        height: 60%;
        -webkit-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        box-shadow: 0px 0px 16px 0px rgba(0,0,0,0.75);
        z-index: 2;
    }
    .grid:hover .card:not(:hover) {
        flex-basis: 40%;
        height: 40%;
        opacity: 0.5;
/*
        width: 40%;
        height: 40%;
        flex-grow: 1;
*/
    }
</style>