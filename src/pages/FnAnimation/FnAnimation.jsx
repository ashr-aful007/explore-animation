import { motion } from "framer-motion"

const parent = {
   hidden: {opacity: 0, scale: 0.0},
   visible: {opacity: 1, scale: 1}, 
}
const child = {
   hidden: {opacity: 0, scale: 0.0},
   visible: {opacity: 1, scale: 1}, 
}

function FnAnimation() {
  return (
    <div className="w-full flex justify-center items-center">
      <motion.div className="size-64 bg-indigo-500 rounded-lg flex flex-wrap gap-5 p-5 justify-center items-center"
        variants={parent}
        initial = "hidden"   
        animate= "visible"                                //   repeat: Infinity
        transition = {{ease: 'easeInOut',duration: 1.5, repeatType: 'reverse', delayChildren: 1, staggerChildren: 1,}}
      > 
        <motion.div className="size-20 bg-cyan-400 rounded-sm"
          variants={child}
        ></motion.div>
        <motion.div
          variants={child}
         className="size-20 bg-cyan-400 rounded-sm"></motion.div>
        <motion.div
          variants={child}
         className="size-20 bg-cyan-400 rounded-sm"></motion.div>
        <motion.div 
          variants={child}
        className="size-20 bg-cyan-400 rounded-sm"></motion.div>
      </motion.div>
    </div>
  )
}

export default FnAnimation