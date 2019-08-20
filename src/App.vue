<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import api from './shared/services/api.axios'

export default {
  name: 'app',
  components: {

  },
  mounted:function(){
    api.init('https://api-my-fixer.herokuapp.com')
    // api.init('http://localhost:3000')
  }
}

</script>

<style lang="sass">

</style>
