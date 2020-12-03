import React, {  useState } from 'react';
import { motion, AnimateSharedLayout, AnimatePresence} from 'framer-motion'
import { useDispatch, useSelector } from 'react-redux';

import ReceivedComponent from './form/ReceivedComponent';

import { sendFormData, receivedForm } from './store/actionCreators';

import './styles/FifthComponent.css';
import errors from './store/validationMiddleware';

const FifthComponent = () => {

  const dispatch = useDispatch()
  const received = useSelector(state => state.formSent)

  const [formState, setFormState] = useState({
    text: '',
    email: '',
    number: '',
    checkbox1: false,
    checkbox2: false,
    date: '',
    time: ''
  })
  // const [errorsState, setErrorsState] = useState(errors)


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

    // this is ugly, but it works
    let arewegood = errors.text.length === 0 && errors.email.length === 0 && errors.number.length === 0 && errors.checkbox1.length === 0 && errors.checkbox2.length === 0 && errors.date.length === 0 && errors.time.length === 0 ;
    
    // prevent reseting all inputs values if there are any errors
    if (arewegood) {
      setFormState({
        text: '',
        email: '',
        number: '',
        checkbox1: false,
        checkbox2: false,
        date: '',
        time: ''
      })

      dispatch(receivedForm(true))

      setTimeout(() => {
        dispatch(receivedForm(false))
      }, 5000);


    } else {
      setFormState({...formState})
      dispatch(receivedForm(false))
    }


  }
  
  return ( 
    <>
      <div className="Fifth-container">
        <div className="form-container">
          <AnimatePresence exitBeforeEnter>
            {received ? <ReceivedComponent  
              initial={{ opacity: 0, y: -100, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100}}              
            /> : 
            <motion.form key='myform' onSubmit={handleSubmit}
              initial={{ opacity: 0, y: -100, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100}}
            >

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
                </div>
                
              </AnimateSharedLayout>

            </motion.form>}
          </AnimatePresence>
        </div>
      </div>
    </>
   );
}
 
export default FifthComponent;