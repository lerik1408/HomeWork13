<template>
    <div>
        <header class="header">
            <header-component></header-component>
            <question-component></question-component>
        </header>
        <!-- <form-component></form-component> -->
    <main class="main">
    <div class="main__wrap">
      <form @submit.prevent="login" class="form">
        <h3 class="form__headline">Sigin in</h3>
        <input  v-model="user.email"
                v-validate="'required|email'"
                name="email"
                type="text"
                class="form__input"
                placeholder="E-mail"
                ref="emailInput"
        />
        <span 
          ref="message"
          class="message"
          :class="{'message--novalid': valide.show}"
          >
          {{ errors.first('email') }}
        </span>
        <input  v-model="user.passord"
                v-validate="'required|min:6'"
                type="password"
                name="password"
                class="form__input password"
                placeholder="Password"
                ref="passwordInput"
        />
        <span
          ref="message"
          class="message"
          :class="{'message--novalid': valide.show}"
          >
          {{ errors.first('password') }}
        </span>
        <a href="#" class="form__link"></a>
        <button type="submit" class="form__button">Sigin in</button>
      </form>
    </div>
  </main>
    </div>
</template>

<script>
import HeaderComponent from '../components/siginIn/header.vue';
import QuestionComponent from '../components/siginIn/queNoHave.vue';
// import FormComponent from '../components/siginIn/form.vue'
import api from '../shared/services/api.axios';

          // class="message"
          // :class="{'message--novalid': valide.show}"
export default {
  name: 'app',
  components: {
    HeaderComponent,
    QuestionComponent,
    // FormComponent,
  },
      data: function (){
        return{
            user:{
              email: '',
              password: '',
            },
            valide:{
              show: false,
              email: true,
              password: true,
            }
        }
    },
    methods: {
        login(){
          this.$validator.validate().then(valid => {
            if (valid) {
              this.saveUser({
              token: 'kkkk',
              user: {
                name: 'Vasya',
                surname: 'Vasurname',
                gender: 'Mr',
                photo: '',
                },
              });
            }else{
              this.$refs.emailInput.focus()
              this.valide.show = true
            }
          });
        },
        saveUser(user){
            localStorage.setItem('user',JSON.stringify(user));
            // api.init('https://swapi.co/api');
            // api.init('http://localhost:3000')
            api.setHeader();
            this.$router.push('/person-info');
        }
    }
}
</script>

<style lang="sass" scoped>
// @import '../settings/base.sass'
// @import '../settings/reset.sass'
// @import '../settings/respond.sass'
// @import '../settings/variables.sass'
// body
//   background-color: $grayMain
//   font-family: 'Roboto', sans-serif
//   font-size: 14px
// .header
//   display: flex
//   justify-content: space-between
//   margin-top: 28px
//   @include respind_smartphone
//     flex-direction: column
//     align-items: center
@import '../settings/respond.sass'
@import '../settings/_variables.sass'
.message
  display: none
  margin-bottom: 10px 
.message--novalid
  color: red
  display: block
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
.password
  margin-bottom: 24px
.form__link
  align-self: flex-end
  font-size: 12px
  color: $grayDark
  margin-top: 14px
  text-decoration: none
  @include respond_tablet
    align-self: center
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
</style>
