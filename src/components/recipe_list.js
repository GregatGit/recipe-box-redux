import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'
import RecipeIngredients from './recipe_ingredients'
import { deleteRecipe } from '../actions'
import RecipeForm from './recipe_form'

class recipeList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: [],
      name: '',
      showAddRecipe: false
    }
  }
  
  showIngredients = (obj) => {
    this.setState({ingredients: obj.ingredients, name: obj.name})
  }

  deleteRecipe = (recipe) => {
    console.log('recipe', recipe)
    this.props.deleteRecipe(recipe)
  }

  renderRecipes = () => {
    //console.log('here', this.props.recipes)
    return _.map(this.props.recipes, recipe => {
      return (
        <li key={recipe.name}>
          <span 
          className='list-group-item'
          key={recipe.name}
          onClick={() => {this.showIngredients(this.props.recipes[recipe.name])}}  
        >
          {recipe.name}</span>
          <span><button onClick={() => {this.deleteRecipe(recipe.name)}} className='btn btn-danger'>Delete {recipe.name}</button></span>
        </li>
      )
    })
  }

  addNewRecipe = () => {
    console.log('add new recipe')
    this.setState({showAddRecipe: true})
  }

  render() {
    return (
      <div>
        <button
          id='newRecipe'
          className='btn btn-primary'
          onClick={() => {this.addNewRecipe()}}
        >Add new recipe</button>
        <h3>Recipe List</h3>
        <ul className='list-group'>
          {this.renderRecipes()}
        </ul>
        <RecipeIngredients name={this.state.name} ingredients={this.state.ingredients}/>
        <RecipeForm />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipes: state.recipes }
}

export default connect(mapStateToProps, { deleteRecipe })(recipeList)
