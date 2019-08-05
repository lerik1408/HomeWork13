<template>
<header class="header">
    <div class="burger">
        <span class="burger__line"></span>
     </div>
    <section class="breadcrumbs">
        <p class="breadcrumbs__item" v-for="item in breadcrumbs" v-bind:key="item.id">{{item.text}}</p>
    </section>
    <section class="header__user user">
        <p class="user__item">
            Faruh Bernandez
        </p>
        <div class="user__item">
            <svg width="11" height="6" viewBox="0 0 11 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2222 1.13514L9.13328 4.85176e-08L5.5555 3.72973L1.97772 4.85176e-08L0.888834 1.13514L5.5555 6L10.2222 1.13514Z" fill="#252F48"/>
            </svg>
        </div>
    </section>
</header>
</template>

<script>
export default{
    props: {
        breadcrumbs: Array
    }
}
</script>

<style lang="sass" scoped>
@import '../../settings/respond.sass'
@import '../../settings/variables.sass'
.header
  display: flex
  align-items: center
  justify-content: space-between
  height: 60px
  margin-left: 80px
  padding: 0 40px
  background-color: #fff
  @include respond_tablet
    margin: 0
    margin-left: 0
    padding: 0
.burger
  display: none
  @include respond_tablet
    display: flex
    position: relative
    position: relative
    align-items: center
    justify-content: center
    width: 30px
    height: 30px
    margin-left: 10px
    cursor: pointer
    z-index: 2
    .burger__line,
    .burger__line::after,
    .burger__line::before
      display: block
      position: absolute
      width: 30px
      height: 2px
      transition: 0.2s
      background-color: $navyBlue
    .burger__line::after
      transform: translateY(-8px)
      content: ''
    .burger__line::before
      transform: translateY(8px)
      content: ''
    .burger__line--active
      position: absolute
      right: -80px
      background-color: #fff
      &::after
        transform: rotate(-45deg)
      &::before
        transform: rotate(45deg)

.breadcrumbs
  display: flex
  @include respind_smartphone
    display: none
.breadcrumbs__item
  font-family: $Roboto
  font-size: 14px
  position: relative
  padding-right: 30px
.breadcrumbs__item::after
  position: absolute
  right: 10px
  color: $lightGreen
  content: ">"
.breadcrumbs__item:last-child::after
  content: ""
.header__user
  display: flex
  align-items: center

.user__item
  padding-right: 10px
  &:last-child
    padding-right: 0
</style>
