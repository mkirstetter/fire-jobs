<template>
  <div id="app">
    <fire-header></fire-header>
    <router-view/>
    <fire-footer></fire-footer>
  </div>
</template>

<script>
import FireHeader from './components/Header';
import FireFooter from './components/Footer';

export default {
  name: 'App',
  components: {
    FireHeader,
    FireFooter,
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
