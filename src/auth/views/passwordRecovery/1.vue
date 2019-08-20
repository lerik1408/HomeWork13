<template>
    <div>
        <header class="header">
            <logo-component></logo-component>
            <question-component></question-component>
        </header>
        <main class="main">
          <div class="main__wrap">
                <form @submit.prevent="firstStage" class="form">
                <h3 class="form__headline">Enter your e-mail to reset your password</h3>
                <input  v-model="user.email"
                v-validate="{'required':true, regex: /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/}"
                name="email"
                type="text"
                class="form__input"
                placeholder="E-mail"
                ref="input"
                />
                <span
                ref="message"
                class="message"
                :class="{'message--novalid': valide.show}">
                {{ errors.first('email') }}
                </span>
                <button class="form__button" type="submit">Send</button>
              </form>
          </div>
        </main>
    
    </div>
</template>
<script>
import LogoComponent from '../../components/logo.vue';
import QuestionComponent from '../../components/backSiginIn.vue';
import api from '../../../shared/services/api.axios'

export default {
  name: 'password1',
  components: {
    LogoComponent,
    QuestionComponent,
  },
  data(){
      return{
        user:{
          email: '',
        },
        valide:{
          show: false,
        }
      }
  },
  mounted(){
    api.init('https://api-my-fixer.herokuapp.com')
  },
  methods:{
    firstStage(){
        this.$validator.validate().then(valid => {
            if(valid){
            api.post('/api/auth/check-email',this.user).then((res) => {
                if(res.data.people.length===0){
                    alert('Such mail does not exist');
                }else{
                    localStorage.setItem('recovery',JSON.stringify(res.data.people[0]));
                    this.$router.push('/password-recovery-2');
                }
                }).catch((err) => {
                    alert(err);
                });
            }else{
                this.valide.show=true
                this.$refs.input.focus()
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
// body
//   background-color: $grayMain
//   font-family: 'Roboto', sans-serif
//   font-size: 14px
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
  display: none
  margin-bottom: 10px 
.message--novalid
  color: tomato
  display: block
</style>


