import React, { useState } from 'react';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

import './styles/SecondComponent.css';

const SecondComponent = () => {

  let [ firstelem, setFirstelem ] = useState(false)
  let [ secondelem, setSecondtelem ] = useState(false)


  const handleClick = (e) => {
    switch(e.target.name) {
      case "first":
        setFirstelem(!firstelem)
        break;
      case "second": 
        setSecondtelem(!secondelem)
        break;
      default:
        return; 
    }
  }

  const transition = {
    ease: "easeOut", 
    duration: 1,
  }

  return ( 
    <>
      <div className="Second-container">
        <AnimateSharedLayout>

          <div className="element-continer">
            <AnimatePresence>
              {firstelem && (
                <motion.div layout className="blue-squere"
                  key="just-div1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={transition}
                >
                </motion.div>
              )}

              <motion.button layout name="first" onClick={handleClick} className="btn btn-outline-light"> 
                click! 
              </motion.button>

            </AnimatePresence>
          </div>

          <div className="element-continer">
            <AnimatePresence>
              {secondelem && (
                <motion.div layout className="blue-squere"
                  key="just-div2"
                  initial={{ opacity: 0, y: -500, scale: 0.5 }}
                  animate={{ opacity: 1, y: 0, rotate: 900, scale: 1.5 }}
                  exit={{ opacity: 0, y: -500, rotate: -900, scale: 0}}
                  transition={transition}
                  whileHover={{ backgroundColor: "red"}}
                  
                >

                </motion.div>
              )}

              <motion.button layout name="second" onClick={handleClick} className="btn btn-outline-light"> 
                click! 
              </motion.button>

            </AnimatePresence>
          </div>


        </AnimateSharedLayout>

      </div>
    </>
   );
}
 
export default SecondComponent;