import React, { Component } from 'react'
//import { connect } from 'react-redux'

class AddRecipe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      nextIngredient: '',
      ingredients: ['apple', 'pears']
    }
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  showIngredients = () => {
    return (
      <ul>
        {this.state.ingredients.map(ingredient => {
          return <li>{ingredient}</li>
        })}
      </ul>
    )
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
        <p>Name: {this.state.name}</p>
        <p>ingredients: {this.showIngredients()}</p>
      </div>
    )
  }  
}

export default AddRecipe
