import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Recipe from '@/components/Recipe'
import AddRecipe from '@/components/AddRecipe';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recipe/:id',
      name: 'recipe',
      component: Recipe
    },
    {
      path: '/add-recipe',
      name: 'add-recipe',
      component: AddRecipe
    }
  ]
})
