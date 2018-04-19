import React, { Component } from 'react';
import RecipeListAccordian from './components/recipe_list_accordian'
import AddRecipe from './components/recipe_add'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showRecipeButton: true
    }
  }
  changeView = () => {
    let temp = !this.state.showRecipeButton
    this.setState({showRecipeButton: temp})
  }
  
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Box</h1>
        </div>
        {this.state.showRecipeButton ? <div><RecipeListAccordian /><button onClick={this.changeView} className='btn btn-primary'>add recipe</button></div> : <div><AddRecipe /><button onClick={this.changeView} className='btn btn-danger'>HOME</button></div>}
      </div>
    );
  }
}

export default App;
