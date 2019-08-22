<template>
    <div>
        <header class="header">
            <logo-component></logo-component>
            <question-component></question-component>
        </header>
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
        <input  v-model="user.password"
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
        <router-link to="/password-recovery-1" class="form__link">Forgot password?</router-link>
        <button type="submit" class="form__button">Sigin in</button>
      </form>
    </div>
  </main>
    </div>
</template>

<script>
import LogoComponent from '../components/logo.vue';
import QuestionComponent from '../components/queNoHave.vue';
import api from '../../shared/services/api.axios';

export default {
  name: 'app',
  components: {
    LogoComponent,
    QuestionComponent,
  },
  data() {
    return {
      user: { email: '', password: '' },
      valide: {
        show: false,
        // email: true,
        // password: true,
      },
    };
  },
  mounted() {
    // api.init('https://api-my-fixer.herokuapp.com');
    // api.init('http://localhost:3000');
  },
  methods: {
    login() {
      this.$validator.validate().then((valid) => {
        if (valid) {
          api.post('/api/auth/sign-in', this.user)
            .then((res) => {
              if (!res.data.error) {
                const { data } = res;
                this.saveUser({
                  token: data.token,
                  user: data.user,
                });
              } else {
                alert(res.data.error);
              }
            })
            .catch((err) => {
              alert(`Form not submitted + ${err}`);
            });
        } else {
          this.$refs.emailInput.focus();
          this.valide.show = true;
        }
      });
    },
    saveUser(user) {
      localStorage.setItem('user', JSON.stringify(user));
      api.setHeader();
      this.$router.push('/profile');
    },
  },
};
</script>

<style lang="sass" scoped>
@import '../../shared/style/respond.sass'
@import '../../shared/style/_variables.sass'
.header
  display: flex
  margin-top: 28px
  @include respind_smartphone
    flex-direction: column
    align-items: center
    justify-content: center
.header__question
  @include respind_smartphone
    margin-left: 20px
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
.message
  display: none
  margin-bottom: 10px
.message--novalid
  color: red
  display: block
</style>
