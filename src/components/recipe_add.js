import React, { Component } from 'react'
import { addRecipe } from '../actions'
import { connect } from 'react-redux'

class AddRecipe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      nextIngredient: '',
      ingredients: [],
      warning: false
    }
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleIngredient = (event) => {
    this.setState({
      nextIngredient: event.target.value
    })
  }

  deleteIngredient = (event) => {
    const arrIngredients = this.state.ingredients.filter(ingredient =>  ingredient !== event.target.value)
    this.setState({ingredients: arrIngredients})
  }

  showIngredients = () => {
    return (
      <ul className='list-group'>
        {this.state.ingredients.map(ingredient => {
          return <li key={ingredient} className='list-group-item'>
            <span>{ingredient}</span>
            <span><button onClick={this.deleteIngredient} value={ingredient} className='btn btn-warning del-button'>-</button></span>
          </li>
        })}
      </ul>
    )
  }

  addIngredient = () => {
    let newIngredient = this.state.nextIngredient
    if (this.state.ingredients.indexOf(newIngredient) > -1){
      this.setState({nextIngredient: ''})
      return
    }
    if (newIngredient !== ''){
      const ingredientsArr = [...this.state.ingredients, this.state.nextIngredient]
      this.setState({
        ingredients: ingredientsArr,
        nextIngredient: ''
      })
    }
  }

  addNewRecipe = () => {
    if (this.state.name === '' || this.state.ingredients.length === 0){
      this.setState({warning: true})
      return
    }
    const obj = {
      name: this.state.name,
      ingredients: this.state.ingredients
    }
    this.props.addRecipe(obj)
    this.setState({
      warning: false,
      name: '',
      nextIngredient: '',
      ingredients: [],
    })
  }

  render() {
    return (
      <div>
        <h3>New Recipe</h3>
        <input 
          value={this.state.name}
          onChange={this.handleName}
          placeholder='name'
        />
        <input 
          value={this.state.nextIngredient}
          onChange={this.handleIngredient}
          placeholder='ingredient'
        />
        <button onClick={this.addIngredient} className='btn btn-primary btn-xs'>+</button>
        <h4>Name: {this.state.name}</h4>
        <h5>ingredients: {this.showIngredients()}</h5>
        {this.state.warning ? <p className='warningAlert'>you must have a name and at least 1 ingredient</p> : ''}
        <hr />
        <button onClick={this.addNewRecipe} className='btn btn-primary btn-block'>Add recipe</button>
      </div>
    )
  }  
}

export default connect(null, { addRecipe })(AddRecipe)
