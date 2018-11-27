<template>
    <div>
      <h1> {{ user.name }} </h1>
      <span class='price'>
        {{ user.age }}
      </span>
    </div>
</template>

<script>

export default {
  name: 'User',
  computed: {
    user() {
      var id = this.$route.params.id;
      return this.$store.state.users.find(function(user) {
        return user.id == id
      })
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
