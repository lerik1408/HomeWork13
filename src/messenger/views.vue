<template>
    <div>
      <aside-component v-bind:active="active"></aside-component>
      <header-component v-bind:breadcrumbs="breadcrumbs"></header-component>
      <main class="main">
    <div class="main__wrap">
        <section class="friends-list">
            <div class="friend" v-for="user in users" v-bind:key="user.img" v-bind:class="{'friend-active': user.active}">
            <img v-bind:src="user.img" alt="Face">
            <!-- <img src="../../../assets/img/mainContent/messenger/fr1.png" alt="" srcset=""> -->
            <div class="friend__content-wrap">
                <h3 class="friend__name">{{user.name}}
                        <svg v-if="user.mute" width="8" height="10" viewBox="0 0 8 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.98809 6.27886C2.00229 6.27886 2.03069 6.27886 2.03069 6.27886L5.68025 2.37696V0.800897C5.68025 0.54077 5.38203 0.403056 5.19743 0.556072L2.17269 3.15734C2.13009 3.18794 2.05909 3.21854 1.98809 3.21854H0.255611C0.0994042 3.21854 0 3.35626 0 3.52458V5.97283C0 6.14114 0.0852036 6.27886 0.255611 6.27886H1.98809Z" fill="#9BA0AD"/>
                            <path d="M7.90954 1.04591C7.79594 0.923498 7.62553 0.923498 7.51193 1.04591L0.156005 8.97212C0.0423995 9.09454 0.0423995 9.27816 0.156005 9.40057C0.212807 9.46177 0.28381 9.49238 0.354813 9.49238C0.425816 9.49238 0.496819 9.46177 0.553622 9.40057L2.85412 6.92171L5.21143 8.92622C5.39603 9.07924 5.69425 8.94152 5.69425 8.68139V3.92261L7.93794 1.48966C8.03735 1.36724 8.00895 1.16832 7.90954 1.04591Z" fill="#9BA0AD"/>
                        </svg>
                    </h3>
                    <p class="friend__status">{{user.status}}</p>
                    <time class="friend__time">{{user.time}}</time>
                </div>
            </div>
        </section>
        <section class="chat">
            <section class="chat__search search">
                <label for="" class="search__item">
                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.6172 10.499L14.0684 14.1387C14.3604 14.4463 14.3506 14.9375 14.0474 15.2334C13.9045 15.373 13.7163 15.4492 13.5181 15.4492C13.3086 15.4492 13.113 15.3652 12.9678 15.2119L9.49023 11.5449C8.50293 12.248 7.3479 12.6191 6.13599 12.6191C2.90771 12.6191 0.28125 9.95605 0.28125 6.68262C0.28125 3.40918 2.90771 0.746094 6.13599 0.746094C9.36426 0.746094 11.9907 3.40918 11.9907 6.68262C11.9907 8.08301 11.5044 9.42969 10.6172 10.499ZM10.4634 6.68262C10.4634 4.26367 8.52222 2.29492 6.13599 2.29492C3.74976 2.29492 1.80859 4.26367 1.80859 6.68262C1.80859 9.10254 3.74976 11.0703 6.13599 11.0703C8.52222 11.0703 10.4634 9.10254 10.4634 6.68262Z" fill="#BBC3CF"/>
                    </svg>
                    <input type="text" class="search__input">
                </label>
            </section>
            <section class="chat__mails dialogue">
                <div class="dialogue__message" v-for="(message, i) in messages" :key="i" v-bind:class="[message.img ? 'dialogue__message--another': 'dialogue__message--user']">
                    <img v-if="message.img" v-bind:src="message.img" alt="Face">
                    <div class="message__wrap">
                        <p class="message__wrap-text">{{message.text}}</p>
                        <time class="message__wrap-time">{{message.time}}</time>
                    </div>
                </div>
            </section>
            <section class="chat__send write">
                <textarea  id="s" class="write__text" placeholder='Write a message…'></textarea>
                <div class="write__item write__item-smile">
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2242 3.44495C12.7132 -0.115601 7.00052 -0.115601 3.49002 3.44397C-0.0209656 7.00354 -0.0207214 12.7955 3.49051 16.3561C7.00052 19.9156 12.7132 19.9156 16.2239 16.3551C19.7346 12.7955 19.7344 7.00354 16.2242 3.44495ZM15.2417 15.359C12.2727 18.3698 7.44144 18.3698 4.4722 15.36C1.50247 12.3483 1.50296 7.44983 4.4722 4.43909C7.44144 1.42834 12.2725 1.42834 15.2422 4.43909C18.2112 7.44983 18.2107 12.3492 15.2417 15.359ZM7.55081 6.36096C6.96951 6.36096 6.49832 6.8385 6.49832 7.42834C6.49832 8.01721 6.96951 8.49573 7.55081 8.49573C8.13162 8.49573 8.60306 8.01721 8.60306 7.42834C8.60306 6.8385 8.13162 6.36096 7.55081 6.36096ZM11.2705 7.42834C11.2705 6.8385 11.7422 6.36096 12.3233 6.36096C12.9043 6.36096 13.3755 6.8385 13.3755 7.42834C13.3755 8.01721 12.9043 8.49573 12.3233 8.49573C11.7422 8.49573 11.2705 8.01721 11.2705 7.42834ZM9.86746 14.316C11.5789 14.316 13.1062 13.3278 13.7586 11.7985C13.8701 11.5367 13.7513 11.233 13.4932 11.1198C13.2351 11.0065 12.9356 11.1276 12.8238 11.3893C12.333 12.5406 11.1724 13.2838 9.86746 13.2838C8.53201 13.2838 7.36478 12.5406 6.89334 11.3903C6.81204 11.191 6.62259 11.0719 6.42313 11.0719C6.35794 11.0719 6.29178 11.0846 6.22781 11.111C5.96805 11.2203 5.845 11.5231 5.95291 11.7858C6.58255 13.3229 8.11917 14.316 9.86746 14.316Z" fill="#BBC3CF"/>
                    </svg>
                </div>
                <div class="write__item write__item-clip">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.487 2.31344C16.4696 0.267914 13.1981 0.267914 11.1808 2.31344L1.13524 12.499C-0.378414 14.0338 -0.378414 16.5206 1.13524 18.0555C2.38285 19.3205 4.26462 19.5247 5.73568 18.7037C5.88935 18.6958 6.04046 18.6369 6.15802 18.519L16.2035 8.33343C17.2122 7.31069 17.2122 5.6528 16.2035 4.63006C15.1948 3.60733 13.5598 3.60733 12.5511 4.63006L4.33178 12.964C4.07991 13.2193 4.07991 13.6345 4.33178 13.8898C4.58364 14.1452 4.99306 14.1452 5.24487 13.8898L13.4642 5.55589C13.9692 5.04386 14.7867 5.04386 15.2904 5.55589C15.7954 6.06792 15.7954 6.89684 15.2904 7.4076L5.70082 17.1309C4.69215 18.1536 3.05706 18.1536 2.04839 17.1309C1.03972 16.1082 1.03972 14.4503 2.04839 13.4275L12.0939 3.23927C13.6075 1.7045 16.0602 1.7045 17.5739 3.23927C19.0875 4.77404 19.0875 7.26085 17.5739 8.79568L8.44146 18.0555C8.18959 18.3108 8.18959 18.726 8.44146 18.9813C8.69333 19.2367 9.10274 19.2367 9.35455 18.9813L18.487 9.72151C20.5043 7.67603 20.5043 4.35897 18.487 2.31344Z" fill="#BBC3CF"/>
                    </svg>
                </div>
                <div class="write__item write__item-send">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.9726 0.978285L0.548796 10.5489C-0.209082 10.9424 -0.17799 11.5191 0.617199 11.831L2.96934 12.7519C3.76298 13.063 4.96625 12.8944 5.64096 12.3716L15.8564 4.3918C16.528 3.86741 16.6003 3.94519 16.0165 4.56429L7.94024 13.1293C7.35493 13.7461 7.52905 14.5022 8.32501 14.8095L8.60018 14.9165C9.39615 15.2214 10.6974 15.7343 11.4894 16.0546L14.0981 17.1064C14.891 17.426 15.5392 17.6909 15.5392 17.6955C15.5392 17.7001 15.5439 17.7148 15.5478 17.7155C15.5517 17.7171 15.739 17.0502 15.9629 16.2325L19.9411 1.75062C20.165 0.932083 19.7305 0.585573 18.9726 0.978285Z" fill="#0AD69C"/>
                    </svg>
                </div>
            </section>
        </section>
    </div>
