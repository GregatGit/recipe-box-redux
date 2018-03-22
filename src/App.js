import React, { Component } from 'react';
import RecipeList from './components/recipe_list'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <h1>Recipe Box</h1>
        </div>
        <RecipeList />
      </div>
    );
  }
}

export default App;
