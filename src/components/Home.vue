<template>
  <div>
  <div class="hello" v-if="recipes && recipes.length">
    <div class="recipe-list-container">
      <div class="recipe-list">
        <h1>Grete&rsquo;s Recipes</h1>
        <div class="tag-list tag-list-full">
          <h2>Search</h2>
          <div class="search-wrap">
            <input 
              tab-index="1"
              type="text" 
              v-model="searchModel"
              placeholder="Search... "/>
          </div>
        </div>
        <div class="tag-list-all" v-if="searchModel !== ''">
          <tag-list :recipes="recipes" :search="searchModel.toLowerCase()" title="Search results" />
        </div>
        <div class="tag-list-all" v-if="searchModel === ''">
          <tag-list :recipes="recipes" tag="dessert" title="Desserts" />
          <tag-list title="Classics" tag="classics" :recipes="recipes" />
          <tag-list title="Appetizers" tag="appetizer" :recipes="recipes" />
          <tag-list title="Norwegian" tag="norwegian" :recipes="recipes" />
        </div>
      </div>
   </div>
  </div>
</div>
</template>

<script>

import TagList from '@/components/TagList.vue';

export default {
  name: 'home',
  components: {
    TagList
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      recipes: [],
      errors: [],
      searchModel: ''
    }
  },
  created() {
    fetch('/api/recipes')
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        console.log(json);
        this.recipes = json;
      }).catch(e => {
        console.log(e);
        this.errors.push(e);
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">$nor-red: #C50B1E;
$nor-blue: #002868;
$nor-black: mix($nor-blue, #444, 90%);
$nor-dark-grey: mix($nor-blue, #222, 20%);
$nor-grey: mix($nor-blue, #444, 50%);
$nor-light-grey: mix($nor-blue, #ddd, 20%);
$nor-light-white: mix($nor-blue, #fff, 6%);

$font-family: 'Work Sans',serif;
$title-family: 'Eczar', sans-serif;

@keyframes fadeOutRecipe {
    0% {
        opacity: 1;
        transform: translate(0, 0);
    }

    100% {
        opacity: 0;
        transform: translate(0, 100px);
    }
}

@keyframes fadeInRecipe {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.recipe {
    display: flex;
    flex-direction: column;
    font-family: $font-family;
    opacity: 1;
    margin: 0 0 80px;
    transition: opacity 250ms ease-in-out,
    transform 250ms ease-in-out;

    &.rendering {
        opacity: 0;
        transform: translate(0, 0) scale(0.98);
    }

    @media screen and (min-width: 768px) {
        margin: 0 0 200px;
    }
}

.recipe-list {
    opacity: 1;
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    flex: 1 0 1000px;
    transition: opacity 250ms ease-in-out,
    transform 250ms ease-in-out;

    &.rendering {
        opacity: 0;
        transform: translate(0, 0) scale(0.98);
    }
}

.photo {
    max-width: 600px;
    width: 100%;
    transition: all 250ms ease;
}

.tag-list-all {
    flex: 1 1 100%;
    display: flex;
    flex-wrap: wrap;
}

.tag-list {
    flex: 1 1 100%;
    padding: 0;
    margin-bottom: 20px;

    @media screen and (min-width: 767px) {
        flex: 0 0 50%;
        padding: 0 45px 20px 0;
    }

    &.tag-list-full {
        flex: 0 0 100%;
    }

    ul {
        margin: 0;

        li {
            margin: 0 0 10px;
            line-height: 1.22;
            font-family: $font-family;

            a {
                cursor: pointer;
                color: $nor-blue;
                text-decoration: none;
            }
        }
    }

    h2 {
        font-family: $font-family;
        text-transform: uppercase;
        color: $nor-red;

        font-size: 20px;
        text-transform: uppercase;
        color: $nor-red;
        margin: 0 0 20px;

        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }
}

.recipe-meta {
    margin-top: 18px;
    margin-bottom: -0.5em;

    &.empty {
        margin-top: 0;
    }

    @media screen and (max-width: 768px) {
        margin: 14px 0 -5px;
    }
}

.meta-item {
    display: inline-block;
    font-size: 18px;
    color: mix($nor-blue, #666, 30%);
    margin: 0 1em 0.5em 0;
    line-height: 1.22;

    .meta-item-key {
        text-transform: uppercase;
        font-weight: bold;
        margin-right: 0.25em;
    }

    .meta-item-value {
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 1.2;
        display: block;
        margin: 0 0 5px;
    }
}

.recipe-directions {
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 1000px) {
        flex-direction: row;
        flex-wrap: wrap;
    }
}

.ingredients,
.steps {
    margin: 0;
    padding: 45px 45px 20px;

    @media screen and (max-width: 768px) {
        padding: 30px 20px;
        font-size: 16px;
    }

    h2 {
        font-size: 20px;
        text-transform: uppercase;
        color: $nor-red;
        margin: 0 0 20px;

        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }

    ul,
    ol {
        margin-top: 0;
        margin-bottom: 0;
    }
}

.ingredients {
    @media screen and (min-width: 1000px) {
        flex: 1 1 42%;
    }
}

.steps {
    @media screen and (min-width: 1000px) {
        flex: 1 1 58%;
    }
}

.steps li {
    margin: 0 0 0.8em;

    @media screen and (max-width: 768px) {
        margin: 0 0 0.8em;
        line-height: 1.3;
    }
}

.recipe-info {
    margin: 0;
    padding: 45px;
    position: relative;

    @media screen and (max-width: 768px) {
        padding: 30px 20px;
    }

    @media print {
        padding: 45px 45px 0 45px;
    }

    h1 {
        font-family: $title-family;
        font-weight: 700;
        color: $nor-black;
        font-size: 36px;

        @media screen and (max-width: 768px) {
            margin-top: 15px;
            font-size: 32px;
        }

        a {
            color: inherit;
            text-decoration: none;
        }
    }

    &:after {
        position: absolute;
        bottom: 0;
        left: -60px;
        right: 0; // border-bottom: 1px solid rgba($nor-red, 0.4);
        opacity: 0.7;
        background-image: url('../assets/border-dots.jpg');
        background-size: 100%;
        background-repeat: repeat-x;
        background-position: center bottom;
        content: ' ';
        display: block;
        background-size: cover;
        height: 5px;

        @media screen and (min-width: 1000px) {
            height: 20px;
            background-size: 100%;
            left: 45px;
            right: 45px;
        }

        @media print {
            display: none;
        }
    }
}

.ingredients ul {
    column-count: 1;

    li {
        color: $nor-dark-grey;
        margin: 0 0 0.6em;

        @media screen and (max-width: 768px) {
            line-height: 1.3;
            margin: 0 0 0.5em;
        }
    }
}

.amount {
    // flex: 1 1 25%;
    // text-align: right;
    // margin: 0 1em 0 0;
    // font-weight: bold;
    margin: 0 0.25em 0 0;
    font-weight: bold;
}

.type {
    margin: 0 0.25em 0 0;
    font-weight: bold;
}

.recipe-description-wrapper {
    padding: 0 45px;

    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }

    @media screen and (min-width: 1000px) {
        width: 58%;
        margin: auto 0 auto auto;
    }
}

.recipe-description {
    padding: 30px;
    background: $nor-light-white;
    border: 1px solid $nor-light-grey;
    line-height: 1.44;
    color: $nor-grey;
    border-radius: 2px;
    font-family: $title-family;
    white-space: pre-wrap;

    @media screen and (min-width: 1000px) {
        margin: 0 0 0 -45px;
    }

    @media screen and (max-width: 768px) {
        padding: 30px 20px;
        font-size: 17px;
    }

    h3 {
        font-size: 20px;
        text-transform: uppercase;
        line-height: 1.1;
        margin: 0 0 15px;
        color: $nor-blue;
        font-weight: bold;

        @media screen and (max-width: 768px) {
            font-size: 18px;
        }
    }
}

.recipe-list {
    max-width: 800px;
    width: 100%;
    margin: 0;
    padding: 45px 20px;
    position: relative;
    flex: 0 0 100%;

    @media screen and (min-width: 767px) {
        padding: 45px 0 0 45px;
        margin: 0 0 200px;
    }

    h1 {
        font-family: $title-family;
        font-weight: 700;
        color: $nor-black;
        margin: 0 0 30px;
        font-size: 36px;

        @media screen and (max-width: 768px) {
            font-size: 32px;
        }
    }

    ol {
        // list-style: decimal;
        // -webkit-padding-start: 40px;
        display: flex;
        flex-wrap: wrap;
    }

    ol li {
        line-height: 1.1;
        margin: 0 0 30px;
        font-family: $title-family;
        font-weight: 400; // max-width: 600px;
        color: mix(white, $nor-red, 40%);
        font-size: 25px;
        flex: 1 1 100%;
    }

    ol li a {
        // position: relative;
        // font-size: 36px;
        color: $nor-grey;
        font-weight: 700;
        top: 15px; // margin-left: 6px;
        &:hover {
            cursor: pointer;
            color: darken($nor-red, 10%);
        }
    }
}

.recipe-list-container {
    width: 100%;
}

</style>
