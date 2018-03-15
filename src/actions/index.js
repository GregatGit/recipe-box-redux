import data from '../data/recipes.json'
export const GET_RECIPES = 'get_recipes'

export function getRecipes() {
  const recipes = data
  return {
    type: GET_RECIPES,
    payload: recipes
  }
}