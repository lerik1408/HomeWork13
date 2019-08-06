<template>
    <div>
        <aside-component v-bind:active="active"></aside-component>
        <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
        <main class="main">
            <content-component v-bind:peoples="peoples"></content-component>
        </main>
    </div>
</template>

<script>
import asideComponent from '../components/main/aside';
import headerComponent from '../components/main/header';
import contentComponent from '../components/main/search/content'

export default{
    name: 'search',
    data: function () {
        return{
            active: {
                search: true,
            },
            breadcrumbs: [
                {id: 1,text: 'Home'},
                {id: 2,text: 'Search'},
                {id: 3,text: 'Result'}
            ],
            inp: 'lll',
            peoples: [
                {id: 1,img:'../search/people1.png', name:'name 1',rating: 1,country: 'UA',skills: 'Node js',price: 500},
                {id: 2,img:'../search/people2.png', name:'name 2',rating: 2,country: 'USA',skills: 'JS',price: 1000},
                {id: 3,img:'../search/people3.png', name:'name 3',rating: 3,country: 'Poland',skills: 'C++',price: 5000}
            ]
        }
    },
    components: {
        asideComponent,
        headerComponent,
        contentComponent,
    }
}
</script>

<style lang="sass" scoped>
@import '../settings/base.sass'
@import '../settings/reset.sass'
@import '../settings/respond.sass'
@import '../settings/variables.sass'
main
    display: flex
    margin-left: 80px
    background-color: $grayMain
    @include respond_tablet
        margin-left: 0
</style>
