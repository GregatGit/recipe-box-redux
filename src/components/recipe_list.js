import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import RecipeIngredients from './recipe_ingredients'

class recipeList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: [],
      name: ''
    }
  }
  

  showIngredients = (obj) => {
    this.setState({ingredients: obj.ingredients, name: obj.name})
  }

  renderRecipes = () => {
    console.log('here', this.props.recipes)
    return _.map(this.props.recipes, recipe => {
      return (
        <li 
          className='list-group-item'
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
        <h3>Recipe List</h3>
        <ul className='list-group'>
          {this.renderRecipes()}
        </ul>
        <RecipeIngredients name={this.state.name} ingredients={this.state.ingredients}/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipes: state.recipes }
}

export default connect(mapStateToProps)(recipeList)
