export const DELETE_RECIPE = 'delete_recipe'
export const ADD_RECIPE = 'add_recipe'

export function deleteRecipe(name) {
  return {
    type: DELETE_RECIPE,
    payload: name
  }
}

export function addRecipe(recipe) {
  //console.log('recipe',recipe)
  return {
    type: ADD_RECIPE,
    payload: recipe
  }
}
