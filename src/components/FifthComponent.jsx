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
            </label>
            <input name="text" type="text" value={formState.text} onChange={handleOnChange}/>
            <p>{JSON.stringify(errors)}</p>

            <label>
              my email input
            </label>
            <input name="email" type="text" value={formState.email} onChange={handleOnChange}/>

            <label>
              my number input
            </label>
            <input name="number" type="number" value={formState.number} onChange={handleOnChange}/>

            <label>
              my checkbox input
            </label>
            <input name="checkbox1" className="checkbox" type="checkbox" onChange={handleCheckbox} checked={formState.checkbox1} />

            <label>
              my checkbox input #2
            </label>
            <input name="checkbox2" className="checkbox" type="checkbox" onChange={handleCheckbox} checked={formState.checkbox2} />

            <label>
              my date input
            </label>
            <input name="date" type="date" value={formState.date} onChange={handleOnChange}/>

            <label>
              my time input
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