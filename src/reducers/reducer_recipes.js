import _ from 'lodash'
import data from '../data/recipes.json'
import { DELETE_RECIPE, ADD_RECIPE, DELETE_INGREDIENT, ADD_INGREDIENT } from '../actions'

export default function(state = null, action) {

  if (!state) {
    state = _.mapKeys(data, 'name')
  }

  switch (action.type) {
    case DELETE_RECIPE:
      
      return _.omit(state, action.payload)
  
    case ADD_RECIPE:

      return _.assign(state, {[action.payload.name]: action.payload})
    
    case DELETE_INGREDIENT:
      const newState = Object.assign({}, state);
      const newIngredients = state[action.payload.recipe].ingredients.filter(ele => ele !== action.payload.ingredient)
      newState[action.payload.recipe].ingredients = newIngredients
      return newState
    
    case ADD_INGREDIENT:
      const myState = Object.assign({}, state);
      myState[action.payload.recipe].ingredients.push(action.payload.ingredient)
      return myState
    
    default:
      break;
  }
  return state
}
// default/initial state = data
// export default function (state = data, action) {
//   // below will map the data array to an object. Since it's a list it is easier to
//   // handle as an array if (!state) { state = _.mapKeys(data, 'name') }

//   switch (action.type) {
//     case DELETE_RECIPE:
//       return state.filter(recipe => recipe.name !== action.payload)

//     case ADD_RECIPE:
//       // const newState = state newState[action.payload.name] = action.payload return
//       // _.assign(state, {[action.payload.name]: action.payload}) handle as array now
//       // instead of object
//       return [
//         ...state, {
//           [action.payload.name]: action.payload
//         }
//       ]

//     case DELETE_INGREDIENT:
//       const newState = state.map(recipe => {
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
//       return newState

//     default:
//       break;
//   }
//   return state
// }