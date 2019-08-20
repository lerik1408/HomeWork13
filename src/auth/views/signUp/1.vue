<template>
    <div>
        <header-component></header-component>
        <main class="main">
            <div class="main__wrap">
                <form class="form" @submit.prevent="FirstStage">
                    <h3 class="form__headline"> Sign Up</h3>
                    <div class="form__user-name">
                        <input v-model="user.name" type="text" class="form__input" placeholder="Name" v-validate="'required'" name="name" >
                        <span
                        ref="message"
                        class="message"
                        :class="{'message--novalid': valide.show}"
                        >
                        {{ errors.first('name') }}
                        </span>
                        <input v-model="user.surname" type="text" class="form__input" placeholder="Last name" v-validate="'required'" name="surname">
                        <span
                        ref="message"
                        class="message"
                        :class="{'message--novalid': valide.show}"
                        >
                        {{ errors.first('surname') }}
                        </span>
                    </div>
                    <input v-model="user.username" type="text" class="form__input" placeholder="Username" v-validate="'required'"
                    name="username">
                    <span
                    ref="message"
                    class="message"
                    :class="{'message--novalid': valide.show}"
                    >
                    {{ errors.first('username') }}
                    </span>
                    <input  v-model="user.email"
                            v-validate="{'required':true,regex: /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/}"
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
                    <button class="form__button"
                    type="submit">
                    Get started</button>
                </form>
            </div>
        </main>
    </div>
</template>
<script>
import HeaderComponent from '../../components/header.vue';
import api from '@/shared/services/api.axios'

export default {
  name: 'SignUp-1',
  components: {
    HeaderComponent,
  },
  data() {
      return{
        user:{
            name:'',
            surname:'',
            username:'',
            email:'',
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
    FirstStage(){
        this.$validator.validate().then(valid => {
        if (!valid) {
            this.valide.show = true
        }else{
            api.post('/api/auth/check-email',this.user).then((res) => {
                if(res.data.people.length===0){
                    localStorage.setItem('registration',JSON.stringify(this.user));
                    this.$router.push('/sign-up-2');
                }else{
                    alert('This mail is busy')
                }
            }).catch((err) => {
                alert(err);
            });
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
    margin-bottom: 0
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
.form__user-name
    display: flex
    .form__input
        width: 47.5%
        &:first-child
            margin-right: 5%
.message
  display: none
  margin-bottom: 10px 
.message--novalid
  color: tomato
  display: block
</style>


