import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'; 
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import { deleteTodo } from '../store/actionCreators';



const ListComponent = () => {

  const todoArray = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const title = todoArray.length === 0 ? 'You have nothing to do?' : 'Your to do list:';

  const deleteItem = (itemId) => {
    
    dispatch(deleteTodo(itemId))
    
  }



  return ( 
    <>
      <div className="list-container">
        <div className="title-container">
          <h3> {title} </h3>
        </div>
        <AnimatePresence>
          <AnimateSharedLayout>
            <div className="ul-container">
              <motion.ul layout className="todo-list">

                {todoArray.map((item, i) => ( 
                  <motion.li variants={{ 
                    hidden: {
                      opacity: 0,
                      y: -50
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        delay: i * 0.05
                      }
                    }, 
                    unmount: {
                      x: 150,
                      opacity: 0
                    }
                  }}
                  initial="hidden"
                  animate="visible"
                  exit="unmount"
                  custom={i}
                  key={i}
                  id={i}
                  >
                    
                    <p>{item}</p> 
                    <span> Utworzono 21.11.2020 o 9:20</span>
                    <div className="action-buttons-container">

                      <button onClick={() => deleteItem(item)} className="btn btn-sm btn-outline-danger" alt="delete">
                        <FontAwesomeIcon icon={faTrashAlt} /> 
                      </button>

                    </div>
                    
                  </motion.li>
                ))}
                  
              </motion.ul>
            </div>
          </AnimateSharedLayout>
        </AnimatePresence>
      </div>
    </>
  );
}
 
export default ListComponent;