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
      showAddRecipe: false,
      showRecipeButton: true
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
        <li className='list-group-item' key={recipe.name}>
          <span          
            key={recipe.name}
            onClick={() => {this.showIngredients  (this.props.recipes[recipe.name])}}  
          >
          {recipe.name}</span>
          <span className='del-button'><button onClick={() => {this.deleteRecipe(recipe.name)}} className='btn btn-danger'>Delete {recipe.name}</button></span>
        </li>
      )
    })
  }

  addNewRecipe = () => {
    console.log('add new recipe')
    this.setState({
      showAddRecipe: true,
      ingredients: [],
      name: ''
    })
  }

  render() {
    return (
      <div>
        {this.state.showRecipeButton ? <button
          id='newRecipe'
          className='btn btn-primary'
          onClick={() => {
            this.addNewRecipe()
            this.setState({showRecipeButton: false})
          }
          }
        >Add new recipe</button> : ''}
        <h3>Recipe List</h3>
        <ul className='list-group'>
          {this.renderRecipes()}
        </ul>
        <RecipeIngredients name={this.state.name} ingredients={this.state.ingredients}/>
        {this.state.showAddRecipe ? 
          <div>
            <RecipeForm />
            <button className='btn btn-warning del-button' onClick={() => {
              this.setState({showAddRecipe: false, showRecipeButton: true})
              }}>cancel
            </button>
          </div> : ''}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { recipes: state.recipes }
}

export default connect(mapStateToProps, { deleteRecipe })(recipeList)
