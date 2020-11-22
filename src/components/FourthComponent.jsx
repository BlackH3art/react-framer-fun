import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import LoginComponent from './to login/LoginComponent';

import './styles/FourthComponent.css';

const FourthComponent = () => {



  return ( 
    <>
      <div className="Fourth-container">
        <AnimatePresence>

          <motion.div className="login-panel"
            initial={{opacity: 0, y: -50}}
            animate={{opacity: 1, y: 0}}
          >
            <LoginComponent />
          </motion.div>

        </AnimatePresence>
      </div>
    </>
   );
}
 
export default FourthComponent;