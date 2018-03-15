import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getRecipes } from '../actions'
import _ from 'lodash'
import RecipeIngredients from './recipe_ingredients'

class recipeList extends Component {
  componentDidMount() {
    this.props.getRecipes() 
  }

  showIngredients = (obj) => {
    console.log('hi', obj.ingredients)
  }

  renderRecipes = () => {
    console.log('here', this.props.recipes)
    return _.map(this.props.recipes, recipe => {
      return (
        <li 
          key={recipe.name}
          onClick={() => {this.showIngredients(this.props.recipes[recipe.name])}}
          
        >
          {recipe.name}
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        Recipe List
        <ul>
          {this.renderRecipes()}
        </ul>
        <RecipeIngredients />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipes: state.recipes }
}

export default connect(mapStateToProps, { getRecipes })(recipeList)
