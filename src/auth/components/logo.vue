<template>
    <figure class="header__logo">
        <a href="#">
        <img src="../../assets/img/auth/logo.png" alt="logo" srcset="">
        </a>
    </figure>
</template>
<script>
export default {

};
</script>
<style lang="sass" scoped>
@import '../../shared/style/respond.sass'
@import '../../shared/style/_variables.sass'
.header__logo
    display: flex
    margin-left: 9.5%
    @include respind_smartphone
        margin-left: 0
        margin-bottom: 20px
</style>
