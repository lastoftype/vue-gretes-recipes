<template>
  <div class="nav-wrapper">
    <div class="nav-container">
      <div class="navbar">
        <logo />
        <div class="add-recipe-button-wrapper">
          <!-- <router-link class="add-recipe-button" :to="{name: 'add-recipe'}">&#43; Add recipe</router-link> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import Logo from '@/components/Logo.vue';

export default {
  name: 'nav',
  components: {
    Logo
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

$nor-red: #C50B1E;
$nor-blue: #002868;
$nor-blue-light: mix(white, $nor-blue, 60%);
$font-family: 'Work Sans', serif;
$title-family: 'Eczar', sans-serif;

.nav-wrapper {
  position: relative;
  
  // background-color: lighten(#99A9C3, 30%);
  background-image: url(../assets/border.jpg);
  background-size: 500px;
  background-position: bottom center;
  background-repeat: repeat-x;

  @media print {
      display: none;
  }

  @media screen and (min-width: 767px) {
      margin-bottom: 15px;
  }

}

.logo-wrapper {
  flex: 1 1 auto;
  width: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px 45px;
  transition: all 150ms ease-in-out;
  transform: scale(1) translate(0, 0);
  opacity: 1;

  @media screen and (max-width: 768px) {
      font-size: 100%;
      padding: 20px;
      font-weight: normal;
  }

  &.hidden {
    transition: all 150ms ease-in-out 250ms;
    transform: scale(1) translate(-5px, 0);
    opacity: 0;
  }
}

.add-recipe-button-wrapper {
  padding: 20px 45px;
}

.add-recipe-button {
  font-family: $title-family;
  color: rgba($nor-red, 1);
  text-decoration: none;
  display: inline-block;

  @media screen and (max-width: 768px) {
    font-size: 100%;
    font-weight: normal;
  }

  &:hover {
    text-decoration: underline;
  }
}

.logo {
  font-family: $title-family;
  color: rgba($nor-blue, 1);
  text-decoration: none;
  display: inline-block;

  @media screen and (max-width: 768px) {
      font-size: 100%;
      font-weight: normal;
  }

  

  &:hover {
    text-decoration: underline;
  }
}

.navbar {
  border-bottom: 1px solid $nor-blue-light;
  display: flex;
  justify-content: space-between;
  overflow: hidden;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
}

.nav-icon-wrapper {
  flex: 0 0 18px;
  padding: 20px 0 20px 45px;
  position: absolute;

  @media screen and (max-width: 768px) {
      padding: 20px;
  }
}

.search-wrap {
  display: flex;
  position: relative;
  align-items: stretch;
  // margin-top: -20px;
  margin: 0 0 10px;

  @media screen and (min-width: 768px) {
    flex: 0 1 auto;
    margin: 0;
  }

  &:before {
    position: absolute;
    display: block;
    left: 15px;
    top: -2px;
    bottom: 0;
    width: 20px;
    // border: 1px solid orange;
    opacity: 0.5;
    content:  ' ';
    background-image: url('../assets/search.svg');
    background-position: right center;
    background-repeat: no-repeat;

    // border: 1px solid blue;

    @media screen and (min-width: 768px) {
      right: 45px;
    }
  }

  input {
    flex: 1 1 auto;
    font-size: 100%;
    font-family: $font-family;
    border: 0;
    color: $nor-blue;
    background: white;
    border: 1px solid rgba($nor-red, 0.2);
    padding: 17px 20px 17px 45px;
    border-radius: 6px;
    transition: 
      box-shadow 250ms ease, 
      border 250ms ease;

    @media screen and (min-width: 768px) {
    }

    &:hover {
      border: 1px solid rgba($nor-red, 0.4);
    }

    &:focus {
      outline: 0;
      border: 1px solid rgba($nor-red, 0.5);
      transition: 
        border 250ms ease,
        box-shadow 250ms ease;
      box-shadow: 0px 4px 20px rgba($nor-blue,0.2);
    }
  }
}

button.nav-button {
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: opacity 250ms ease-in-out;

  &.active {
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
}

.nav-icon {
  height: 18px;
  width: 18px;
  margin-bottom: -4px;
}

.nav-container {
  max-width: 100%;
  margin: 0 auto;
}

@keyframes fadeInBox {
  0% {
    max-height: 0;
    padding: 0 20px 0;
  }

  50% {
    max-height: 700px;
    padding: 0 20px 20px;
    
  }

  100% {
    max-height: 700px;
    padding: 0 20px 20px;
  }
}

@keyframes fadeOutBox {
  0% {
    max-height: 700px;
    padding: 0 20px 20px;
  }

  50% {
    max-height: 700px;
    padding: 0 20px 20px;
  }

  100% {
    max-height: 0;
    padding: 0 20px 0;
  }

}

@keyframes fadeInBoxMobile {
  0% {
    max-height: 0;
    padding: 0 20px 0;
  }

  50% {
    max-height: 700px;
    padding: 0 20px 20px;
    
  }

  100% {
    max-height: 700px;
    padding: 0 20px 20px;
  }
}

@keyframes fadeOutBoxMobile {
  0% {
    max-height: 700px;
    padding: 0 20px 20px;
  }

  50% {
    max-height: 700px;
    padding: 0 20px 20px;
  }

  100% {
    max-height: 0;
    padding: 0 20px 0;
  }

}

@keyframes fadeOutLinks {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadeInLinks {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.nav {
  display: none;
  padding: 0 20px 20px;
  overflow: hidden;
  background: $nor-blue;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
      padding: 0 20px 20px;
  }

  h3 {
    flex: 0 0 100%;
    color: white;
    font-family: $title-family;
    font-weight: 700;
    margin: 0 0 25px;
    line-height: 1;

    @media screen and (max-width: 768px) {
        margin: 0 0 10px;
    }
  }

  .active & {
    display: flex;
    animation: fadeInBox 250ms ease-in-out forwards;

    @media screen and (max-width: 768px) {
        animation: fadeInBoxMobile 250ms ease-in-out forwards;
    }

    a,
    h3 {
      opacity: 0;
      animation: fadeInLinks 250ms ease-in-out 250ms forwards;
    }

    h3 {
      animation-delay: 150ms;
    }
  }

  .removing & {
    display: flex;
    animation: fadeOutBox 250ms ease-in-out 250ms forwards;

    @media screen and (max-width: 768px) {
        animation: fadeOutboxMobile 250ms ease-in-out forwards;
    }

    a,
    h3 {
      opacity: 1;
      animation: fadeOutLinks 250ms ease-in-out forwards;
    }

    h3 {
      animation-delay: 150ms;
    }
  }
}

.nav a {
  font-size: 22px;
  flex: 1 1 50%;
  text-decoration: none;
  padding: 30px 0;
  position: relative;
  z-index: 1;
  color: white;

  @media screen and (max-width: 768px) {
      flex: 1 1 100%;
      padding: 15px 0;
      font-size: 18px;
  }

  &:hover {
    color: mix($nor-red, white, 90%);
    cursor: pointer;
  }

  &.active {
    color: mix($nor-red, white, 30%);

    &:hover {
      color: mix($nor-red, white, 90%);
    }

    &:after {
      position: absolute;
      display: block;
      content: ' ';
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
    }
  }
}

.logo-wrapper {

}

.arrow {
  position: relative;
  background-image: url('../assets/arrow.png');
  background-size: contain;
  width: 17.4px;
  height: 20.2px;
  display: block;
  background-position: left center;
  background-repeat: no-repeat;
  margin: 0 10px 0 0;
  top: -1px;
}

</style>
