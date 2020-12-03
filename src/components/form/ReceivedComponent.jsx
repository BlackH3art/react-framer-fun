import React from 'react';
import { motion } from 'framer-motion';

const ReceivedComponent = () => {
  return ( 
    <>
      <motion.div className="another-receive-container"
        initial={{ opacity: 0, y: -100, scale: 0.5 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, x: -100}}  
      >
        <div className="receive-container">
          <h3>Thank you for sending this useless form!</h3>
          <p>Have a nice rest of your day!</p>
        </div>
      </motion.div>
    </>
   );
}
 
export default ReceivedComponent;