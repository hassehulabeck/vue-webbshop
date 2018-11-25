<template>
  <div id="app">
    <ProductList/>
    <Varukorg/>
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import Varukorg from './components/Varukorg.vue'

export default {
  name: 'app',
  components: {
    ProductList,
    Varukorg
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
