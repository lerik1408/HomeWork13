<template>
    <div>
        <header-component></header-component>
        <form-component></form-component>
    </div>
</template>
<script>
import HeaderComponent from '../components/siginUp/header';
import FormComponent from '../components/siginUp/createAcc/form';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    FormComponent,
  }
}
</script>
<style lang="sass">

</style>

