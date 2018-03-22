import _ from 'lodash'
import data from '../data/recipes.json'

export default function(state = null, action) {

  if (!state) {
    state = _.mapKeys(data, 'name')
  }
  // console.log('state', state)
  return state
}