import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="navbar bg-base-100 mb-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink className={({isActive}) => isActive  && 'text-[#23BE0A] border border-[#23BE0A]'} to="/">Home</NavLink>
            </li>
            <li className="mx-4">
              <NavLink className={({isActive}) => isActive  && 'text-[#23BE0A] border border-[#23BE0A]'} to="/listedBooks">Listed Books</NavLink>
            </li>
            <li>
              <NavLink className={({isActive}) => isActive  && 'text-[#23BE0A] border border-[#23BE0A]'} to="/pagesToBooks">Pages to Books</NavLink>
            </li>
          </ul>
        </div>
        <a className="text-xl font-bold">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={({isActive}) => isActive  && 'text-[#23BE0A] border border-[#23BE0A]'} to="/">Home</NavLink>
          </li>
          <li className="mx-4">
            <NavLink className={({isActive}) => isActive  && 'text-[#23BE0A] border border-[#23BE0A]'} to="/listedBooks">Listed Books</NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive  && 'text-[#23BE0A] border border-[#23BE0A]'} to="/pagesToBooks">Pages to Books</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-4">
        <Link className="bg-[#23BE0A] text-white py-2 px-4 rounded-lg">
          Sign In
        </Link>
        <Link className="bg-[#59C6D2] text-white py-2 px-4 rounded-lg">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
