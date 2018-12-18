<template>
  <div id="app">
    <NavBar/>
    <Grid/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Grid from './components/Grid'
    
export default {
  name: 'App',
  components: {
    NavBar,
    Grid
  }
}
</script>