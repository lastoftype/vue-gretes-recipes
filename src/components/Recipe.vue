<template>
  <div>
    <div class="recipe" v-if="recipe && recipe.title"> 
      <header class="recipe-info">
        <h1>{{recipe.title}}</h1>
        <div class="recipe-meta">
          <span class="meta-item" v-for="item in computedMeta" :item="item" v-if="item.value">
            <span class="meta-item-key">{{item.name}}:</span>
            <span class="meta-item-value">{{item.value}}</span>
          </span>
        </div>
      </header>

      <section class="recipe-directions">

        <div class="ingredients">
          <h2>Ingredients</h2>
          <ul>
            <li v-for="ingredient in recipe.ingredients">
              <span class="amount" v-if="ingredient.quantity && ingredient.quantity !== 'null'">{{formatQuantity(ingredient.quantity)}}</span>
              <span class="type" v-if="ingredient.unit && ingredient.unit !== 'null'">{{formatUnit(ingredient.unit)}}</span>
              <span class="ingredient" v-if="ingredient.ingredient && ingredient.ingredient !== 'null'">{{ingredient.ingredient}}</span>
            </li>
          </ul>
        </div>

        <div class="steps">
          <h2>Steps</h2>
          <ol>
            <li v-for="step in recipe.steps">{{step.text}}</li>
          </ol>
        </div>
      </section>
    </div>
  </div>
</template>

<script>

import {formatUnit, formatQuantity, capitalizeFirstLetter} from '../lib';

