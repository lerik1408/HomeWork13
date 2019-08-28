<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import api from './shared/services/api.axios';

export default {
  name: 'app',
  components: {

  },
  beforeCreate() {
    // api.init('https://api-my-fixer.herokuapp.com')
    api.init('http://localhost:3000');
  },
};

</script>

<style lang="sass">

</style>
