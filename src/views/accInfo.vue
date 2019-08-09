<template>
    <div>
        <aside-component v-bind:active="active"></aside-component>
        <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
        <main class="main">
            <content-component v-bind:active="active"></content-component>
        </main>
    </div>
</template>

<script>
import asideComponent from '../components/main/aside';
import headerComponent from '../components/main/header';
import contentComponent from '../components/main/info/accInfo/content'

export default{
    name: 'account-info',
    data: function () {
        return{
            active: {
                info: true,
                account: true
            },
            breadcrumbs: [
                {id: 1,text: 'Home'},
                {id: 2,text: 'My profile'},
            ],
            kek: [],
        }
    },
    components: {
        asideComponent,
        headerComponent,
        contentComponent,
    },
}
</script>

<style lang="sass" scoped>
@import '../settings/base.sass'
@import '../settings/reset.sass'
@import '../settings/respond.sass'
@import '../settings/variables.sass'
.main
    display: flex
    justify-content: center
    align-content: flex-end
    background-color: $grayMain
    margin-left: 80px
    @include respond_tablet
        margin-left: 0
</style>
