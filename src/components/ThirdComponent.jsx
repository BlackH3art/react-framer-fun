import React from 'react';

import InputComponent from './todo/InputComponent';
import ListComponent from './todo/ListComponent';

import './styles/ThirdComponent.css';

const ThirdComponent = () => {
  return ( 
    <>
      <div className="Third-container">
        <div className="todo-container">
          <InputComponent />
          <ListComponent />
        </div>
      </div>
    </>
   );
}
 
export default ThirdComponent;