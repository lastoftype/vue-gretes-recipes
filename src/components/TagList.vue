<template>
  <div class="tag-list" v-if="hasRecipes">
    <h2 v-if="title === 'Search'">Results for &ldquo;{{$props.search}}&rdquo;</h2>
    <h2 v-if="title !== 'Search'">{{title}}</h2>
    <ul v-if="recipeList.length > 0">
      <li v-for="recipe in recipeList" class="nav-item">
        <router-link :to="{name: 'recipe', params: {id: recipe.slug}}">{{recipe.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'tag-list',
  props: ['recipes', 'title', 'tag', 'search'],
  data () {
    return {
      // recipeList: []
    }
  },
  computed: {
      hasRecipes() {
        return this.recipeList && this.recipeList.length !== 0;
      },
      recipeList () {
        return this.recipes.map(recipe => {

          let tag = this.search || this.tag;

          let hasTag = recipe.tags.indexOf(tag) !== -1;
          let hasTitle = recipe.title.toLowerCase().indexOf(tag) !== -1;
          let hasDesc = recipe.description.toLowerCase().indexOf(tag) !== -1;
          return hasTag || hasTitle || hasDesc ? recipe : false
        });
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.search-wrap {
  display: flex;
  position: relative;
  align-items: stretch;
  margin: 0 0 10px; }
  @media screen and (min-width: 768px) {
    .search-wrap {
      flex: 0 1 auto;
      margin: 0; } }
  .search-wrap:before {
    position: absolute;
    display: block;
    left: 15px;
    top: -2px;
    bottom: 0;
    width: 20px;
    opacity: 0.5;
    content: ' ';
    background-image: url("../assets/search.svg");
    background-position: right center;
    background-repeat: no-repeat; }
    @media screen and (min-width: 768px) {
      .search-wrap:before {
        right: 45px; } }
  .search-wrap input {
    flex: 1 1 auto;
    font-size: 100%;
    font-family: "Work Sans", serif;
    border: 0;
    color: #002868;
    background: white;
    border: 1px solid rgba(197, 11, 30, 0.2);
    padding: 17px 20px 17px 45px;
    border-radius: 6px;
    transition: box-shadow 250ms ease,  border 250ms ease; }
    .search-wrap input:hover {
      border: 1px solid rgba(197, 11, 30, 0.4); }
    .search-wrap input:focus {
      outline: 0;
      border: 1px solid rgba(197, 11, 30, 0.5);
      transition: border 250ms ease, box-shadow 250ms ease;
      box-shadow: 0px 4px 20px rgba(0, 40, 104, 0.2); }
.tag-list-all {
  flex: 1 1 100%;
  display: flex;
  flex-wrap: wrap; }

.tag-list {
  flex: 1 1 100%;
  padding: 0;
  margin-bottom: 20px; }
  @media screen and (min-width: 767px) {
    .tag-list {
      flex: 0 0 50%;
      padding: 0 45px 20px 0; } }
  .tag-list.tag-list-full {
    flex: 0 0 100%; }
  .tag-list ul {
    margin: 0; }
    .tag-list ul li {
      margin: 0 0 10px;
      line-height: 1.22;
      font-family: "Work Sans", serif; }
      .tag-list ul li a {
        cursor: pointer;
        color: #002868;
        text-decoration: none; }
  .tag-list h2 {
    font-family: "Work Sans", serif;
    text-transform: uppercase;
    color: #C50B1E;
    font-size: 20px;
    text-transform: uppercase;
    color: #C50B1E;
    margin: 0 0 20px; }
    @media screen and (max-width: 768px) {
      .tag-list h2 {
        font-size: 18px; } }

</style>