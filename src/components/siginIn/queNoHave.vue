<template>
    <div class="header__question">
        <p class="header__text">Do not have an account?</p>
        <a href="sigin-up" class="header__link">Sigin Up</a>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
@import '../../settings/respond.sass'
@import '../../settings/_variables.sass'
.header__question
    display: flex
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

