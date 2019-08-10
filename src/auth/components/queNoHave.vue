
<template>
    <!-- Cheat -->
    <div class="header__question">
        <p class="header__text">Do not have an account?</p>
        <router-link to="sign-up-1" class="header__link">Sigin Up</router-link>
        <!-- <a href="sign-up-1" class="header__link">Sigin Up</a> -->
    </div>
</template>
<script>
export default {
    // Cheat
}
</script>
<style lang="sass">
// Cheat
@import '../../shared/style/reset.sass'
@import '../../shared/style/respond.sass'
@import '../../shared/style/_variables.sass'
// Cheat
body
  background-color: $grayMain
  font-family: 'Roboto', sans-serif
  font-size: 14px
.header__question
    display: flex
    margin-left: auto
    align-items: center
    font-size: 16px
    margin-right: 9.5%
    font-weight: 300
    letter-spacing: 0.28px
    color: $grayDark
    @include respind_smartphone
        margin-right: 0
    .header__link
        padding-left: 5px
        color: $blue
        text-decoration: none
</style>

