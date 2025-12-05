import React from 'react'
import { motion } from 'framer-motion'

const Textbox = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: -500 }}
    animate={{opacity:1, x:0}}
    transition={{ duration: 2, ease: 'easeInOut'}}
     className='main__text'>
      <h1 className='main__title'>Welcome to Blinkin</h1>
        <p className='main__description'>Your one-stop solution for all your movie browsing needs! </p>
    </motion.div>
  )
}



export default Textbox
