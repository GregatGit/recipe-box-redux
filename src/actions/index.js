export const DELETE_RECIPE = 'delete_recipe'
export const ADD_RECIPE = 'add_recipe'
export const DELETE_INGREDIENT = 'delete_ingredient'
export const ADD_INGREDIENT = 'add_ingredient'

export function deleteRecipe(name) {
  return {
    type: DELETE_RECIPE,
    payload: name
  }
}

export function addRecipe(recipe) {
  console.log('recipe',recipe)
  return {
    type: ADD_RECIPE,
    payload: recipe
  }
}

export function deleteIngredient(recipe, ingredient) {
  console.log('recipe: ', recipe, 'ing: ', ingredient)
  return {
    type: DELETE_INGREDIENT,
    payload: { recipe, ingredient }
  }
}

export function addIngredient(recipe, ingredient) {
  return {
    type: ADD_INGREDIENT,
    payload: { recipe, ingredient }
  }
}


