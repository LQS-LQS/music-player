<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
    <Play></Play>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Play from './components/Play.vue'

export default {
  name: 'App',
  components:{Play,Nav},
  mounted(){
    console.log(this);
  }
}
</script>

<style lang="less">

</style>
