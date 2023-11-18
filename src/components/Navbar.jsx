import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  
  const {user, logOut} = useContext(AuthContext)
  const handleLogOut =()=>{
        logOut()
        .then()
        .catch()
  }
    const navLink = <>
                <li><NavLink to='/root' className="text-xl font-semibold">Home</NavLink></li>
                <li><NavLink to='/root/courses' className="ml-5 text-xl font-semibold">My Course</NavLink></li>
                <li><NavLink to='/about' className="ml-5 text-xl font-semibold">About</NavLink></li>
    </>
    
    return (
        <div className="max-w-7xl mx-auto rounded-sm mb-10">
            <div className="navbar bg-teal-900 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Language Dictation Learning</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ? 
      <button onClick={handleLogOut} className="btn btn-outline text-white">Log Out</button>
      :
      <Link to='/root/login'>
      <button className="btn btn-outline text-white">Login</button>
      </Link>
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;