import React, { Component } from 'react';
import RecipeList from './components/recipe_list'
import RecipeListAccordian from './components/recipe_list_accordian'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showRecipeButton: true
    }
  }
  
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Box</h1>
        </div>
        <RecipeListAccordian />
        {this.state.showRecipeButton ? <button className='btn btn-primary'>add recipe</button> : ''}
      </div>
    );
  }
}

export default App;
