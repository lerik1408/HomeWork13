<template>
<div>
  <form action class="form">
    <div class="form__wrap">
      <label for class="form__label">USERNAME</label>
      <input @change="updateData" v-model="person.username" type="text" class="form__input" />
    </div>
    <div class="form__wrap">
      <label for class="form__label">E-MAIL</label>
      <input @change="updateData" type="text" class="form__input" v-model="person.email"/>
    </div>
  </form>
  <div class="button">
    <router-link to="/password-recovery-1" class="button__link">CHANGE PASSWORD</router-link>
  </div>
</div>
</template>

<script>
import api from '../../shared/services/api.axios';

export default {
  name: 'account',
  data() {
    return {
      person: {},
    };
  },
  mounted() {
    api.setHeader();
    api.get('/api/profile/person').then((res) => {
      this.person = res.data.user;
    });
  },
  methods: {
    updateData() {
      setTimeout(() => {
        api.put('/api/profile/person', this.person).then((res) => {
          alert('profile changed');
        }).catch((err) => {
          alert(err);
        });
      }, 1000);
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../shared/style/variables.sass'
@import '../../shared/style/respond.sass'
.form
    display: flex
    margin-left: 61px
    margin-top: 48px
    @include respond_tablet
        display: block
    @include respond_tablet
        margin-left: 10px
.form__wrap
    width: auto
    margin-right: 35px
    @include respond_bigTablet
        width: 100%
    @include respond_tablet
        width: 90%
        margin-bottom: 10px
.form__label
    display: block
    margin-bottom: 4px
    color: $violet
    font-weight: 500
    font-size: 12px
.form__input
    width: 24.17%
    min-width: 280px
    background: rgba(252, 252, 252, 0.2)
    border: 2px solid #F2F2F2
    border-radius: 2px
    height: 40px
    outline: none
    padding-left: 14px
    @include respond_bigTablet
        min-width: 200px
    @include respond_tablet
        min-width: auto
        width: 100%
.button
    margin-top: 39px
    display: flex
    justify-content: center
    align-items: center
.button__link
    font-weight: 500
    font-size: 12px
    color: $navyBlue
    text-decoration: none
    text-transform: uppercase
    line-height: 14px
    &:after
        content: "  >"
        color: $blue
</style>
