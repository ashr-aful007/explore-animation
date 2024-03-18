import { Link } from "react-router-dom"
import Home from "../Home/Home"


function Navbar() {
  return (
    <div>
    <div className="flex items-center justify-center gap-8 h-20 ">
      <Link to="/">Animation</Link>
      <Link to="/btnAnimation">Button-Animation</Link>
      <Link to="/fnAnimation">framer-motion</Link>
      <Link to="/keyFreamAnimation">keyFreamAnimation</Link>
      <Link to="/clipPathAnimation">ClipPathAnimation</Link>
      <Link to="/animationWithJs">AnimationWithJs</Link>
    </div>
    </div>
  )
}

export default Navbar