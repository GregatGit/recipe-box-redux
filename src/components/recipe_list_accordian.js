import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, AccordionItem } from 'react-sanfona'
import { deleteRecipe, deleteIngredient, addIngredient } from '../actions'
import _ from 'lodash'

class RecipeListAccordian extends Component {
  constructor (props) {
    super(props)
    this.state = {
      recipes: this.props.recipes,
      ingredient: ''
    }
  }
  

  makeList = (list, name) => {
    return list.map(item => {
      return <li key={item} className='list-group-item'><span>{item}</span><span className='del-button'><button onClick={() => this.removeIngredient(name, item)}><i className="fas fa-ban"></i></button></span></li>
    })
  }

  removeIngredient = (item, name) => {
    this.props.deleteIngredient (item, name)
  }

  deleteRecipe = (recipe) => {
    this.props.deleteRecipe(recipe)
  }

  addIngredient = (recipe) => {
    if (this.state.ingredient !== ''){
      this.props.addIngredient(recipe, this.state.ingredient)
      this.setState({ingredient: ''})
    }
  }

  handleInput = (event) => {
    this.setState({ingredient: event.target.value})
  }

  render() {
    return (
      <Accordion>
        {_.map(this.props.recipes, item => {
          return (
            <AccordionItem key={item.name} title={`${item.name}`} expanded={item === 1}>
              <ul className='list-group'>
                {this.makeList(item.ingredients, item.name)}
                <li className='list-group-item'>
                  <span>
                    <input 
                      placeholder='add new ingredient'
                      value={this.state.ingredient}
                      onChange={this.handleInput} 
                    />
                  </span>
                  <span className='del-button'>
                    <button
                      onClick={() => {
                        this.addIngredient(item.name)
                      }}
                    >
                      <i className="far fa-check-circle"></i>
                    </button>
                  </span>
                </li>
                <li>
                  <span>
                    <button
                      onClick={() => {
                        this.deleteRecipe(item.name)
                      }} 
                      className='btn btn-danger'
                    >                  
                    delete</button>
                  </span>
                  <span></span>
                </li>
              </ul>
            </AccordionItem>
          );
        })}
      </Accordion>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps, { deleteRecipe, deleteIngredient, addIngredient })(RecipeListAccordian)
