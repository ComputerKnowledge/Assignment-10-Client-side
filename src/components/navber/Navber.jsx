import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Auth } from "../../authprovider/AuthProvider";

const Nav = () => {
  const { user, logOutUser } = useContext(Auth);
  console.log(user);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((e) => {
        console.log(e.message);
      });
  };

  // console.log(user);
  const link = (
    <>
      <NavLink to="/">Home </NavLink>{" "}
      <NavLink to="/campaigns">All Campaign </NavLink>{" "}
      {user && (
        <>
          <NavLink to="/addCampaign">Add New Campaign </NavLink>
          <NavLink to={`/myCampaign/${user?.email}`}>My Campaign </NavLink>
          <NavLink to={`/donations/${user?.email}`}>My Donations </NavLink>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Crowd Cube</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">{link}</ul>
      </div>
      <div className="navbar-end">
        {!user ? (
          <div className="space-x-1">
            <button className="btn btn-soft btn-info">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn btn-soft btn-info">
              <Link to="/register">Register</Link>
            </button>
          </div>
        ) : (
          <div className="flex gap-4 justify-center items-center">
            <div className="relative group">
              <img
                className="rounded-full h-[40px]"
                src={user?.photoURL}
                alt="picture"
              />{" "}
              <div className="absolute opacity-0 group-hover:opacity-100 ">
                <div className="w-20 ">{user?.displayName}</div>
              </div>
            </div>
            <button className="btn btn-soft btn-info" onClick={handleLogOut}>
              Log Out
            </button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
