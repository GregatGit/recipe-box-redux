import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, AccordionItem } from 'react-sanfona'
import { deleteRecipe } from '../actions'
import _ from 'lodash'

class RecipeListAccordian extends Component {

  makeList = (list) => {
    return list.map(item => {
      return <li className='list-group-item'>{item}</li>
    })
  }

  deleteRecipe = (recipe) => {
    this.props.deleteRecipe(recipe)
  }

  render() {
    return (
      <Accordion>
        {_.map(this.props.ingredients, item => {
          return (
            <AccordionItem title={`${item.name}`} expanded={item === 1}>
              <ul className='list-group'>
                {this.makeList(item.ingredients)}
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
                  <span><button className='btn btn-warning del-button'>edit</button></span>
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
    ingredients: state.recipes
  }
}

export default connect(mapStateToProps, { deleteRecipe })(RecipeListAccordian)
