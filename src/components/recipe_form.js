import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'
import { addRecipe } from '../actions'

class RecipeForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visable: false
    }
  }

  renderField = (field) => {
    const { label, meta: { touched, error }} = field
    return (
      <div>
        <label>{label}</label>
        <input
         className='form-control'
         type='text'
         {...field.input}
         placeholder={label}
         />
         <div className='error-warning-form'>{touched ? error : ''}</div>
      </div>
    )
  }

  submitRecipe = values => {
    console.log(values)

    const obj = {
      name: values.recipeName,
      ingredients: [values.ingredient1, values.ingredient2]
    }
    console.log('obj', obj)
    this.props.addRecipe(obj)
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form onSubmit={handleSubmit(this.submitRecipe.bind(this))}>
        <Field
          label='Recipe Name'
          name='recipeName'
          component={this.renderField}
          type='text'
        />
        <Field
          label='Ingredient 1'
          name='ingredient1'
          component={this.renderField}
          type='text'
        />
        <Field
          label='Ingredient 2'
          name='ingredient2'
          component={this.renderField}
          type='text'
        />
        <Field
          label='Ingredient 3'
          name='ingredient3'
          component={this.renderField}
          type='text'
        />
        <button type='submit' className='btn btn-primary'>Add Recipe</button>
      </form>
    );
  }
}

function validate(values) {
  const errors = {}

  if (!values.recipeName){
    errors.recipeName = 'Name your recipe'
  }

  if (!values.ingredient1) {
    errors.ingredient1 = 'Please add ingredients'
  }

  return errors
}

function mapStateToProps(state, ownProps) {
  return {
    
  }
}

export default reduxForm({
  validate,
  form: 'NewRecipeForm'
})(
  connect(mapStateToProps, { addRecipe })(RecipeForm)
)

//export default connect(mapStateToProps)(RecipeForm)
