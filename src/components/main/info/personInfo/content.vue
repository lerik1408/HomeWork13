<template>
    <div class="main__wrap">
        <nav-component v-bind:active="active"></nav-component>
        <section class="profile">
                <div class="profile__photo">
                    <img src="../../../../assets/img/profile/profile.png" alt="profile_img">
                    <div class="profile__link">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.62408 2.49908L8.98063 4.14914L4.80382 10.1143L2.4484 8.46399L6.62408 2.49908ZM10.0623 1.39465L9.0114 0.658776C8.60525 0.374386 8.04461 0.473243 7.75904 0.879601L7.05415 1.88629L9.41071 3.53637L10.2329 2.36212C10.4535 2.04709 10.3773 1.61522 10.0623 1.39465ZM1.89652 11.4646C1.889 11.6352 2.06306 11.7561 2.22012 11.6872L4.35705 10.7523L2.00163 9.10207L1.89652 11.4646Z" fill="#2A74DB"/>
                    </svg>
                    <a href="#">Change photo</a>
                    </div>
                </div>
                <form action="" class="profile__form form">
                    <div class="form__wrap">
                        <label for="" class="form__label">First name
                        </label>
                        <input type="text" id="name" class="form__input">
                    </div>
                    <div class="form__wrap">
                        <label for="surname" class="form__label">Last name
                        </label>
                        <input type="text" id="surname" class="form__input">
                    </div>
                    <div class="form__wrap">
                        <label for="" class="form__label">Title
                        </label>
                        <select class="form__select">
                            <option>MR</option>
                            <option>Пункт 2</option>
                        </select>
                    </div>
                    <div class="form__wrap">
                    <label for="" class="form__label">Mobile phone
                        </label>
                        <div class="form__wrap--special">
                        <select class="form__select form__select--phone">
                            <option><img src="img/profile/flag/singapur.png" alt="" srcset=""></option>
                            <option>Пункт 2</option>
                        </select>
                        <input type="text" class="form__input form__input--phone">
                        </div>
                    </div>
                        <div class="form__wrap">
                            <label for="" class="form__label">Country</label>
                            <select class="form__select form__select--country">
                                <option>UA</option>
                                <option>Пункт 2</option>
                            </select>
                    </div>
                    <div class="form__wrap">
                        <label for="" class="form__label">Company</label>
                        <input type="text" id="company" class="form__input">
                    </div>
                </form>
            </section>
    </div>
</template>

<script>
import navComponent from '../nav'
export default{
    components: {
        navComponent,
    },
    props: {
        active: Object
    }
}
</script>

<style lang="sass" scoped>
@import '../../../../settings/respond.sass'
@import '../../../../settings/variables.sass'
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
