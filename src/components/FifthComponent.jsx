import React, { useState } from 'react';
import { motion, AnimateSharedLayout} from 'framer-motion'
import { useDispatch } from 'react-redux';



import { sendFormData } from './store/actionCreators';

import './styles/FifthComponent.css';
import errors from './store/validationMiddleware';

const FifthComponent = () => {

  const dispatch = useDispatch()
  const [formState, setFormState] = useState({
    text: '',
    email: '',
    number: '',
    checkbox1: false,
    checkbox2: false,
    date: '',
    time: ''
  })


  const handleOnChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const handleCheckbox = (e) => {

    setFormState({
      ...formState,
      [e.target.name]: !formState[e.target.name]
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(sendFormData(formState))

    // Object.keys(errors).forEach(field => {
    //   const formStateToUpdate = errors[field].length 
    //     ? { ...formState } 
    //     : { ...formState, [field]: formState[field] === false ? false : ''}
      
    //   setFormState(formStateToUpdate)
    // })


    // prevent reseting all input values if there are any errors

    setFormState({
      text: '',
      email: '',
      number: '',
      checkbox1: false,
      checkbox2: false,
      date: '',
      time: ''
    })
  }
  
  return ( 
    <>
      <div className="Fifth-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>

            <AnimateSharedLayout>

              <motion.label layout>
                my input
                {errors.text ? <motion.p layout className="validate-error">{errors.text}</motion.p> : null}
              </motion.label>
              <input className={errors.text.length === 1 ? "invalid-input" : null} name="text" type="text" value={formState.text} onChange={handleOnChange}/>

              <motion.label layout>
                my email input
                {errors.email ? <motion.p layout className="validate-error">{errors.email}</motion.p> : null}
              </motion.label>
              <input className={errors.email.length === 1 ? "invalid-input" : null} name="email" type="text" value={formState.email} onChange={handleOnChange}/>

              <motion.label layout>
                my number input
                {errors.number ? <motion.p layout className="validate-error">{errors.number}</motion.p> : null}
              </motion.label>
              <input className={errors.number.length === 1 ? "invalid-input" : null} name="number" type="number" value={formState.number} onChange={handleOnChange}/>

              <motion.label layout>
                my checkbox input
                {errors.checkbox1 ? <motion.p layout className="validate-error">{errors.checkbox1}</motion.p> : null}
              </motion.label>
              <input className={errors.checkbox1.length === 1 ? "invalid-input checkbox" : "checkbox"} name="checkbox1" type="checkbox" onChange={handleCheckbox} checked={formState.checkbox1} />

              <motion.label layout>
                my checkbox input2
                {errors.checkbox2 ? <motion.p layout className="validate-error">{errors.checkbox2}</motion.p> : null}
              </motion.label>
              <input className={errors.checkbox2.length === 1 ? "invalid-input checkbox" : "checkbox"} name="checkbox2" type="checkbox" onChange={handleCheckbox} checked={formState.checkbox2} />

              <motion.label layout>
                my date input
                {errors.date ? <motion.p layout className="validate-error">{errors.date}</motion.p> : null}
              </motion.label>
              <input className={errors.date.length === 1 ? "invalid-input" : null} name="date" type="date" value={formState.date} onChange={handleOnChange}/>

              <motion.label layout>
                my time input
                {errors.time ? <motion.p layout className="validate-error">{errors.time}</motion.p> : null}
              </motion.label>
              <input className={errors.time.length === 1 ? "invalid-input" : null} name="time" type="time" value={formState.time} onChange={handleOnChange}/>

              <div className="submit-button-container">
                <button className="btn btn-outline-light" type="submit">send to redux</button>
                <button className="btn btn-outline-light"> send to validate </button>
              </div>
              
            </AnimateSharedLayout>

          </form>
        </div>
      </div>
    </>
   );
}
 
export default FifthComponent;