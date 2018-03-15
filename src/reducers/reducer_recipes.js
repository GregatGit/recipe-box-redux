import _ from 'lodash'
import { GET_RECIPES } from '../actions'

export default function(state = {}, action) {
  switch (action.type) {
    case GET_RECIPES:
      return _.mapKeys(action.payload, 'name')
    
    default:
      return state
  }
}