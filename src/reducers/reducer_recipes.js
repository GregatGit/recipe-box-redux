import _ from 'lodash'
import data from '../data/recipes.json'
import { DELETE_RECIPE, ADD_RECIPE, DELETE_INGREDIENT } from '../actions'

export default function(state = null, action) {

  if (!state) {
    state = _.mapKeys(data, 'name')
  }

  switch (action.type) {
    case DELETE_RECIPE:
      
      return _.omit(state, action.payload)
  
    case ADD_RECIPE:
      // const newState = state
      // newState[action.payload.name] = action.payload
      return _.assign(state, {[action.payload.name]: action.payload})
    
    case DELETE_INGREDIENT:
      const newIngredients = state[action.payload.recipe].ingredients.filter(ele => ele !== action.payload.ingredient)
      state[action.payload.recipe].ingredients = newIngredients
      return state
    
    default:
      break;
  }
  return state
}
