<template>
    <form class="form" method="get">
        <div class="form__wrap">
            <label for="" class="form__label">Location</label>
            <select class="form__select">
                <option></option>
                <option>Пункт 2</option>
            </select>
        </div>
        <p>{{name}}</p>
        <div class="form__wrap">
            <label for="" class="form__label">Search</label>
            <input v-model='name' @input="searchName" class="form__input" placeholder="Enter name" name="name">
        </div>
        <div class="form__wrap">
            <label for="" class="form__label">Category</label>
            <select class="form__select">
                <option >Cat1</option>
                <option>Category1</option>
            </select>
        </div>
        <div class="form__wrap">
            <label for="" class="form__label">Service</label>
            <select class="form__select">
                <option>3 Service</option>
                <option>Пункт 2</option>
            </select>
        </div>
        <div class="form__wrap">
            <label class="form__label">Period</label>
            <input class="form__input" id="data">
        </div>
        <button class="form__button" type="submit">Search</button>
    </form>
</template>

<script>
import api from '../../shared/services/api.axios';
export default{
    data(){
        return{
            name: ""
        }
    },
    methods:{
        searchName(){
            console.log('dw')
            api.get
        }
    }
}
</script>

<style lang="sass" scoped>
@import '../../shared/style/variables.sass'
@import '../../shared/style/respond.sass'
.form
    display: flex
    width: 29%
    margin-top: 40px
    margin-left: 45px
    flex-wrap: wrap
    flex-direction: column
    border-right: 1px solid #E7EAF5
    box-shadow: 20px 0px 20px -15px rgba(85, 85, 85, 0.25)
    @include respond_tablet
        width: 100%
        box-shadow: none
        border: none
        align-items: center
        margin-left: 0
.form__wrap
    display: flex
    flex-direction: column
    width: 74%
    margin-bottom: 20px
.form__label
    margin-bottom: 5px
    font-weight: 500
    font-size: 12px
    line-height: 14px
    letter-spacing: 1px
    text-transform: uppercase
    color: $violet
.form__select,
.form__input
    background: #FCFCFC
    border: 2px solid $grayInput
    border-radius: 2px
    height: 45px
    outline: none
    padding-left: 13px
.form__button
    width: 74%
    height: 42px
    background-color: $lightGreen
    font-size: 16px
    font-family: $eho
    color: #fff
    border: none
    border-radius: 2px
    cursor: pointer
    margin-top: 14px
</style>
