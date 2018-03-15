import React, { Component } from 'react';
import RecipeList from './components/recipe_list'

class App extends Component {
  render() {
    return (
      <div>
        Start here
        <RecipeList />
      </div>
    );
  }
}

export default App;
