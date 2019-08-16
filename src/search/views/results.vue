<template>
  <div>
    <aside-component v-bind:active="active"></aside-component>
    <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
    <main class="main">
      <section class="main__wrap">
        <form-component></form-component>
        <div class="content">
          <div class="control">
            <p class="control-text">SHOW MAP</p>
            <input type="checkbox" id="price" class="control__checkbox" />
            <label for="price" class="control__label">by price</label>
            <input type="checkbox" id="rating" class="control__checkbox" />
            <label for="rating" class="control__label">by rating</label>
          </div>
          <div class="people">
            <people-component
              v-for="people in peoples"
              v-bind:people="people"
              v-bind:key="people._id"
            ></people-component>
          </div>
          <!-- <div class="pagination"></div> -->
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import asideComponent from "../../components/aside";
import headerComponent from "../../components/header";
import formComponent from "../components/form";
import peopleComponent from "../components/people";
import api from '../../shared/services/api.axios';

export default {
  // name: "personal",
  data: function() {
    return {
      peoples: undefined,
      active: {
        search: true,
        
      },
      breadcrumbs: [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Search' },
        { id: 3, text: 'Results'},
      ],
      
        // peoples: [
        //         {id: 1,img:'../search/people1.png', name:'name 1',rating: 1,country: 'UA',skills: 'Node js',price: 500},
        //         {id: 2,img:'../search/people2.png', name:'name 2',rating: 2,country: 'USA',skills: 'JS',price: 1000},
        //         {id: 3,img:'../search/people3.png', name:'name 3',rating: 3,country: 'Poland',skills: 'C++',price: 5000}
        //     ]
    };
  },
  components: {
    asideComponent,
    headerComponent,
    formComponent,
    peopleComponent,
  },
  mounted: function(){

    if(this.$route.params.id){
      api.get(`http://localhost:3000/api/search/${this.$route.params.id}`).then((res) => {
        this.peoples = res.data.allPeople
        })
      } else {
        api.get('http://localhost:3000/api/search/people').then((res) => {
          this.peoples = res.data.allPeople
        })
      }
  }
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
.control-text
    font-weight: 700
    font-size: 12px
    color: $navyBlue
    text-transform: uppercase
    line-height: 14px
.control
    display: flex
    width: 100%
.control-text
    margin-right: auto
.control__label
    font-family: $Roboto
    font-style: normal
    font-weight: 300
    font-size: 14px
    margin-left: 20px
    &:last-child
        margin-right: 10%
.control__checkbox
    display: none
    & + label
        padding-left: 15px
        padding-top: 5px
        position: relative
        &::before
            position: absolute
            left: -10px
            top: 2px
            content: ""
            display: block
            border: 1px solid #F0F1F3
            width: 18px
            height: 18px
            border-radius: 50%
            
    &:checked + label::before
        background: radial-gradient(circle closest-side,$lightGreen  5px, #fff 6px)
.people
    width: 95%
    // background-color: red
    height: 418px
    margin-top: 31px
    display: flex
    flex-wrap: wrap
    overflow: auto
    @include respond_tablet
        width: 100%
</style>
