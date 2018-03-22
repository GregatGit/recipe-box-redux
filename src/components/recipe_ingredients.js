import React from 'react'

const RecipeIngredients = (props) => {
  function showIngredients(ingredients) {
    return ingredients.map(ingredient => {
      return <li className='list-group-item' key={ingredient}>{ingredient}</li>
    })
  }

  return (
    <div>
      <h4>{props.name.toUpperCase()}</h4>
      {props.name ? <h5>Ingredients:</h5> : 'Click on a recipe'}
      <ul>
      {showIngredients(props.ingredients)}
      </ul>
    </div>
  )
}

export default RecipeIngredients
