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
<style lang="sass" scoped>
@import '../../settings/respond.sass'
@import '../../settings/_variables.sass'
.header__logo
    display: flex
    margin-left: 9.5%
    @include respind_smartphone
        margin-left: 0
        margin-bottom: 20px
</style>


