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
        <button onClick={this.addIngredient} className='btn btn-primary btn-xs'>add</button>
        <p>Name: {this.state.name}</p>
        <p>ingredients: {this.showIngredients()}</p>
        {this.state.warning ? <p className='warningAlert'>you must have a name and one ingredient</p> : ''}
        <hr />
        <button onClick={this.addNewRecipe} className='btn btn-primary btn-block'>Add recipe</button>
      </div>
    )
  }  
}

export default connect(null, { addRecipe })(AddRecipe)
