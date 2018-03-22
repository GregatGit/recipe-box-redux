import _ from 'lodash'
import data from '../data/recipes.json'
import { DELETE_RECIPE } from '../actions'

export default function(state = null, action) {

  if (!state) {
    state = _.mapKeys(data, 'name')
  }

  switch (action.type) {
    case DELETE_RECIPE:
      
      return _.omit(state, action.payload)
  
    default:
      break;
  }
  // console.log('state', state)
  return state
}