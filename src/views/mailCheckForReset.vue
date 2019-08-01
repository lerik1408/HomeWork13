<template>
    <div>
        <header class="header">
            <header-component></header-component>
            <question-component></question-component>
        </header>
        <content-component></content-component>
    </div>
</template>
<script>
import HeaderComponent from '../components/siginIn/header.vue';
import QuestionComponent from '../components/entMailForReset/backSiginIn.vue';
import ContentComponent from '../components/mailCheckForReset/content.vue'


export default {
  name: 'app',
  components: {
    HeaderComponent,
    QuestionComponent,
    ContentComponent,
  }
}
</script>
<style lang="sass">

</style>

