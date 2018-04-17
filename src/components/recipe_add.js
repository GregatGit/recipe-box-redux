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

  handleIngredient = (event) => {
    this.setState({
      nextIngredient: event.target.value
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

  addIngredient = () => {
    if (this.state.nextIngredient !== ''){
      const ingredientsArr = [...this.state.ingredients, this.state.nextIngredient]
      this.setState({
        ingredients: ingredientsArr,
        nextIngredient: ''
      })
    }
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
        <button onClick={this.addIngredient} className='btn btn-primary btn-xs'>add</button>
        <p>Name: {this.state.name}</p>
        <p>ingredients: {this.showIngredients()}</p>
      </div>
    )
  }  
}

export default AddRecipe
