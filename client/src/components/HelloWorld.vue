<template>
  <div >
    <img class="logo" src="../assets/logo_proxiad.png" />
    <h1>Hello, Welcome to Proxy DC</h1>
  <p>
    <router-link to="/addAccount">Add Account</router-link>
    <br/>
    <router-link to="/login">Login</router-link>
  </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
