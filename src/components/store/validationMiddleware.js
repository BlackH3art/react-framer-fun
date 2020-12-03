import validator from 'validator';
import { SEND_FORM_DATA, ADD_TODO } from './actionCreators';

let errors = {
  text: [],
  email: [],
  number: [],
  checkbox1: [],
  checkbox2: [],
  date: [],
  time: []
};

export const todoErrors = [];

let errorList = [];

export const validation = ({ dispatch, getState }) => next => action => {


  
  if(action.type === SEND_FORM_DATA) {

    let errormsg = ''

    Object.keys(errors).forEach(field => {
        errors[field].splice(0);
        return errors;
      })

    const { text, email, number, checkbox1, checkbox2, date, time } = action.payload

    if(validator.isEmpty(text)) {
      errormsg = 'value is required!';
      errors.text.push(errormsg);
      errorList.push(errormsg);
    } else if (!validator.isLength(text, {min: 5, max: 30})) {
      errormsg = 'min 5 signs, and max30 signs';
      errors.text.push(errormsg);
      errorList.push(errormsg);
    } 
    
    if(validator.isEmpty(email)) {
      errormsg = 'value is required!'
      errors.email.push(errormsg)
      errorList.push(errormsg)
    } else if (!validator.isEmail(email)){
      errormsg = 'this is not an email'
      errors.email.push(errormsg)
      errorList.push(errormsg)
    } 
    
    if(validator.isEmpty(number)) {
      errormsg = 'value is required!'
      errors.number.push(errormsg)
      errorList.push(errormsg)
    } else if (!validator.isNumeric(number)){
      errormsg = 'this is not a number'
      errors.number.push(errormsg)
      errorList.push(errormsg)
    } 
    
    if(!checkbox1){
      errormsg = 'you have to agree'
      errors.checkbox1.push(errormsg);
      errorList.push(errormsg)
    } 
    
    if(!checkbox2){
      errormsg = 'you have to agree'
      errors.checkbox2.push(errormsg);
      errorList.push(errormsg)
    } 
    
    if(validator.isEmpty(date)) {
      errormsg = 'value is required!'
      errors.date.push(errormsg)
      errorList.push(errormsg)
    } else if(!validator.isDate(date)){
      errormsg = 'this is not a date'
      errors.date.push(errormsg);
      errorList.push(errormsg)
    } 
    
    if(validator.isEmpty(time)) {
      errormsg = 'value is required!'
      errors.time.push(errormsg)
      errorList.push(errormsg)
    } else if(!validator.isLength(time, {min: 4})){
      errormsg = 'this is not a correct time'
      errors.time.push(errormsg);
      errorList.push(errormsg)
    } 

  
    if (errorList.length === 0) {
      next(action)
      return;
    } else {
      return errorList.splice(0);
    }

  } else if(action.type === ADD_TODO) {


    const [todoItem] = action.payload
    let errormsg = '';


    if(validator.isEmpty(todoItem)) {
      errormsg = 'How can todo item be empty?!';
      todoErrors.push(errormsg);
      return 
    } else {
      return next(action);
    }


  } else {
    return next(action)
  }

}


export default errors;
