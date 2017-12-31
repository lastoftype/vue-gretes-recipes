<template>
  <div class="logo-wrapper" v-bind:class="{ hidden: currentRoute === 'home' }">
      <router-link class="arrow" :to="{name: 'home'}" v-bind:class="{ hidden: currentRoute === '/' }"></router-link>
      <router-link class="logo" :to="{name: 'home'}">Grete's Recipes</router-link>
    </div>
</template>

<script>
export default {
  name: 'logo',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    currentRoute() {
      return this.$route.name
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>