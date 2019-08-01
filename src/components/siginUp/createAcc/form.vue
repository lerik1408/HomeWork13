<template>
    <main class="main">
        <div class="main__wrap">
            <form action="" method="get" class="form">
                <h3 class="form__headline">Complete your account</h3>
                <input type="text" class="form__input" placeholder="Create a password" id="pass">
                <div class="bar">
                    <div class="bar__item"></div>
                    <div class="bar__item"></div>
                    <div class="bar__item"></div>
                </div>
                <input type="text" class="form__input" placeholder="Confirm password">
                <div class="checkboxs">
                    <div class="checkbox">
                        <input type="checkbox" class="input__checkbox" id="agreefirst">
                        <label for="agreefirst" class="form__label label">agree to the myFixer.com<a href="#" class="label__link">Terms of Service</a></label>
                    </div>
                    <div class="checkbox">
                        <input type="checkbox" class="input__checkbox" id="agreesec">
                        <label for="agreesec" class="form__label label">agree to the myFixer.com<a href="#" class="label__link">Privacy Policy</a></label>
                    </div>
                </div>
                <button class="form__button">Get started</button>
                <p>{{mess}}</p>
            </form>
        </div>
    </main>
</template>
<script>
export default {
    data: function () {
        return {
            mess: 0
        }
    },
    methods: {
        kk: function(){
            console.log('dwdw')
        }
    }
}
</script>
<style lang="sass" scoped>
@import '../../../settings/respond.sass'
@import '../../../settings/variables.sass'
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
.checkboxs
    margin-top: 18px
.checkbox
    margin-top: 15px
.form__label
    color: $grayDark
    padding-left: 20px
    font-weight: 300
    font-size: 13px
    @include respind_smartphone
        font-size: 10px
.label__link
    color: $blue
    margin-left: 5px
    text-decoration: none
.input__checkbox
    opacity: 0
.checkbox label::before
    content: ""
    display: inline-block
    height: 24px
    width: 22px
    border: 2px solid #F2F2F2
    border-radius: 2px

.checkbox label::after 
    content: ""
    display: inline-block
    height: 6px
    width: 15px
    border-left: 2px solid $lightGreen
    border-bottom: 2px solid $lightGreen
    transform: rotate(-45deg)

.checkbox label 
    position: relative
.checkbox label::before,
.checkbox label::after 
    position: absolute
.checkbox label::before 
    left: -20px
.checkbox label::after 
    left: -17px
    top: 5px

.checkbox input[type="checkbox"] + label::after 
    content: none

.checkbox input[type="checkbox"]:checked + label::after 
    content: ""
    background-color: rgba(245, 247, 250, 0.5)
.checkbox input[type="checkbox"]:focus + label::before 
    outline: rgb(59, 153, 252) auto 5px

.form__input
    margin-bottom: 7px
.bar
    width: 100%
    height: 6px
    display: none
    background-color: #fff
    margin-bottom: 21px
.bar--active
    display: flex
.bar__item
    width: 33%
    margin-right: 1.25%
    height: 6px
    background-color: $grayInput
    border-radius: 2px
    &:last-child
        margin-right: 0
.bar__item--low
    background: $low
.bar__item--normal
    background: $normal
.bar__item--good
    background: $good
</style>
