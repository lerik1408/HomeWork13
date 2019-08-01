<template>
    <div>
        <header-component></header-component>
        <content-component></content-component>
    </div>
</template>
<script>
import HeaderComponent from '../components/siginUp/header';
import ContentComponent from '../components/siginUp/mailCheckForCreate/content';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    ContentComponent,
  }
}
</script>
<style lang="sass" scoped>

</style>

