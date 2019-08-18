<template>
    <div>
        <header class="header">
            <logo-component></logo-component>
            <question-component></question-component>
        </header>
        <main class="main">
            <div class="main__wrap">
                <form @submit.prevent="submit" class="form">
                    <h3 class="form__headline">Reset your password</h3>
                    <input v-validate.continues="{min:6,regex: /[0-9]/}" name="password" type="password" class="form__input" placeholder="Create a new password" ref="password" v-model="password">
                    <span
                    v-for="(error,i) in errors.collect('password')"
                    :key="i"
                    ref="message"
                    class="message"
                    >
                    {{error}}
                    </span>
                    <input v-validate="'required|confirmed:password'" name="password_confirmation" type="password" class="form__input" placeholder="Confirm password" >
                    <span class="message">{{ errors.first('password_confirmation') }}</span>
                    <button class="form__button" type="submit">Reset</button>
                </form>
            </div>
        </main>
    </div>
</template>
<script>
import LogoComponent from '../../components/logo.vue';
import QuestionComponent from '../../components/backSiginIn.vue';
import api from '../../../shared/services/api.axios';

export default {
  name: 'pasword2',
  components: {
    LogoComponent,
    QuestionComponent,
  },
  data(){
      return{
        password: ''
      }
  },
  methods:{
      submit(){
          this.$validator.validate().then(valid => {
              if(valid){
                let user = JSON.parse(localStorage.getItem('recovery'));
                user.password=this.password;
                api.put('http://localhost:3000/api/auth/password',user).then(()=>{
                    api.post('http://localhost:3000/api/auth/sign-up',user).then(()=>{
                        localStorage.removeItem('recovery');
                        this.$router.push('/password-recovery-3');
                    }).catch((err)=>{
                        alert(err);
                    });
                }).catch((err)=>{
                    alert(err)
                })
              }
          });
      }
  }
}
</script>
<style lang="sass" scoped>
@import '../../../shared/style/base.sass'
@import '../../../shared/style/reset.sass'
@import '../../../shared/style/respond.sass'
@import '../../../shared/style/variables.sass'
.header
  display: flex
  justify-content: space-between
  margin-top: 28px
  @include respind_smartphone
    flex-direction: column
    align-items: center
.main
    width: 100vw
    display: flex
    justify-content: center
    align-items: center
.main__wrap
        margin-top: 50px
        width: 43.8%
        height: 416px
        background-color: #fff
        display: flex
        justify-content: center
        align-items: center
        box-shadow: 0px 5px 40px rgba(0, 45, 113, 0.06)
        border-radius: 10px
        @include respond_bigTablet
            width: 70%
        @include respond_tablet
            width: 95%
.form
    width: 64%
    display: flex
    flex-direction: column
    @include respond_tablet
        width: 80%
.form__headline
    color: $blueHeadline
    font-family: $eho
    font-size: 28px
    margin-bottom: 30px
.form__input
    background-color: $grayInput
    font-family: $Roboto
    font-size: 14px
    height: 40px
    padding-left: 14px
    margin-bottom: 24px
    border: 2px solid $grayInput
    border-radius: 2px
    outline: none
.form__input:focus
    background-color: #fff
    border-left: 2px solid $blue
.form__button
    align-self: flex-end
    width: 47%
    height: 42px
    background-color: $lightGreen
    font-size: 16px
    font-family: $eho
    color: #fff
    border: none
    border-radius: 2px
    cursor: pointer
    margin-top: 14px
    @include respond_tablet
        align-self: center
.message
    color: tomato
    margin-bottom: 10px
</style>


