<template>
<div class="content">
    <div class="control">
        <p class="control-text">SHOW MAP</p>
        <input type="checkbox" id="price" class="control__checkbox">
        <label for="price"
                class="control__label">by price</label>
        <input type="checkbox" id="rating" class="control__checkbox">
        <label for="rating" class="control__label">by rating</label>
    </div>
    <div class="people">
        <component-people-item v-for="people in peoples" v-bind:people="people" v-bind:key="people.id"></component-people-item>
    </div>
    <div class="pagination">
    </div>
</div>
</template>

<script>
import componentPeopleItem from './peopleItem'

export default{
    components:{
        componentPeopleItem,
        
    },
    props: {
        inp: String,
        peoples: Array,
    },
}
</script>

<style lang="sass" scoped>
@import '../../../../settings/respond.sass'
@import '../../../../settings/variables.sass'
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
