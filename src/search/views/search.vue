<template>
  <div>
    <aside-component v-bind:active="active"></aside-component>
    <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
    <main class="main">
      <section class="main__wrap">
        <form-component @category="search"></form-component>

          <div class="content">
            <p @click="switchTab" class="content__tab">{{textTab}}</p>
            <div v-if="!active.map" class="people">
              <people-component
                v-for="people in peoples"
                v-bind:people="people"
                v-bind:key="people._id"
              ></people-component>
            </div>
            <map-component v-if="active.map"></map-component>
            <div class="pagination" v-if="!active.map">
              <router-link v-for="page in pages" :to="{name: 'pagination',params: {id: page}}" :key="page">{{page}}</router-link>
            </div>

        </div>
      </section>
    </main>
  </div>
</template>

<script>
import asideComponent from '../../components/aside';
import headerComponent from '../../components/header';
import formComponent from '../components/form';
import peopleComponent from '../components/people';
import mapComponent from '../components/map';
import api from '../../shared/services/api.axios';

export default {
  name: 'search',
  data() {
    return {
      peoples: undefined,
      pages: 1,
      active: {
        search: true,
        map: false,
      },
      query: {
        name: '',
        category: '0',
        sort: '0',
      },
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
    formComponent,
    peopleComponent,
    mapComponent,
  },
  computed: {
    textTab() {
      if (!this.active.map) {
        return 'Show map';
      }
      return 'Show result';
    },
  },
  mounted() {
    api.post('/api/search/people/', this.query).then((res) => {
      this.peoples = res.data.allPeople;
      this.pages = Math.ceil(res.data.pages / this.peoples.length);
    });
  },
  // beforeUpdate(){
  //   api.post(`/api/search/people/${this.$route.params.id}`, this.query).then((res) => {
  //     console.log('aaaa')
  //     this.peoples = res.data.allPeople;
  //     this.pages = Math.ceil(res.data.pages/this.peoples.length);
  //   });
  // },
  methods: {
    search(params) {
      this.query = params;
      api.post('/api/search/people', this.query).then((res) => {
        this.peoples = res.data.allPeople;
      });
    },
    switchTab() {
      this.active.map = !this.active.map;
    },
  },
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
        height: 100%
        flex-direction: column
.people
  &::-webkit-scrollbar
    width: 8px
  &::-webkit-scrollbar-track
    border-radius: 4px
    background: rgba(56, 68, 99, 0.05)
  &::-webkit-scrollbar-thumb
    border-radius: 4px
    background: rgba(19, 66, 189, 0.1)
.content
  margin-top: 40px
  margin-left: 41px
  width: 100%
  @include respond_tablet
    margin: 0
.content__tab
  text-transform: capitalize
  font-family: $Roboto
  color: $navyBlue
  font-weight: 600
  cursor: pointer
.people
    width: 95%
    height: 418px
    margin-top: 31px
    display: flex
    flex-wrap: wrap
    overflow: auto
    @include respond_tablet
      width: 100%
.pagination
  display: flex
  justify-content: center
  align-items: center
  margin-top: 15px
.pagination>a
  margin-right: 10px
  font-size: 20px
  color: $navyBlue
  text-decoration: none
</style>
