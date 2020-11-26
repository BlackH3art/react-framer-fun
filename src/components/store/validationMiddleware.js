import validator from 'validator';

const errors = [];

export const validation = ({ dispatch, getState }) => next => action => {

  // Object.keys(action.payload).forEach(field => {
  //   let fieldError = [];
  //   let value = action.payload[field];

  //   if (validator.isEmpty(value)) {
  //     fieldError.push("value is required!")
  //   }


  // })


  if(validator.isEmpty(action.payload.text)) {

    errors.push('value is required!')

  } else {
    next(action)
  }
}


export default errors;