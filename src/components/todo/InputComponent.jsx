import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTodo } from '../store/actionCreators';

const InputComponent = () => {

  const [inputValue, setInputValue] = useState('')


  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();

    let item = Array(inputValue);

    dispatch(addTodo(item));
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  }

  return ( 
    <>
      <div className="input-container">

        <form onSubmit={handleSubmit}>
          <input type="text" value={inputValue} placeholder="What you got to do?" onChange={handleChange} />
          <button type="submit" className="btn btn-outline-light"> dodaj </button>
        </form>

      </div>
    </>
  );
}
 
export default InputComponent;