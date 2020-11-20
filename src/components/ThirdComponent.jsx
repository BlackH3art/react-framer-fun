import React from 'react';

import InputComponent from './todo/InputComponent';

import './styles/ThirdComponent.css';

const ThirdComponent = () => {
  return ( 
    <>
      <div className="Third-container">
        <div className="todo-container">
          <InputComponent />
        </div>
      </div>
    </>
   );
}
 
export default ThirdComponent;