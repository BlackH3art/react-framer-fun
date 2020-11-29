import React, { useState } from 'react';
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

            <label>
              my input
              {errors.text ? <p className="validate-error">{errors.text}</p> : null}
            </label>
            <input name="text" type="text" value={formState.text} onChange={handleOnChange}/>

            <label>
              my email input
              {errors.email ? <p className="validate-error">{errors.email}</p> : null}
            </label>
            <input name="email" type="text" value={formState.email} onChange={handleOnChange}/>

            <label>
              my number input
              {errors.number ? <p className="validate-error">{errors.number}</p> : null}
            </label>
            <input name="number" type="number" value={formState.number} onChange={handleOnChange}/>

            <label>
              my checkbox input
              {errors.checkbox1 ? <p className="validate-error">{errors.checkbox1}</p> : null}
            </label>
            <input name="checkbox1" className="checkbox" type="checkbox" onChange={handleCheckbox} checked={formState.checkbox1} />

            <label>
              my checkbox input2
              {errors.checkbox2 ? <p className="validate-error">{errors.checkbox2}</p> : null}
            </label>
            <input name="checkbox2" className="checkbox" type="checkbox" onChange={handleCheckbox} checked={formState.checkbox2} />

            <label>
              my date input
              {errors.date ? <p className="validate-error">{errors.date}</p> : null}
            </label>
            <input name="date" type="date" value={formState.date} onChange={handleOnChange}/>

            <label>
              my time input
              {errors.time ? <p className="validate-error">{errors.time}</p> : null}
            </label>
            <input name="time" type="time" value={formState.time} onChange={handleOnChange}/>

            <div className="submit-button-container">
              <button className="btn btn-outline-light" type="submit">send to redux</button>
              <button className="btn btn-outline-light"> send to validate </button>
            </div>
            

          </form>
        </div>
      </div>
    </>
   );
}
 
export default FifthComponent;