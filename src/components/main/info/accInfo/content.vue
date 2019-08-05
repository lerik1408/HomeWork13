<template>
    <div class="main__wrap">
        <nav-component v-bind:active="active"></nav-component>
        <form action="" class="form">
                <div class="form__wrap">
                    <label for="" class="form__label">USERNAME</label>
                    <input type="text" class="form__input">
                </div>
                 <div class="form__wrap">
                    <label for="" class="form__label">E-MAIL</label>
                    <input type="text" class="form__input">
                 </div>
            </form>
            <div class="button">
                <a href="password-recovery" class="button__link">CHANGE PASSWORD</a>
            </div>
    </div>
</template>

<script>
import navComponent from '../nav'
export default{
    components: {
        navComponent,
    },
    props: {
        active: Object
    }
}
</script>

<style lang="sass" scoped>
@import '../../../../settings/respond.sass'
@import '../../../../settings/variables.sass'
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
