<template>
    <ul class='varukorg' v-if="varukorg.length>0">
    <p>Total kostnad: {{ totalCost }} </p>
    <li v-for='vara,index in varukorg' :key='index'>
      {{ vara.name }}
      <span class='price'>
        {{ vara.price }} :-
      </span>
      <button @click="rfc(index)">X</button>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'Varukorg',
  computed: {
    varukorg() {
      return this.$store.state.varukorg
    },
    totalCost() {
      return this.$store.state.varukorg.reduce(function(accumulator, current) {
        return accumulator + current.price
      }, 0)
    }
  },
  methods: {
    rfc(index) {
      this.$store.commit('rfc', index)
    }
  }
}
</script>

<style scoped>
  li {
    background-color: wheat;
  }
</style>
