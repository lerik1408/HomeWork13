<template>
  <div>
    <aside-component v-bind:active="active"></aside-component>
    <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
    <main class="main">
      <div class="main__wrap">
        <nav-component v-bind:active="active"></nav-component>
        <form action class="form">
          <div class="form__wrap">
            <label for class="form__label">USERNAME</label>
            <input type="text" class="form__input" />
          </div>
          <div class="form__wrap">
            <label for class="form__label">E-MAIL</label>
            <input type="text" class="form__input" />
          </div>
        </form>
        <div class="button">
          <router-link to="/password-recovery-1" class="button__link">CHANGE PASSWORD</router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import asideComponent from "../../components/aside";
import headerComponent from "../../components/header";
import navComponent from "../components/nav";

export default {
  name: "personal",
  data: function() {
    return {
      active: {
        info: true,
        account: true
      },
      breadcrumbs: [{ id: 1, text: "Home" }, { id: 2, text: "My profile" }]
    };
  },
  components: {
    asideComponent,
    headerComponent,
    navComponent
  }
};
</script>

<style lang="sass" scoped>
@import '../../shared/style/variables.sass'
@import '../../shared/style/respond.sass'
.main
    display: flex
    justify-content: center
    align-content: flex-end
    background-color: $grayMain
    margin-left: 80px
    @include respond_tablet
        margin-left: 0
.main__wrap
    margin-top: 60px
    width: 84.52%
    background-color: #fff
    height: 570px
    @include respond_tablet
        height: auto
.main__wrap
    margin-top: 60px
    width: 84.52%
    background-color: #fff
    height: 570px
    @include respond_tablet
        height: auto
.main
    display: flex
    justify-content: center
    align-content: flex-end
    background-color: $grayMain
    margin-left: 80px
    @include respond_tablet
        margin-left: 0
.main__wrap
    margin-top: 60px
    width: 84.52%
    background-color: #fff
    height: 570px
.form
    display: flex   
    margin-left: 61px
    margin-top: 48px
    @include respond_tablet
        display: block
    @include respond_tablet
        margin-left: 10px
.form__wrap
    width: auto
    margin-right: 35px
    @include respond_bigTablet
        width: 100%
    @include respond_tablet
        width: 90%
        margin-bottom: 10px
.form__label
    display: block
    margin-bottom: 4px
    color: $violet
    font-weight: 500
    font-size: 12px
.form__input
    width: 24.17%
    min-width: 280px
    background: rgba(252, 252, 252, 0.2)
    border: 2px solid #F2F2F2
    border-radius: 2px
    height: 40px
    outline: none
    padding-left: 14px
    @include respond_bigTablet
        min-width: 200px
    @include respond_tablet
        min-width: auto
        width: 100%
.button
    margin-top: 39px
    display: flex
    justify-content: center
    align-items: center
.button__link
    font-weight: 500
    font-size: 12px
    color: $navyBlue
    text-decoration: none
    text-transform: uppercase
    line-height: 14px
    &:after
        content: "  >"
        color: $blue
</style>
