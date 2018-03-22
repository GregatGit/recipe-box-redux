export const DELETE_RECIPE = 'delete_recipe'

export function deleteRecipe(name) {
  return {
    type: DELETE_RECIPE,
    payload: name
  }
}