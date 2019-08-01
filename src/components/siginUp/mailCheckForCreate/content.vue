<template>
    <main>
        <img src="../../../assets/img/MailCheck.svg" alt="circles" class="circles">
        <img src="../../../assets/img/Group.png" alt="mail" class="mail">
        <div class="content">
            <h2 class="content__headline">You are almost ready to go!</h2>
            <p class="content__text">
            Please check your email to reset your password
            </p>
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
.mail
    z-index: -1
    position: absolute
    top: 38%
    left: 45%
.content
    margin-left: 30%
    margin-top: 30%
.content__headline
    color: $blue
    font-family: $eho
    font-size: 50px
    font-weight: 600
    line-height: 60px
.content__text
    font-family: $eho
    font-weight: 600
    font-size: 24px 
    padding-top: 10px
    padding-left: 5%
</style>


