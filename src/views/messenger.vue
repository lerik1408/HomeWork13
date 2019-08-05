<template>
    <div>
        <aside-component v-bind:active="active"></aside-component>
        <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
        <content-component v-bind:users="users" v-bind:messages="messages"></content-component>
    </div>
</template>

<script>
import asideComponent from '../components/main/aside';
import headerComponent from '../components/main/header';
import contentComponent from '../components/main/messenger/content'


export default{
    name: 'messenger',
    data: function () {
        return{
            active: {
                messenger: true,
            },
            breadcrumbs: [
                {id: 1,text: 'Home'},
                {id: 2,text: 'Network'}
            ],
            users: [
                {
                name: 'Miranda Hops', status: 'Excepteur sint occaecatar…', time: '9:32', img: './img/messenger/fr1.png', mute: true,
                }, {
                name: 'Barry Callebaut', status: 'Nemo enim ipsam volupta…', time: '22:01', img: './img/messenger/fr2.png',
                }, {
                name: 'Stacey Dosh', status: 'Ut enim ad minima veniam…', time: '19:15', img: './img/messenger/fr3.png', active: true,
                }, {
                name: 'Michael Kors', status: 'To take a trivial example…', time: '13:49', img: './img/messenger/fr4.png',
                }, {
                name: 'Johny Cash', status: 'Great explorer of the truth…', time: '10:25', img: './img/messenger/fr5.png',
                }, {
                name: 'Stacey Dosh', status: 'Ut enim ad minima veniam…', time: '9:32', img: './img/messenger/fr6.png',
                }
            ],
            messages: [
                {img: './img/messenger/fr3.png', text: 'On the other hand, we denounce with righteous indignation!', time: '01:14' },{ text: 'Which is the same as saying?', time: '01:38' }, { img: './img/messenger/fr3.png', text: 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures', time: '02:05' },{ text: 'To take a trivial example, which of us ever undertakes)', time: '03:25' },{ img: './img/messenger/fr3.png', text: 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures', time: '02:05' },{ text: 'To take a trivial example, which of us ever undertakes)', time: '03:25' },
            ],
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
</style>
