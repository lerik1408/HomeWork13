<template>
    <div>
        <header-component></header-component>
        <main class="main">
            <div class="main__wrap">
                <form action="" method="get" class="form">
                    <h3 class="form__headline"> Sign Up</h3>
                    <div class="form__user-name">
                        <input type="text" class="form__input" placeholder="Name">
                        <input type="text" class="form__input" placeholder="Last name">
                    </div>
                    <input type="text" class="form__input" placeholder="E-mail">
                    <input type="text" class="form__input" placeholder="Password">
                    <button class="form__button">Get started</button>
                </form>
            </div>
        </main>
    </div>
</template>
<script>
import HeaderComponent from '../../components/header.vue';


export default {
  name: 'SignUp-1',
  components: {
    HeaderComponent,
  }
}
</script>
<style lang="sass" scoped>
@import '../../../shared/style/base.sass'
@import '../../../shared/style/reset.sass'
@import '../../../shared/style/respond.sass'
@import '../../../shared/style/variables.sass'

.main
    width: 100vw
    display: flex
    justify-content: center
    align-items: center
.main__wrap
    margin-top: 50px
    width: 43.8%
    height: 416px
    background-color: #fff
    display: flex
    justify-content: center
    align-items: center
    box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06)
    border-radius: 10px
    @include respond_bigTablet
        width: 70%
    @include respond_tablet
        width: 95%
.form
    width: 64%
    display: flex
    flex-direction: column
    @include respond_tablet
        width: 80%
.form__headline
    color: $blueHeadline
    font-family: $eho
    font-size: 28px
    margin-bottom: 30px
.form__input
    background-color: $grayInput
    font-family: $Roboto
    font-size: 14px
    height: 40px
    padding-left: 14px
    margin-bottom: 24px
    border: 2px solid $grayInput
    border-radius: 2px
    outline: none
.form__input:focus
    background-color: #fff
    border-left: 2px solid $blue
.password
    margin-bottom: 0
.form__button
    align-self: flex-end
    width: 47%
    height: 42px
    background-color: $lightGreen
    font-size: 16px
    font-family: $eho
    color: #fff
    border: none
    border-radius: 2px
    cursor: pointer
    margin-top: 14px
    @include respond_tablet
        align-self: center
.form__user-name
    display: flex
    .form__input
        width: 47.5%
        &:first-child
            margin-right: 5%
</style>


