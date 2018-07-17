<template>
  <div id="app" class="app">
      <router-view/>
      <!--<intro></intro>-->
  </div>
</template>

<script>

import index from '../pages/index.vue'
import intro from '../../examples/docs/intro.vue'


export default {
  name: 'App',
  components: {
    index,
    intro
  }
}
</script>

<style>
html,body,div#app{
    width: 100%;
    height: 100%;

}
#app{
    font-size: .14rem;
}


</style>
