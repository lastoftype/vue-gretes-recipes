<template>
  <div id="app">
    <Nav />
    <transition 
      name="fade" 
      :duration="250" 
      mode="out-in" 
      appear
      appear-class="fade-appear"
      appear-to-class="fade-appear-to"
      appear-active-class="fade-appear-active">
      <router-view/>
    </transition>
  </div>
</template>

<script>

import Nav from '@/components/Nav.vue';
import Logo from '@/components/Logo.vue';

export default {
  name: 'app',
  components: {
    Nav, Logo
  },
}
</script>

<style>

/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, cappear,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

* {
  box-sizing: border-box; }

.App {
  font-family: sans-serif; }

.container {
  position: relative; }

.recipe-container {
  width: 100%;
  margin: 0 0 auto;
  display: flex; }
  .recipe-container > div {
    width: 100%;
    flex: 1 1 100%; }

.recipe {
  max-width: 1000px;
  flex: 1 1 1000px; }

.border {
  /*background-image: url("./images/border-big2.jpg");*/
  background-size: contain;
  background-repeat: repeat-x;
  background-position: bottom center;
  width: 100%;
  margin-bottom: 10px;
  position: relative;
  height: 60px; }
  @media screen and (min-width: 767px) {
    .border {
      height: 100px;
      margin-bottom: 20px; } }

.border-grid {
/*  background-image: url("./images/border-big3.jpg");*/ }

.border-spike {
  position: relative;
  display: block;
  /*background-image: url("./images/border-spike-up.jpg");*/
  background-size: contain;
  background-position: bottom center;
  background-repeat: repeat-x;
  height: 15px;
  width: 100%;
  margin-bottom: 60px; }
  @media screen and (min-width: 767px) {
    .border-spike {
      height: 20px;
      margin-bottom: 80px; } }

/* Setup */
html {
  /* Change default typefaces here */
  font-family: serif;
  font-size: 120.5%;
  -webkit-font-smoothing: antialiased; }

/* Copy & Lists */
p {
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0; }

ul,
ol {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem; }

ul li,
ol li {
  line-height: 1.5rem; }

ul ul,
ol ul,
ul ol,
ol ol {
  margin-top: 0;
  margin-bottom: 0; }

blockquote {
  line-height: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem; }

/* Headings */
h1,
h2,
h3,
h4,
h5,
h6 {
  /* Change heading typefaces here */
  font-family: sans-serif;
  margin-bottom: 0; }

h1 {
  font-size: 2.242rem; }

h2 {
  font-size: 1.4rem; }

h3 {
  font-size: 1.414rem; }

h4 {
  font-size: 0.707rem; }

h5 {
  font-size: 0.4713333333333333rem; }

h6 {
  font-size: 0.3535rem; }

/* Tables */
table {
  margin-top: 1.5rem;
  border-spacing: 0px;
  border-collapse: collapse; }

table td,
table th {
  padding: 0;
  line-height: 33px; }

/* Code blocks */
code {
  vertical-align: bottom; }

/* Leading paragraph text */
.lead {
  font-size: 1.414rem; }

/* Hug the block above you */
.hug {
  margin-top: 0; }

.page-main {
  width: 100%; }

.fade-enter-active, 
.fade-leave-active {
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out;
  transform: translateX(0);
}

.fade-enter, 
.fade-leave-active {
  opacity: 0;
  transform: translateX(-20px);
}

.fade-appear {
  opacity: 0;
  transform: translateX(0) translateY(10px);
  transition: all 250ms ease-in-out;
}

.fade-appear-to {
  opacity: 1;
  transform: translateX(0) translateY(0);
  transition: all 250ms ease-in-out;
}

</style>
