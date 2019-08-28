<template>
    <div>
      <aside-component v-bind:active="active"></aside-component>
      <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
      <main class="main">
        <div class="main__wrap">
            <nav-component @tab="switching" v-bind:active="active"></nav-component>
            <profile-component v-if="active.person"></profile-component>
            <account-component v-if="active.account"></account-component>
        </div>
      </main>
    </div>
</template>

<script>
import asideComponent from '../../components/aside';
import headerComponent from '../../components/header';
import navComponent from '../components/nav';
import profileComponent from '../components/personal';
import accountComponent from '../components/account';
import api from '../../shared/services/api.axios';

export default {
  name: 'profile',
  data() {
    return {
      active: {
        info: true,
        person: true,
        account: false,
      },
      breadcrumbs: [
        { id: 1, text: 'Home', link: '/index'},
        { id: 2, text: 'My profile', link: '/profile'},
      ],
    };
  },
  components: {
    asideComponent,
    headerComponent,
    navComponent,
    profileComponent,
    accountComponent,
  },
  methods: {
    switching(event, ref1, ref2) {
      if (event.target === ref1) {
        this.active.person = true;
        this.active.account = false;
      } else {
        this.active.account = true;
        this.active.person = false;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../shared/style/variables.sass'
@import '../../shared/style/respond.sass'
.form__input--file
    display: none
.main
    display: flex
    justify-content: center
    align-content: flex-end
    background-color: $grayMain
    margin-left: 80px
    @include respond_tablet
        margin-left: 0
.main__wrap
    margin-top: 60px
    width: 84.52%
    background-color: #fff
    height: 570px
    @include respond_tablet
        height: auto
.profile
    margin-top: 50px
    display: flex
    margin-left: 61px
    @include respond_tablet
        flex-direction: column
        align-items: center
        margin: 30px 10px
.profile__photo
    img
        width: 134px
        height: 134px
        border-radius: 50%
    @include respond_tablet
        order: 2

.profile__link
    margin-left: 5%
    margin-top: 10px
.profile__link a
    color: #35373B
    text-decoration: none
.form
    display: flex
    width: 100%
    margin-left: 40px
    flex-wrap: wrap
    @include respond_tablet
        margin-left: 0px
        flex-direction: column
.form__wrap
    display: flex
    flex-direction: column
    width: 30%
    margin-bottom: 29px
    @include respond_tablet
        width: 100%
.form__wrap:nth-child(2n+1)
    margin-right: 4%
.form__wrap:nth-child(2n)
    margin-right: 30%
.form__label
    margin-bottom: 5px
    font-weight: 500
    font-size: 12px
    line-height: 14px
    letter-spacing: 1px
    text-transform: uppercase
    color: $violet
.form__input,
.form__select
    background: #FCFCFC
    border: 2px solid $grayInput
    border-radius: 2px
    height: 40px
    outline: none
    padding-left: 13px
.form__select
    height: 45px
.form__wrap--special
    display: flex
.form__select--phone
    width: 30%
    height: 45px
.form__input--phone
    width: 60%
    margin-left: 5%
</style>
