import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Auth } from "../../authprovider/AuthProvider";
import Swal from "sweetalert2";

const Nav = () => {
  const { user, logOutUser } = useContext(Auth);
  const [theme, setTheme] = useState("dark");
  // console.log(user);
  const handleLogOut = () => {
    logOutUser()
      .then(() => {})
      .catch((e) => {
        Swal.fire({
          position: "top",
          icon: "error",
          title: `${e.message}`,
          showConfirmButton: false,
          timer: 1000,
        });
      });
  };

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

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
          <button
            className="sm:hidden btn btn-soft btn-info btn-xs sm:btn-md"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 mb-5">
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
        <Link to={"/"} className="btn btn-ghost text-xl">
          Crowd Cube
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6">{link}</ul>
      </div>
      <div className="navbar-end">
        <input
          type="checkbox"
          value=""
          className=" toggle theme-controller mr-4 "
          onClick={handleTheme}
        />
        {!user ? (
          <div className="space-x-1">
            <button className="btn btn-soft btn-info btn-xs sm:btn-md">
              <Link to="/login">Login</Link>
            </button>
            <button className="btn btn-soft btn-info btn-xs sm:btn-md">
              <Link to="/register">Register</Link>
            </button>
          </div>
        ) : (
          <div className=" sm:flex gap-4 justify-center items-center">
            <div className="relative group">
              <img
                className="rounded-full h-[40px] "
                src={user?.photoURL}
                alt="picture"
              />{" "}
              <div className="absolute opacity-0 group-hover:opacity-100 ">
                <div className="w-20 ">{user?.displayName}</div>
              </div>
            </div>
            <button
              className="hidden sm:block btn btn-soft btn-info btn-xs sm:btn-md"
              onClick={handleLogOut}
            >
              Log Out
            </button>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
