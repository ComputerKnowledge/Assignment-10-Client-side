import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Auth } from "../authprovider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const { loginUser, loginWithGoogle } = useContext(Auth);
  const navigate = useNavigate();
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    form.reset();
    loginUser(email, password)
      .then(() => {
        // console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error.message);
        Swal.fire({
          position: "top",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        // console.log(result);
        navigate("/");
      })
      .catch((error) => {
        // console.log(error);
        Swal.fire({
          position: "top",
          icon: "error",
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <form onSubmit={handleLogin} className="hero bg-base-200 ">
      <div className="hero-content flex-col my-20">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input
                ref={emailRef}
                type="email"
                className="input"
                name="email"
                placeholder="Email"
                required
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
                required
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>
              did not register yet?{" "}
              <Link className="text-red-500" to="/register">
                register now
              </Link>
            </p>
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="btn btn-ghost"
            >
              google
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
