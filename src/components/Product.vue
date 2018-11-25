<template>
  <div class='product'>
    {{ product.name }}
    <p>{{ product.description }}</p>
    <button @click="atc(product)">Add to cart</button>
  </div>
</template>

<script>

export default {
  name: 'Product',
  computed: {
    product() {
      var id = this.$route.params.id;
      return this.$store.state.products.find(function(product) {
        return product.id == id
      })
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
.product{
  background-color: silver;
  color: white;
  font-family: 'verdana';
  font-weight: 700;
  border-radius: 8px;
  padding: 1em;
  min-height: 50px;
  margin: 1em;
}
p{
    font-weight: 200;
    margin: 2em;
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
