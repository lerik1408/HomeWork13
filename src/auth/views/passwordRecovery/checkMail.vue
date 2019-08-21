<template>
    <div>
        <header class="header">
            <logo-component></logo-component>
            <question-component></question-component>
        </header>
        <main>
            <img src="../../../assets/img/auth/MailCheck.svg" alt="circles" class="circles">
                <img src="../../../assets/img/auth/Group.png" alt="mail" class="mail">
            <div class="wrap">
                <div class="content">
                    <h2 class="content__headline">You are almost ready to go!</h2>
                    <p class="content__text">
                    Please check your email to reset your password
                    </p>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import LogoComponent from '../../components/logo.vue';
import QuestionComponent from '../../components/backSiginIn.vue';

export default {
  name: 'checkMail',
  components: {
    LogoComponent,
    QuestionComponent,
  },
};
</script>
<style lang="sass" scoped>
@import '../../../shared/style/base.sass'
@import '../../../shared/style/reset.sass'
@import '../../../shared/style/respond.sass'
@import '../../../shared/style/variables.sass'
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
.circles
    z-index: -1
    position: absolute
    top: 0%
    left: 0%
    width: 100vw
    height: 100vh
.wrap
    width: 100%
.mail
    z-index: -1
    position: absolute
    top: 38%
    left: 45%
    @include respond_tablet
        left: 40%
    @include respind_smartphone
        left: 35%
.content
    margin: 0 auto
    width: 700px
    margin-top: 60vh
    padding-left: 50px
    @include respond_tablet
        width: 450px
    @include respind_smartphone
        width: 300px
.content__headline
    color: $blue
    font-family: $eho
    font-size: 50px
    font-weight: 600
    line-height: 60px
    display: inline
    @include respond_tablet
        font-size: 34px
.content__text
    font-family: $eho
    font-weight: 600
    font-size: 24px
    padding-top: 10px
    padding-left: 5%
    @include respond_tablet
        padding-left: 0%
</style>
