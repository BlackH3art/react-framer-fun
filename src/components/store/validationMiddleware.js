import validator from 'validator';

const errors = {
  text: [],
  email: [],
  number: [],
  checkbox1: [],
  checkbox2: [],
  date: [],
  time: []
};

export const validation = ({ dispatch, getState }) => next => action => {

  // Object.keys(action.payload).forEach(field => {
  //   let value = action.payload[field];

  //   console.log(String(value));

  //   if (validator.isEmpty(value)) {
  //     errors[field].push("value is required!")
  //   }

  //   console.log(errors);


  // })

  const { text, email, number, checkbox1, checkbox2, date, time } = action.payload


  if(validator.isEmpty(text)) {
    errors.text.push('value is required!')
  } else if (!validator.isLength(text, {min: 5, max: 30})) {
    errors.text.push('min 5 signs, and max30 signs')
  } else if (!validator.isEmail(email)){
    errors.email.push('this is not an email')
  } else if (!validator.isNumeric(number)){
    errors.number.push('this is not a number')
  } else if(!checkbox1){
    errors.checkbox1.push('you have to agree');
  } else if(!checkbox2){
    errors.checkbox2.push('you have to agree');
  } else if(!validator.isDate(date)){
    errors.date.push('this is not a date');
  } else if(!validator.isLength(time, {min: 4})){
    errors.time.push('this is not a correct time');
  } else {
    next(action)
  }

  // next(action)

}


export default errors;