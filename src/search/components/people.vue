<template>
    <div class="people__item">
        <img :src="people.photo" class="people__img" alt="face">
        <div class="people__content">
            <div class="people__headline">
                <p class="people__name">{{people.name+' '+ people.surname}}</p>
                    <component-rating v-bind:rating="people.rating"></component-rating>
                </div>
                <div class="people__position">
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.49985 0C1.57013 0 3.63724e-08 1.57013 3.63724e-08 3.50005C3.63724e-08 4.00345 0.103034 4.48408 0.306086 4.92871C1.18115 6.84355 2.85888 8.86522 3.35236 9.43916C3.38933 9.48207 3.44323 9.50678 3.49995 9.50678C3.55667 9.50678 3.61057 9.48207 3.64755 9.43916C4.14083 8.86532 5.81856 6.84375 6.69391 4.92871C6.89706 4.48408 7 4.00345 7 3.50005C6.99981 1.57013 5.42968 0 3.49985 0ZM3.49985 5.31799C2.49744 5.31799 1.68182 4.50237 1.68182 3.49995C1.68182 2.49744 2.49744 1.68182 3.49985 1.68182C4.50227 1.68182 5.31789 2.49744 5.31789 3.49995C5.31798 4.50237 4.50237 5.31799 3.49985 5.31799Z" fill="#2A74DB"/>
                    </svg>
                    <p class="country">{{people.country}}</p>
                </div>
                <div class="people__stack stack">
                    <p class="stack__stack">Stack: </p>
                    <p class="stack__skills">{{people.stack[0].name}}</p>
                    <router-link :to="'profile/'+people._id" class="stack__link">More</router-link>
                </div>
                <div class="people__price price">
                    <p class="price__text">Base Daily Rate:</p>
                    <p class="price__price">{{people.dailyRate}}</p>
                    <p class="price__text">$</p>
                </div>
            </div>
        </div>
</template>

<script>
import componentRating from './rating'
export default{
    props: {
        inp: String,
        people: Object,
    },
    components: {
        componentRating,
    }
}
</script>

<style lang="sass" scoped>
@import '../../shared/style/variables.sass'
@import '../../shared/style/respond.sass'
.people__item
    width: 45%
    height: 150px
    border: 1px solid rgba(237, 237, 237, 0.2)
    box-sizing: border-box
    box-shadow: -2px 9px 30px rgba(23, 31, 76, 0.02)
    border-radius: 2px
    margin-top: 10px
    margin-bottom: 10px
    display: flex
    align-items: center
    &:nth-child(2n-1)
        margin-left: 41px
    &:nth-child(2n)
        margin-left: 18px
    @include respind_miniNotebook
        width: 100%
        justify-content: center
        &:nth-child(2n-1)
            margin-left: 0px
        &:nth-child(2n)
            margin-left: 0px
.people__img
    margin-left: 30px
    width: 76px
    height: 76px
    border-radius: 50%
    @include respind_smartphone
        margin-left: 0
.people__content
    width: 100%
    margin-left: 16px
.people__headline
    display: flex
    align-items: center
.people__name
    font-size: 16px
    line-height: 28px
    font-weight: normal
.people__position
    display: flex
    align-items: center
    margin-bottom: 6px
.country
    font-weight: 300
    margin-left: 3px
.people__stack
    display: flex
    align-items: center
    font-size: 12px
    line-height: 12px
    margin-bottom: 6px
.stack__stack
    font-weight: 700
    color: $navyBlue
    margin-right: 3px
.stack__skills
    font-weight: 300
.stack__link
    margin-left: 5px
    color: $blue
    font-size: 12px
    line-height: 12px
    text-decoration: none
.people__price
    display: flex
    align-items: center
    font-size: 12px
    line-height: 12px
.price__text
    font-weight: 700
    color: $navyBlue
    margin-right: 3px
</style>
