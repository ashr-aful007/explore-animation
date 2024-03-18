import { motion } from "framer-motion"
import { useRef } from "react"

const parent = {
   hidden: {x: 0, y: 0, opacity: 0},
   visible:{
      x: [0, 300, -300, 0],
      y: [0, 300, -300, 0],
      opacity:1,
      transition:{
        ease: 'linear',
        repeat: Infinity,
        duration: 5,
        opacity:{
           duration: 0.5,
        },
        rotate: {
           delay: 1,
        }
      }
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