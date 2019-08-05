<template>
    <main>
        <img src="../../../assets/img/MailCheck.svg" alt="circles" class="circles">
            <img src="../../../assets/img/Group.png" alt="mail" class="mail">
        <div class="wrap">
            <div class="content">
                <h2 class="content__headline">You are almost ready to go!</h2>
                <p class="content__text">
                Please check your email to reset your password
                </p>
            </div>
        </div>
    </main>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
@import '../../../settings/respond.sass'
@import '../../../settings/variables.sass'
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
    // display: inline
</style>


