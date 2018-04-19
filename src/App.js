import React, { Component } from 'react';
import RecipeListAccordion from './components/recipe_list_accordion'
import AddRecipe from './components/recipe_add'
import { connect } from 'react-redux'
import { resetRecipes } from './actions'
import Footer from './components/Footer'

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
  
  resetRecipes = () => {
    this.props.resetRecipes()
  }

  render() {
    return (
      <div>
        <div>
          <h1>Recipe Box</h1>
          <h3>A freeCodeCamp challenge</h3>
          <h6>by Greg Duncan</h6>
        </div>
        {
          this.state.showRecipeButton ? 
            <div>
              <h7><b>click on the recipes</b></h7>
              <RecipeListAccordion />
              <button onClick={this.changeView} className='btn btn-primary'>add recipe</button>
            </div> 
            : <div><AddRecipe /><button onClick={this.changeView} className='btn btn-danger'>HOME</button></div>
        }
        <hr />
        <div>
          <button onClick={this.resetRecipes} className='btn btn-info btn-block'>Reset Recipes</button>
        </div>
        <Footer />
      </div>
    )
  }
}

export default connect(null, { resetRecipes })(App)
