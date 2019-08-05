<template>
        <section class="main__wrap">
            <component-form v-bind:inp="inp"></component-form>
            <component-people v-bind:peoples="peoples"></component-people>
        </section>
</template>

<script>
import componentForm from './form/content';
import componentPeople from './people/content';
export default{
    props: {
        inp: String,
        peoples: Array,
    },
    components:{
        componentForm,
        componentPeople,
    }
}
</script>

<style lang="sass" scoped>
@import '../../../settings/respond.sass'
@import '../../../settings/variables.sass'
.main__wrap
    display: flex
    width: 90%
    height: 556px
    margin: auto
    margin-top: 25px
    border-radius: 4px
    background-color: #fff
    box-shadow: 0 0 30px rgba(153, 163, 174, 0.06)
    @include respond_bigTablet
        width: 100%
    @include respond_tablet
        width: 97%
        flex-direction: column
</style>
