<template>
    <header class="header">
        <figure class="header__logo">
            <img src="../assets/logo.png" alt="logo" srcset="">
        </figure>
        <div class="header__question">
            <p class="header__text">Already have an account?</p>
            <router-link to="sign-in" class="header__link">Log In</router-link>
        </div>
    </header>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
@import '../../shared/style/respond.sass'
@import '../../shared/style/_variables.sass'
body
  background-color: $grayMain
  font-family: 'Roboto', sans-serif
  font-size: 14px
.header
  display: flex
  justify-content: space-between
  margin-top: 28px
  @include respind_smartphone
    flex-direction: column
    align-items: center
    justify-content: center
.header__logo
    display: flex
    margin-left: 9.5%
    @include respind_smartphone
        margin-left: 0
        margin-bottom: 20px
.header__question
    display: flex
    align-items: center
    font-size: 16px
    margin-right: 9.5%
    font-weight: 300
    letter-spacing: 0.28px
    color: $grayDark
    @include respind_smartphone
        margin-left: 20px
    .header__link
        padding-left: 5px
        color: $blue
        text-decoration: none
</style>
