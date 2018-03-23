import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

class RecipeForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Recipe Name</label>
          <div>
            <Field
             name='recipeName'
             component='input'
             type='text'
             placeholder='recipe name'
            />
          </div>
        </div>
        <div>
          <label>Ingredients</label>
          <div>
            <Field 
              name='ingredients'
              component='input'
              type='text'
              placeholder='seperate ingredients with a , '
            />
          </div>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    
  }
}

export default reduxForm({
  form: 'NewRecipeForm'
})(
  connect(mapStateToProps)(RecipeForm)
)

//export default connect(mapStateToProps)(RecipeForm)