</main>
    </div>
</template>

<script>
import asideComponent from '../components/aside';
import headerComponent from '../components/header';


export default{
    name: 'messenger',
    data: function () {
        return{
            active: {
                messenger: true,
            },
            breadcrumbs: [
                {id: 1,text: 'Home'},
                {id: 2,text: 'Network'}
            ],
            users: [
                {
                name: 'Miranda Hops', status: 'Excepteur sint occaecatar…', time: '9:32', img: '../messenger/fr1.png', mute: true,
                }, {
                name: 'Barry Callebaut', status: 'Nemo enim ipsam volupta…', time: '22:01', img: '../messenger/fr2.png',
                }, {
                name: 'Stacey Dosh', status: 'Ut enim ad minima veniam…', time: '19:15', img: '../messenger/fr3.png', active: true,
                }, {
                name: 'Michael Kors', status: 'To take a trivial example…', time: '13:49', img: '../messenger/fr4.png',
                }, {
                name: 'Johny Cash', status: 'Great explorer of the truth…', time: '10:25', img: '../messenger/fr5.png',
                }, {
                name: 'Stacey Dosh', status: 'Ut enim ad minima veniam…', time: '9:32', img: '../messenger/fr6.png',
                }
            ],
            messages: [
                {img: '../messenger/fr3.png', text: 'On the other hand, we denounce with righteous indignation!', time: '01:14' },{ text: 'Which is the same as saying?', time: '01:38' }, { img: '../messenger/fr3.png', text: 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures', time: '02:05' },{ text: 'To take a trivial example, which of us ever undertakes)', time: '03:25' },{ img: '../messenger/fr3.png', text: 'But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures', time: '02:05' },{ text: 'To take a trivial example, which of us ever undertakes)', time: '03:25' },
            ],
        }
    },
    components: {
        asideComponent,
        headerComponent,
    }
}
</script>

