import { combineReducers } from 'redux'
import RecipeReducer from './reducer_recipes'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  recipes: RecipeReducer,
  form: formReducer
})

export default rootReducer