export default {
  name: 'recipe',
  data () {
    return {
      recipe: {},
      computedRecipe: {}
    }
  },
  methods: {
    formatUnit, 
    formatQuantity, 
    capitalizeFirstLetter,
    getMeta: function() {
      return [
      {
        name: 'Time',
        value: this.recipe.time
      },
      {
        name: 'Servings',
        value: this.recipe.servings
      },{
        name: 'tags',
        value: this.recipe.tags.join(', ')
      }]
    }
  },
  computed: {
    computedMeta() {
      return this.getMeta();
    }
  },
  created() {
    fetch('/api/recipe/' + this.$route.params.id)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.recipe = json;
      }).catch(e => {
        console.log(e);
        this.errors.push(e);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@keyframes fadeOutRecipe {
  0% {
    opacity: 1;
    transform: translate(0, 0); }
  100% {
    opacity: 0;
    transform: translate(0, 100px); } }

@keyframes fadeInRecipe {
  0% {
    opacity: 0; }
  100% {
    opacity: 1; } }

.recipe {
  display: flex;
  flex-direction: column;
  font-family: "Work Sans", serif;
  opacity: 1;
  margin: 0 0 80px;
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out; }
  .recipe.rendering {
    opacity: 0;
    transform: translate(0, 0) scale(0.98); }
  @media screen and (min-width: 768px) {
    .recipe {
      margin: 0 0 200px; } }

.recipe-list {
  opacity: 1;
  display: flex;
  flex-wrap: wrap;
  max-width: 1200px;
  flex: 1 0 1000px;
  transition: opacity 250ms ease-in-out, transform 250ms ease-in-out; }
  .recipe-list.rendering {
    opacity: 0;
    transform: translate(0, 0) scale(0.98); }

.photo {
  max-width: 600px;
  width: 100%;
  transition: all 250ms ease; }



.recipe-meta {
  margin-top: 18px;
  margin-bottom: -0.5em; }
  .recipe-meta.empty {
    margin-top: 0; }
  @media screen and (max-width: 768px) {
    .recipe-meta {
      margin: 14px 0 -5px; } }

.meta-item {
  display: inline-block;
  font-size: 18px;
  color: #475367;
  margin: 0 1em 0.5em 0;
  line-height: 1.22; }
  .meta-item .meta-item-key {
    text-transform: uppercase;
    font-weight: bold;
    margin-right: 0.25em; }
  .meta-item .meta-item-value {
    text-transform: uppercase; }
  @media screen and (max-width: 768px) {
    .meta-item {
      font-size: 16px;
      line-height: 1.2;
      display: block;
      margin: 0 0 5px; } }

.recipe-directions {
  display: flex;
  flex-direction: column; }
  @media screen and (min-width: 1000px) {
    .recipe-directions {
      flex-direction: row;
      flex-wrap: wrap; } }

.ingredients,
.steps {
  margin: 0;
  padding: 45px 45px 20px; }
  @media screen and (max-width: 768px) {
    .ingredients,
    .steps {
      padding: 30px 20px;
      font-size: 16px; } }
  .ingredients h2,
  .steps h2 {
    font-size: 20px;
    text-transform: uppercase;
    color: #C50B1E;
    margin: 0 0 20px; }
    @media screen and (max-width: 768px) {
      .ingredients h2,
      .steps h2 {
        font-size: 18px; } }
  .ingredients ul,
  .ingredients ol,
  .steps ul,
  .steps ol {
    margin-top: 0;
    margin-bottom: 0; }

@media screen and (min-width: 1000px) {
  .ingredients {
    flex: 1 1 42%; } }

@media screen and (min-width: 1000px) {
  .steps {
    flex: 1 1 58%; } }

.steps li {
  margin: 0 0 0.8em; }
  @media screen and (max-width: 768px) {
    .steps li {
      margin: 0 0 0.8em;
      line-height: 1.3; } }

.recipe-info {
  margin: 0;
  padding: 45px;
  position: relative; }
  @media screen and (max-width: 768px) {
    .recipe-info {
      padding: 30px 20px; } }
  @media print {
    .recipe-info {
      padding: 45px 45px 0 45px; } }
  .recipe-info h1 {
    font-family: "Eczar", sans-serif;
    font-weight: 700;
    color: #072b64;
    font-size: 36px; }
    @media screen and (max-width: 768px) {
      .recipe-info h1 {
        margin-top: 15px;
        font-size: 32px; } }
    .recipe-info h1 a {
      color: inherit;
      text-decoration: none; }
  .recipe-info:after {
    position: absolute;
    bottom: 0;
    left: -60px;
    right: 0;
    opacity: 0.7;
    background-image: url("../assets/border-dots.jpg");
    background-size: 100%;
    background-repeat: repeat-x;
    background-position: center bottom;
    content: ' ';
    display: block;
    background-size: cover;
    height: 5px; }
    @media screen and (min-width: 1000px) {
      .recipe-info:after {
        height: 20px;
        background-size: 100%;
        left: 45px;
        right: 45px; } }
    @media print {
      .recipe-info:after {
        display: none; } }

.ingredients ul {
  column-count: 1; }
  .ingredients ul li {
    color: #1b2330;
    margin: 0 0 0.6em; }
    @media screen and (max-width: 768px) {
      .ingredients ul li {
        line-height: 1.3;
        margin: 0 0 0.5em; } }

.amount {
  margin: 0 0.25em 0 0;
  font-weight: bold; }

.type {
  margin: 0 0.25em 0 0;
  font-weight: bold; }

.recipe-description-wrapper {
  padding: 0 45px; }
  @media screen and (max-width: 768px) {
    .recipe-description-wrapper {
      padding: 0 20px; } }
  @media screen and (min-width: 1000px) {
    .recipe-description-wrapper {
      width: 58%;
      margin: auto 0 auto auto; } }

.recipe-description {
  padding: 30px;
  background: #f0f2f6;
  border: 1px solid #b1b9c6;
  line-height: 1.44;
  color: #223656;
  border-radius: 2px;
  font-family: "Eczar", sans-serif;
  white-space: pre-wrap; }
  @media screen and (min-width: 1000px) {
    .recipe-description {
      margin: 0 0 0 -45px; } }
  @media screen and (max-width: 768px) {
    .recipe-description {
      padding: 30px 20px;
      font-size: 17px; } }
  .recipe-description h3 {
    font-size: 20px;
    text-transform: uppercase;
    line-height: 1.1;
    margin: 0 0 15px;
    color: #002868;
    font-weight: bold; }
    @media screen and (max-width: 768px) {
      .recipe-description h3 {
        font-size: 18px; } }

.recipe-list {
  max-width: 800px;
  width: 100%;
  margin: 0;
  padding: 45px 20px;
  position: relative;
  flex: 0 0 100%; }
  @media screen and (min-width: 767px) {
    .recipe-list {
      padding: 45px 0 0 45px;
      margin: 0 0 200px; } }
  .recipe-list h1 {
    font-family: "Eczar", sans-serif;
    font-weight: 700;
    color: #072b64;
    margin: 0 0 30px;
    font-size: 36px; }
    @media screen and (max-width: 768px) {
      .recipe-list h1 {
        font-size: 32px; } }
  .recipe-list ol {
    display: flex;
    flex-wrap: wrap; }
  .recipe-list ol li {
    line-height: 1.1;
    margin: 0 0 30px;
    font-family: "Eczar", sans-serif;
    font-weight: 400;
    color: #dc6d78;
    font-size: 25px;
    flex: 1 1 100%; }
  .recipe-list ol li a {
    color: #223656;
    font-weight: 700;
    top: 15px; }
    .recipe-list ol li a:hover {
      cursor: pointer;
      color: #950817; }

.recipe-list-container {
  width: 100%; }

</style>