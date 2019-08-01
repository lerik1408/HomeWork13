<template>
    <div>
        <header class="header">
            <header-component></header-component>
            <question-component></question-component>
        </header>
        <form-component></form-component>
    </div>
</template>

<script>
import HeaderComponent from '../components/siginIn/header.vue';
import QuestionComponent from '../components/siginIn/queNoHave.vue';
import FormComponent from '../components/siginIn/form.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent,
    QuestionComponent,
    FormComponent,
  }
}
</script>

<style lang="sass">
@import '../settings/base.sass'
@import '../settings/reset.sass'
@import '../settings/respond.sass'
@import '../settings/variables.sass'
body
  background-color: $grayMain
  font-family: 'Roboto', sans-serif
  font-size: 14px
</style>
