<template>
  <div>
    <aside-component v-bind:active="active"></aside-component>
    <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
    <main class="main">
      <div class="main__wrap">
          <section class="person">
              <div class="person__avatar">
                <img :src="profile.photo" alt="person">
              </div>
              <div class="person__content">
                <div class="person__name__wrap">
                    <p class="person__info">name</p>
                    <p class="person__info">{{profile.name}}</p>
                </div>
                <div class="person__surname__wrap">
                    <p class="person__info">surname</p>
                    <p class="person__info">{{profile.surname}}</p>
                </div>
                <div class="person__email__wrap">
                    <p class="person__info">E-mail</p>
                    <p class="person__info">{{profile.email}}</p>
                </div>
                <div class="person__phone__wrap">
                    <div class="person__info">Stack</div>
                    <div class="person__info">{{profile.stack[0].name}}</div>
                </div>
              </div>
          </section>
      </div>
    </main>
  </div>
</template>

<script>
import asideComponent from '../../components/aside';
import headerComponent from '../../components/header';
import api from '../../shared/services/api.axios';

export default {
  // name: "personal",
  data() {
    return {
      active: {
        search: true,
      },
      profile: {},
      breadcrumbs: [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Search' },
        { id: 3, text: 'Results' },
      ],
    };
  },
  components: {
    asideComponent,
    headerComponent,
  },
  mounted() {
    // api.init('https://api-my-fixer.herokuapp.com');
    // api.init('http://localhost:3000');
    api.get(`/api/search/profile${this.$route.params.id}`).then((res) => {
    //   this.peoples = res.data.allPeople'
    // console.log(res)
      this.profile = res.data.profile;
    });
  },

  //   methods:{

//   }
};
</script>

<style lang="sass" scoped>
@import '../../shared/style/variables.sass'
@import '../../shared/style/respond.sass'
main
    display: flex
    margin-left: 80px
    background-color: $grayMain
    @include respond_tablet
        margin-left: 0
.main__wrap
    display: flex
    width: 90%
    height: 556px
    margin: auto
    margin-top: 25px
    border-radius: 4px
    background-color: #fff
    box-shadow: 0 0 30px rgba(153, 163, 174, 0.06)
    @include respond_bigTablet
        width: 100%
    @include respond_tablet
        width: 97%
        flex-direction: column
.person
    display: flex
    width: 100%
    margin-top: 100px
    justify-content: flex-centet
    align-content: center
.person__content
    margin-left: 20px
.person__content>*
    margin-top: 10px
.person__info
    padding-left: 30px
    font-size: 20px
    font-family: $eho
    color: $navyBlue
    &:last-child
        padding-left: 60px
        padding-top: 10px
.person__contact
    display: flex
.person__contact>*
    padding-left: 60px
    font-size: 24px
    font-family: $eho
    color: $navyBlue
</style>
