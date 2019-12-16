<template>
  <div id="app">
    <div>oilkndfoaifkasdf</div>
    <compass></compass>
    <flyButton></flyButton>
  </div>
</template>

<script>
import compass from './packages/compass/compass.vue'
import flyButton from './packages/flyButton/flyButton.vue'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components:{
    compass,
    flyButton
  }
}
</script>
<style lang="scss">
body{
  background-color: black
}
</style>
