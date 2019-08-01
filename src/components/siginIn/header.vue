<template>
    <figure class="header__logo">
        <a href="#">
        <img src="../../assets/img/logo.png" alt="" srcset="">
        </a>
    </figure>
</template>
<script>
export default {
    
}
</script>
<style lang="sass">
@import '../../settings/respond.sass'
@import '../../settings/_variables.sass'
.header
    display: flex
    justify-content: space-between
    margin-top: 28px
    @include respind_smartphone
        flex-direction: column
        align-items: center
    .header__logo
        display: flex
        margin-left: 9.5%
        @include respind_smartphone
            margin-left: 0
            margin-bottom: 20px
</style>


