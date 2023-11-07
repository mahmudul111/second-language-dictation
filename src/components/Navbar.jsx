import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navLink = <>
                <NavLink to='/root' className="text-xl font-semibold"><li>Home</li></NavLink>
                <NavLink to='/about' className="ml-5 text-xl font-semibold"><li>About</li></NavLink>
    </>
    return (
        <div className="max-w-7xl mx-auto rounded-sm mb-10">
            <div className="navbar bg-emerald-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLink}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Second Language Dictation</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {navLink}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;