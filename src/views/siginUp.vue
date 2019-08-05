<template>
    <div>
        <header-component></header-component>
        <form-component></form-component>
    </div>
</template>
<script>
import HeaderComponent from '../components/siginUp/header.vue';
import FormComponent from '../components/siginUp/form';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FormComponent,
  }
}
</script>
<style lang="sass">
@import '../settings/base.sass'
@import '../settings/reset.sass'
@import '../settings/respond.sass'
@import '../settings/variables.sass'
body
  background-color: $grayMain
  font-family: 'Roboto', sans-serif
  font-size: 14px
</style>

