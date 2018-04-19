import _ from 'lodash'
import data from '../data/recipes.json'
import { DELETE_RECIPE, ADD_RECIPE, DELETE_INGREDIENT, ADD_INGREDIENT, RESET_RECIPES } from '../actions'

const initialState = () => {
  if (localStorage['myRecipes']){
    return JSON.parse(localStorage.myRecipes)
  }else{
    return _.mapKeys(data, 'name')
  }
} 

export default function(state = initialState(), action) {

  switch (action.type) {
    case DELETE_RECIPE:     
      const deleRecipeState = _.omit(state, action.payload)
      updateLocalStorage(deleRecipeState)
      return deleRecipeState
  
    case ADD_RECIPE:
      const addRecipeSate = _.assign(state, {[action.payload.name]: action.payload})
      updateLocalStorage(addRecipeSate)
      return addRecipeSate
    
    case DELETE_INGREDIENT:
      const deleteIngredientState = Object.assign({}, state);
      const newIngredients = state[action.payload.recipe].ingredients.filter(ele => ele !== action.payload.ingredient)
      deleteIngredientState[action.payload.recipe].ingredients = newIngredients
      updateLocalStorage(deleteIngredientState)
      return deleteIngredientState
    
    case ADD_INGREDIENT:
      const addIngredientState = Object.assign({}, state);
      addIngredientState[action.payload.recipe].ingredients.push(action.payload.ingredient)
      updateLocalStorage(addIngredientState)
      return addIngredientState

    case RESET_RECIPES:
      return _.mapKeys(data, 'name')
    
    default:
      break;
  }
  return state
}

function updateLocalStorage (obj) {
  localStorage.setItem('myRecipes', JSON.stringify(obj))
}
// Tips from Aaron using an array instead of an object
// default/initial state = data
// export default function (state = data, action) {
//   // below will map the data array to an object. Since it's a list it is easier to
//   // handle as an array if (!state) { state = _.mapKeys(data, 'name') }

//   switch (action.type) {
//     case DELETE_RECIPE:
//       return state.filter(recipe => recipe.name !== action.payload)

//     case ADD_RECIPE:
//       // const deleteIngredientState = state deleteIngredientState[action.payload.name] = action.payload return
//       // _.assign(state, {[action.payload.name]: action.payload}) handle as array now
//       // instead of object
//       return [
//         ...state, {
//           [action.payload.name]: action.payload
//         }
//       ]

//     case DELETE_INGREDIENT:
//       const deleteIngredientState = state.map(recipe => {
//         // if it's the recipe we want to change filter the ingredients for that recipe
//         // and return it with the other recipes
//         if (recipe.name === action.payload.recipe) {
//           const editedIngredients = recipe
//             .ingredients
//             .filter(ele => ele !== action.payload.ingredient)
//           recipe.ingredients = editedIngredients
//         }

//         return recipe
//       })
//       return deleteIngredientState

//     default:
//       break;
//   }
//   return state
// }