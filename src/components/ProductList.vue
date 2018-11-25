<template>
  <ul>
    <li v-for='product in products' :key='product.id'>
      {{ product.name }}
      <span class='price'>
        {{ product.price }} :-
      </span>
      <button @click="atc(product)">Add to cart</button>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'ProductList',
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {
    atc(product) {
      this.$store.commit('atc', product)
    }
  }
}
</script>

<style>
ul{
  border: thin dotted gray;
  padding: 2em;
  margin: 1em;
}
li{
  background-color: silver;
  color: white;
  font-family: 'verdana';
  font-weight: 700;
  border-radius: 8px;
  padding: 1em;
  min-height: 50px;
  margin: 1em;
}
ul.varukorg li{
  background-color: wheat;
}
.price {
  color: yellow;
  font-size: 1.5em;
  text-shadow: 2px 2px 3px red;
}
div {
  display: flex;
}
product-list, varu-korg {
  flex: 0 1 auto;
}

</style>
