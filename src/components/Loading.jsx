import React from 'react'
import { Loader2 } from 'lucide-react'
import { motion } from 'framer-motion';


const Loading = () => {
  return (
    <div className='flex justify-center items-center h-full'>
          <motion.div
          animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 size={56}
        className='text-green-600'
        />            
          </motion.div>
    </div>
  )
}

export default Loading
    