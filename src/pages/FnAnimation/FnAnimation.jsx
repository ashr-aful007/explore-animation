import { motion } from "framer-motion"
import { useRef } from "react"

const parent = {
   hidden: {opacity: 0, scale: 0.9},
   visible:{
      opacity: 0.6,
      scale:1,
      transition:{
        ease: 'easeInOut',
        duration: 0.25,
      }
   },
   hover: {
      opacity: 1,
   },

}


function FnAnimation() {
    const parentRef = useRef(null)
  return (
    <div ref={parentRef} className="w-full size-[500px] flex justify-center items-center">
      <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial = "hidden"   
        animate= "visible" 
        whileHover="hover"
        whileTap="tap"  
        drag
        // dragSnapToOrigin
        dragConstraints={parentRef}
        whileDrag={{
           scale: 1.1,
           boxShadow: '0px 10px 10px #000'
        }}

        // dragConstraints={{left: -200, right: 200, top: -200, bottom: 200}}
        // onHoverStart={() => console.log("Hover")} 
        // onHoverEnd={() => console.log("Hover Ended")}                           //   repeat: Infinity
      > 
      </motion.div>
    </div>
  )
}

export default FnAnimation