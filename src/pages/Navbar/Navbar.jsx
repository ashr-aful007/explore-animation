import { Link } from "react-router-dom"
import Home from "../Home/Home"


function Navbar() {
  return (
    <div>
      {/* <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-lg">
      <Link  to="/">Home</Link>
    </ul>
    <ul className="menu menu-horizontal px-1 text-lg mx-8">
       <Link to="/fnAnimation">Fundamental Animation</Link>
    </ul>
  </div>
</div> */}
    <div className="flex items-center justify-center gap-8 h-20 ">
      <Link to="/">Animation</Link>
      <Link to="/btnAnimation">Button-Animation</Link>
      <Link to="/fnAnimation">framer-motion</Link>
    </div>
    </div>
  )
}

export default Navbar