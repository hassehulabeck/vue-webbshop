<template>
  <ul>
    <li v-for='user in users' :key='user.id'>
      {{ user.name }}
      <span class='price'>
        {{ user.age }}
      </span>
      <router-link :to="{ name: 'user', params: {name:user.name, id:user.id} }">Läs mer</router-link>
    </li>
  </ul>
</template>

<script>

export default {
  name: 'Users',
  computed: {
    users() {
      return this.$store.state.users
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
