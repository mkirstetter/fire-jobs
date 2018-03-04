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
@import '../node_modules/font-awesome/css/font-awesome.css';

.btn-loading {
  position: relative;
  pointer-events: none;
  color: transparent !important;

  &:after {
    animation: spinAround 500ms infinite linear;
    border: 2px solid $white;
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    content: "";
    display: block;
    height: 1em;
    width: 1em;
    position: absolute;
    left: calc(50% - (1em / 2));
    top: calc(50% - (1em / 2));
  }
}

@keyframes spinAround {
  from { transform: rotate(0deg); }
  to { transform: rotate(359deg); }
}

@media (min-width: 768px) {
  .form-group.row > .col-form-label {
    text-align: right;
  }
}
</style>
