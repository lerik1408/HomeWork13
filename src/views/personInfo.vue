<template>
    <div>
        <aside-component v-bind:active="active"></aside-component>
        <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
        <main class="main">
            <button @click="aa"></button>
            <content-component v-bind:active="active"></content-component>
        </main>
    </div>
</template>

<script>
import asideComponent from '../components/main/aside';
import headerComponent from '../components/main/header';
import contentComponent from '../components/main/info/personInfo/content';
import api from '../shared/services/api.axios';
// import { debuglog } from 'util';
import axios from 'axios'

export default{
    name: 'person-info',
    data: function () {
        return{
            active: {
                info: true,
                person: true
            },
            breadcrumbs: [
                {id: 1,text: 'Home'},
                {id: 2,text: 'My profile'},
            ],
            kek:[]
        }
    },
    components: {
        asideComponent,
        headerComponent,
        contentComponent,
    },
    mounted: function(){
        api.get('https://swapi.co/api/people').then((res)=>{
            this.kek = res.data.results
            // debugger
            // console.log(res);
        })
        axios.defaults.headers.get['access-control-allow-origin'] = '*' 
    },
    methods: {
        aa(){
            api.get('http://localhost:3000/auth/test').then((res) => {
            debugger
            console.log(res)
        })
//         axios.get('http://localhost:3000/auth/test')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .finally(function () {
//     // always executed
//   });
        }
    }
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
