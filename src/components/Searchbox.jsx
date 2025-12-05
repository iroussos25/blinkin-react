import { motion } from 'framer-motion'
import React, {useState} from 'react'
import SearchCoinButton from './SearchCoinButton'

const Searchbox = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 500 }}
    animate={{opacity:1, y:0}}
    transition={{duration: 2, ease: 'easeInOut'}}
    >

      <form action="" class="search__bar">
                    <input type="text" id="search__input" placeholder="Search for movies..."/>
                    {/* <button> */}
                    {/* // initial={{scale: 0}}
                    // animate={{scale:1}}
                    // transition={{ duration: 5, type: 'spring', stiffness: 260, damping: 20, ease: 'easeInOut'}}
                    //  type="submit" id="submit__button" onclick="main()"><i class="fa-solid fa-magnifying-glass"></i> */}
                        <SearchCoinButton />
                    {/* </button> */}
                </form>   
    </motion.div>
    
  )
}

export default Searchbox
