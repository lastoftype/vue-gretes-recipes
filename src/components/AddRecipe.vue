<template>
  <div>
     <div class="add-recipe-container">
      <h1>Add Recipe</h1>
      <div class="add-recipe">
          <div class="form">
             <form>
              <div class="form-group">
                <label>Title</label>
                <input 
                  type="text" 
                  name="title" 
                  v-model="title"
                  placeholder="Shrimp Gumbo"
                  class="form-control" />
              </div>
              <div class="form-group">
                <label>Description</label>
                <textarea 
                  name="description" 
                  class="form-control"
                  id="desc" 
                  cols="30" 
                  rows="4" 
                  v-model="description"
                  placeholder="This is my favorite thing..."></textarea>
              </div>
               <div class="form-group">
                <label>Servings</label>
                <input 
                  type="text"
                  placeholder="10 servings" 
                  class="form-control" 
                  name="servings" 
                  id="servings" 
                  v-model="servings"
                  ref="servings" />
              </div>
              <div class="form-group">
                <label>Time</label>
                <input 
                  type="text" 
                  placeholder="20 minutes" 
                  name="time"  
                  class="form-control" 
                  v-model="time"
                  id="time" />
              </div>
              <div class="form-group">
                <label>Ingredients</label>
                <textarea 
                  name="ingredients" 
                  class="form-control"
                  id="desc" 
                  cols="30" 
                  rows="4" 
                  v-model="ingredientsString"
                  placeholder="1 Tbsp salt"></textarea>
              </div>
              <div class="form-group">
                <label>Steps</label>
                <textarea 
                  name="steps" 
                  class="form-control"
                  id="desc" 
                  cols="30" 
                  rows="4" 
                  v-model="stepsString"
                  placeholder="Mix in water..."></textarea>
              </div>
              <div class="form-group">
                <label>Tags</label>
                <input 
                  type="text"
                  class="form-control"
                  id="tags"
                  placeholder="Dessert, entrees"
                  v-model="tagsString">
              </div>
              <button type="button" class="btn btn-primary" v-on:click="handleSubmit()">Save</button>
            </form>
          </div>
           <div class="results">
              <vue-json-pretty
                :path="'res'"
                :data="form">
              </vue-json-pretty>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import VueJsonPretty from 'vue-json-pretty'
import formurlencoded from 'form-urlencoded';
import slugify from 'slugify'
import {parseIngredients, parseSteps, parseTags} from '../lib';

export default {
  name: 'add-recipe',
  components: {
    VueJsonPretty
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      title: '',
      slug: '',
      description: '',
      servings: '',
      time: '',
      ingredients: [],
      ingredientsString: '',
      steps: [],
      stepsString: '',
      tags: [],
      tagsString: ''
    }
  },
  computed: {
    form() {
      return {
        title: this.title, 
        slug: this.slugify(this.title),
        description: this.description, 
        servings: this.servings, 
        time: this.time,
        ingredients: parseIngredients(this.ingredientsString),
        steps: parseSteps(this.stepsString),
        tags: parseTags(this.tagsString)
      }
    }
  }, 
  methods: {
    slugify(val) {
      return slugify(val, {
        replacement: '-',    // replace spaces with replacement
        remove: /[$*_+~.()'"!\-:@]/g,        // regex to remove characters
        lower: true          // result in lower case
      });
    },
    handleSubmit() {

        let data = {...this.form};

        let req = {
          method: 'POST',
          headers: {'Content-Type':'application/x-www-form-urlencoded'},
          body: formurlencoded(data)
        };

        const handleSuccess = data => {
          const {slug, title} = data.ops[0];
          this.$router.push({ name: 'recipe', params: { id: slug }});
        };

        fetch('/api/recipes', req)
          .then(response => response.json())
          .then(handleSuccess);
      }
  },
  created() {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.add-recipe-container {
  padding: 45px 45px;
  max-width: 1300px;
  margin: 0; }
  .add-recipe-container h1 {
    font-family: "Eczar", sans-serif;
    font-size: 36px;
    font-weight: 700;
    color: #002868;
    margin: 0 0 15px; }
    @media screen and (max-width: 767px) {
      .add-recipe-container h1 {
        font-size: 32px; } }

.form-group {
  display: block;
  margin: 0 0 25px; }

.add-recipe {
  display: flex;
  margin: 0 0 40px; }
  .add-recipe .form {
    flex: 0 0 40%;
    background: #f0f2f6;
    border: 1px solid #e0e5ed;
    padding: 25px;
    border-radius: 6px; }
  .add-recipe .results {
    flex: 1 1 60%;
    padding: 0 0 0 50px;
    max-width: 60%; }
  .add-recipe label {
    display: block;
    font-family: "Work Sans", serif;
    font-weight: normal;
    text-transform: uppercase;
    color: #C50B1E;
    margin: 0 0 10px; }
  .add-recipe input,
  .add-recipe textarea {
    width: 100%;
    flex: 1 1 auto;
    font-size: 100%;
    font-family: "Work Sans", serif;
    border: 0;
    color: #002868;
    background: white;
    border: 1px solid rgba(0, 40, 104, 0.2);
    padding: 17px 20px 17px 20px;
    border-radius: 6px;
    transition: box-shadow 250ms ease,  border 250ms ease; }
    .add-recipe input:hover,
    .add-recipe textarea:hover {
      border: 1px solid rgba(0, 40, 104, 0.4); }
    .add-recipe input:focus,
    .add-recipe textarea:focus {
      outline: 0;
      border: 1px solid rgba(0, 40, 104, 0.5);
      transition: border 250ms ease, box-shadow 250ms ease;
      box-shadow: 0px 4px 20px rgba(0, 40, 104, 0.2); }

.results > .vjs__tree {
  padding: 30px;
  border-radius: 6px;
  margin: 0 0 25px;
  background: #182437 !important;
  font-family: "Roboto Mono", fixed-width;
  font-size: 15px;
  line-height: 1.3;
  color: white !important;
  max-width: 100%;
  overflow: scroll; }

  .results .vjs__tree .vjs__tree__content {
    border-left: 0 ;
  }

.alert {
  display: block;
  padding: 20px;
  border-radius: 6px;
  opacity: 0.75;
  font-size: 16px;
  transition: opacity 250ms ease-in-out; }
  .alert.hidden {
    opacity: 0; }
  .alert.alert-success {
    border: 1px solid #002868;
    background: #e6eaf0;
    color: #002868; }
  .alert.alert-warning {
    border: 1px solid #C50B1E;
    background: #f9e7e9;
    color: #C50B1E; }

.btn {
  border: 1px solid transparent;
  background: none;
  font-size: 100%;
  border-radius: 6px;
  padding: 17px 25px; }
  .btn:hover {
    cursor: pointer; }
  .btn.loading {
    pointer-events: none;
    opacity: 0.6; }

.btn-primary {
  background: #002868;
  color: white; }

</style>
