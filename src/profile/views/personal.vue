<template>
    <div>
      <aside-component v-bind:active="active"></aside-component>
      <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
      <main class="main">
              <div class="main__wrap">
        <nav-component v-bind:active="active"></nav-component>
        <section class="profile">
                <div class="profile__photo">
                    <img :src="person.photo" alt="profile_img">
                    <div class="profile__link">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62408 2.49908L8.98063 4.14914L4.80382 10.1143L2.4484 8.46399L6.62408 2.49908ZM10.0623 1.39465L9.0114 0.658776C8.60525 0.374386 8.04461 0.473243 7.75904 0.879601L7.05415 1.88629L9.41071 3.53637L10.2329 2.36212C10.4535 2.04709 10.3773 1.61522 10.0623 1.39465ZM1.89652 11.4646C1.889 11.6352 2.06306 11.7561 2.22012 11.6872L4.35705 10.7523L2.00163 9.10207L1.89652 11.4646Z" fill="#2A74DB"/>
                    </svg>
                    <label for="file" href="#">Change photo</label>
                    <input @change="updatePhoto($event)" type="file" class="form__input--file" id="file" ref=file>
                    </div>
                </div>
                <form action="" class="profile__form form">
                    <div class="form__wrap">
                        <label for="" class="form__label">First name
                        </label>
                        <input @input="updateData($event)" type="text" id="name" class="form__input" v-model="person.name">
                    </div>
                    <div class="form__wrap">
                        <label for="surname" class="form__label">Last name
                        </label>
                        <input @change="updateData" type="text" id="surname" class="form__input" v-model="person.surname">
                    </div>
                    <div class="form__wrap">
                        <label for="" class="form__label">Title
                        </label>
                        <select @change="updateData" class="form__select" v-model="person.gender">
                            <option :selected="person.gender=='Mr'">Mr</option>
                            <option :selected="person.gender=='undefined?'">undefined?</option>
                            <option :selected="person.gender=='Ms'">Ms</option>
                        </select>
                    </div>
                    <div class="form__wrap">
                    <label for="" class="form__label">Mobile phone
                        </label>
                        <div class="form__wrap--special">
                        <select v-model="prefix" class="form__select form__select--phone">
                            <option selected >+380</option>
                            <option>+044</option>
                        </select>
                        <input @change="updateData" type="text" class="form__input form__input--phone" v-model="person.mobile">
                        </div>
                    </div>
                    <div class="form__wrap">
                        <label for="" class="form__label">Country</label>
                        <select @change="updateData" class="form__select form__select--country" v-model="person.country">
                            <option :selected="person.country=='Ukrain'">Ukraine</option>
                            <option :selected="person.country=='Poland'">Poland</option>
                        </select>
                    </div>
                    <div class="form__wrap">
                        <label for="" class="form__label">Company</label>
                        <input @change="updateData" type="text" id="company" class="form__input" v-model="person.company">
                    </div>
                </form>
            </section>
    </div>
      </main>
    </div>
</template>

<script>
import asideComponent from '../../components/aside';
import headerComponent from '../../components/header';
import navComponent from '../components/nav';
import api from '../../shared/services/api.axios';

export default {
  name: 'personal',
  data() {
    return {
      active: {
        info: true,
        person: true,
      },
      breadcrumbs: [
        { id: 1, text: 'Home' },
        { id: 2, text: 'My profile' },
      ],
      person: {},
      prefix: '',
    };
  },
  components: {
    asideComponent,
    headerComponent,
    navComponent,
  },
  mounted() {
    api.setHeader();
    // api.init('https://api-my-fixer.herokuapp.com');
    // api.init('http://localhost:3000');
    api.get('/api/profile/person').then((res) => {
      this.person = res.data.user;
    });
  },
  methods: {
    updateData(event) {
      let timer = setTimeout(() => {
        api.put('/api/profile/person', this.person)
          .then((res) => {
            alert(`profile changed`);
          }).catch((err) => {
            alert(err);
          });
      }, 1000);
    },
    // updateSurname() {
    //   setTimeout(() => {
    //     api.put('/api/profile/person', this.person)
    //       .then((res) => {
    //         alert(`You changed the surname to ${res.data.surname}`);
    //       }).catch((err) => {
    //         alert(err);
    //       });
    //   }, 2000);
    // },
    // updateCompany() {
    //   setTimeout(() => {
    //     api.put('/api/profile/person', this.person)
    //       .then((res) => {
    //         alert(`You changed the company to ${res.data.company}`);
    //       }).catch((err) => {
    //         alert(err);
    //       });
    //   }, 2000);
    // },
    // updateCountry() {
    //   setTimeout(() => {
    //     api.put('/api/profile/person', this.person)
    //       .then((res) => {
    //         alert(`You changed the country to ${res.data.country}`);
    //       }).catch((err) => {
    //         alert(err);
    //       });
    //   }, 2000);
    // },
    updateMobile() {
      setTimeout(() => {
        const mobile = `${this.prefix}${this.person.mobile}`;
        api.put('/api/profile/person', this.person)
          .then(() => {
            alert(`You changed the phone to ${mobile}`);
          }).catch((err) => {
            alert(err);
          });
      }, 2000);
    },
    // updateGender() {
    //   setTimeout(() => {
    //     api.put('/api/profile/person', this.person)
    //       .then((res) => {
    //         alert(`You changed the gender to ${res.data.gender}`);
    //       }).catch((err) => {
    //         alert(err);
    //       });
    //   }, 2000);
    // },
    updatePhoto(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.set('photo', file);
      api.put('/api/profile/photo', formData)
        .then((res) => {
          alert(`You changed the photo to ${res.data.photo}`);
          this.profile.photo = res.data.photo;
        });
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