<style lang="sass" scoped>
@import '../shared/style/variables.sass'
@import '../shared/style/respond.sass'
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
  @include respond_bigTablet
    width: 100%
  @include respond_tablet
    width: 97%
  border-radius: 4px
  background-color: #fff
  box-shadow: 0 0 30px rgba(153, 163, 174, 0.06)

.friends-list
  border-right: 1px solid $grayBorder
  @include respond_tablet
    border-right: 2px solid $grayBorder

.friend
  display: flex
  position: relative
  align-items: center
  width: 300px
  height: 90px
  padding-left: 20px
  cursor: pointer
  @include respond_tablet
    width: auto
    padding-left: 0
  
.friend-active
  box-shadow: 0 5px 5px rgba(190, 200, 212, 0.2), 0 -5px 5px rgba(224, 224, 224, 0.15)
.friend__content-wrap
  margin-left: 14px
  @include respond_tablet
    display: none

.friend__name
  display: inline
  position: relative
  color: $navyBlue
  font-family: $eho
  font-size: 16px
  line-height: 30px

.friend:nth-child(2n-1) h3::after
  display: block
  position: absolute
  top: 0
  right: -10px
  width: 6px
  height: 6px
  border-radius: 50%
  background-color: $lightGreen
  content: ""

.friend__status
  color: $darkBlue
  font-size: 14px
  line-height: 18px
  opacity: 0.43

.friend__time
  position: absolute
  top: 10px
  right: 10px
  color: $grayTime
  font-size: 14px
  @include respond_tablet
    display: none
/* CHAT

.chat
  width: 100%

.chat__search
  display: flex
  align-items: center
  width: 100%
  height: 50px
  border-bottom: 1px solid #f5f6f9

.search__item
  width: 100%
  margin-left: 22px

.search__input
  width: 80%
  margin-left: 22px
  border: 0
  outline: none
  font-family: $Roboto
  font-size: 14px

.chat__mails
  display: flex
  flex-direction: column
  flex-grow: 1
  flex-wrap: nowrap
  height: 446px
  overflow: auto

.dialogue__message
  display: flex
  flex-shrink: 5
  margin-top: 15px

.dialogue__message--another img
  align-self: flex-end
  width: 36px
  height: 36px
  margin-right: 11px
  margin-left: 21px
  object-fit: contain

.dialogue__message .message__wrap
  display: flex
  position: relative
  width: 54.24%
  border-radius: 5px
  background: #f7f9fc
  line-height: 20px

.dialogue__message--another .message__wrap::before
  position: absolute
  bottom: 0
  left: -9px
  width: 10px
  height: 10px
  transform: rotate(-10deg)
  background: linear-gradient(-45deg, #f7f9fc 50%, #fff 50%)
  content: ""

.dialogue__message--user
  // align-self: flex-end
  justify-content: flex-end
  margin-right: 46px
  .message__wrap::after
    position: absolute
    right: -9px
    bottom: 0
    width: 10px
    height: 10px
    transform: rotate(10deg)
    background: linear-gradient(45deg, #f7f9fc 50%, #fff 50%)
    content: ""

.message__wrap-text
  width: 76.6%
  padding: 11px 0 12px 14px
  color: $grayDark
  line-height: 20px

.message__wrap-time
  position: absolute
  right: 10px
  bottom: 12px
  color: $grayTime
  font-size: 12px
  letter-spacing: 0.428571px

.chat__send
  display: flex
  align-items: center
  height: 60px
  box-shadow: 0 0 20px rgba(153, 163, 174, 0.14654)

.write__text
  flex-grow: 1
  width: auto
  margin-left: 22px
  padding-top: 20px
  border: 0
  outline: none
  font-family: $Roboto
  font-size: 14px
  resize: none

.write__item
  &:last-child
    display: flex
    align-items: center
    justify-content: center
    width: 35px
    height: 35px
    margin-right: 20px
    border-radius: 7px
    box-shadow: 0 0 15px rgba(153, 163, 174, 0.25926)
    &:hover
      transition: 1s ease
      box-shadow: 0 0 58px -2px rgba(0, 0, 0, 0.75)
  margin-left: 2%
  cursor: pointer
  
.chat__mails
  &::-webkit-scrollbar
    width: 8px
  &::-webkit-scrollbar-track
    border-radius: 4px
    background: rgba(56, 68, 99, 0.05)
  &::-webkit-scrollbar-thumb
    border-radius: 4px
    background: rgba(19, 66, 189, 0.1)
</style>
