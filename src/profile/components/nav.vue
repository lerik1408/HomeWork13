<template>
  <section class="nav">
    <div class="nav__item" v-bind:class="{ 'nav__item--active': active.person }">
      <router-link to="/profile/personal">PERSONAL INFORMATION</router-link>
    </div>
    <div class="nav__item" v-bind:class="{ 'nav__item--active': active.account }">
      <router-link to="/profile/account">ACCOUNT INFORMATION</router-link>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    active: Object,
  },
};
</script>

<style lang="sass" scoped>
@import '../../shared/style/respond.sass'
@import '../../shared/style/variables.sass'
.nav
    display: flex
    width: 100%
    margin-left: 61px
    @include respond_tablet
        margin-left: 10px
.nav__item
    display: flex
    justify-content: center
    align-items: flex-end
    padding-bottom: 19px
    height: 76px
    width: 34.5%
    font-size: 16px
    font-style: bold
    border-bottom: 2px solid $grayBottom
    color: $grayTextNoActive
    @include respond_tablet
        width: 45%
    @include respind_smartphone
        font-size: 14px
.nav__item a
    color: $grayTextNoActive
    font-size: 16px
    font-style: bold
    text-decoration: none
.nav__item--active a
    color: $navyBlue
    font-weight: bold
    font-size: 16px
.nav__item--active
    border-bottom: 2px solid $blue
</style>
