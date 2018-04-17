import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Accordion, AccordionItem } from 'react-sanfona'
import _ from 'lodash'

class RecipeListAccordian extends Component {

  makeList = (list) => {
    return list.map(item => {
      return <li className='list-group-item'>{item}</li>
    })
  }
  render() {
    return (
      <Accordion>
        {_.map(this.props.ingredients, item => {
          return (
            <AccordionItem title={`${item.name}`} expanded={item === 1}>
              <ul className='list-group'>
                {this.makeList(item.ingredients)}
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

export default connect(mapStateToProps)(RecipeListAccordian)
