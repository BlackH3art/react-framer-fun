import validator from 'validator';

let errors = {
  text: [],
  email: [],
  number: [],
  checkbox1: [],
  checkbox2: [],
  date: [],
  time: []
};

export const validation = ({ dispatch, getState }) => next => action => {

  Object.keys(errors).forEach(field => {
    errors[field].splice(0);
    return errors;
  })

  const { text, email, number, checkbox1, checkbox2, date, time } = action.payload


  if(validator.isEmpty(text)) {
    errors.text.push('value is required!')
  } else if (!validator.isLength(text, {min: 5, max: 30})) {
    errors.text.push('min 5 signs, and max30 signs')
  } 
  
  if(validator.isEmpty(email)) {
    errors.email.push('value is required!')
  } else if (!validator.isEmail(email)){
    errors.email.push('this is not an email')
  } 
  
  if(validator.isEmpty(number)) {
    errors.number.push('value is required!')
  } else if (!validator.isNumeric(number)){
    errors.number.push('this is not a number')
  } 
  
  if(!checkbox1){
    errors.checkbox1.push('you have to agree');
  } 
  
  if(!checkbox2){
    errors.checkbox2.push('you have to agree');
  } 
  
  if(validator.isEmpty(date)) {
    errors.date.push('value is required!')
  } else if(!validator.isDate(date)){
    errors.date.push('this is not a date');
  } 
  
  if(validator.isEmpty(time)) {
    errors.time.push('value is required!')
  } else if(!validator.isLength(time, {min: 4})){
    errors.time.push('this is not a correct time');
  } 


  // create 'if' before sending form to redux
  next(action)

}


export default errors;