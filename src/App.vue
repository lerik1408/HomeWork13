<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <router-link to="/foo">Перейти к Foo</router-link>
      <router-link to="/bar">Перейти к Bar</router-link>
    </div> -->
    <router-view></router-view>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}

</script>

<style lang="sass">
// // fonts
// $Roboto : 'Roboto', sans-serif
// $eho : 'Exo 2', sans-serif
// //color
// $navyBlue : #01134E
// $blue : #2A74DB
// $lightGreen : #0AD69C
// $grayMain : #F9FAFC
// $grayBorder : #EDF0F4
// $grayTime : #9BA0AD
// $grayInput : #F2F2F2
// $grayDark : #222428
// $grayBottom : #E9E9E9
// $grayTextNoActive : #CCD0DC
// $darkBlue : #252F48
// $blueHeadline : #002396
// $low : #FF6359
// $normal : #FFB966
// $good : #38ECAC
// $violet: #546087
// $navFill : #8089A6
// @mixin respind_miniNotebook
//     @media screen and (max-width: 1200px) {@content}
// @mixin respond_bigTablet
//     @media screen and (max-width: 1024px) {@content}
// @mixin respond_tablet
//     @media screen and (max-width: 768px) {@content}
// @mixin respind_smartphone
//     @media screen and (max-width: 480px) {@content}
</style>
