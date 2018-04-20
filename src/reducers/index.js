import { combineReducers } from 'redux'
import RecipeReducer from './reducer_recipes'

const rootReducer = combineReducers({
  recipes: RecipeReducer
})

export default rootReducer
