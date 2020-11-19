import React from 'react';
import { motion } from 'framer-motion'

import './styles/FirstComponent.css';

const FirstComponent = () => {

  const initial = {
    x: -300,
    opacity: 0,
  }
  const animate = {
    x: [300, -300, 300, -300, 0],
    opacity: [0, 0.2, 0.4, 0.6, 0.8, 1],
  }
  const transition = {
    ease: "easeOut", 
    duration: 2,
  }

  return ( 
    <>
      <div className="First-container" >

        <motion.div className="red-squere" 
          // initial={initial} 
          animate={animate} 
          transition={transition}
        />

        <motion.div className="red-squere"
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 270, 270, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
          }}
          transition={transition}

        />

        <motion.div className="red-squere"
          drag
          dragConstraints={{
            top: -150,
            left: -150,
            right: 150,
            bottom: 150,
          }}
        />

        <motion.div className="red-squere"
          animate={{ rotate: 360 }}
          transition={{ duration: 2 }}
        />

        <motion.button className="btn btn-outline-light"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          click!
        </motion.button>

      </div>
    </>
   );
}
 
export default FirstComponent;