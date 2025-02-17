import { useContext } from "react";
import { Link } from "react-router-dom";
import { Auth } from "../authprovider/AuthProvider";

const Register = () => {
  const { registerUser, setUser } = useContext(Auth);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);
    // form.reset();
    registerUser(email, password)
      .then((result) => {
        console.log(result.user.email);
        setUser(result.user.email);
        fetch("http://localhost:5000/addCampaign", {
          method: "POST",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
          });
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <form onSubmit={handleRegister} className="hero bg-base-200 ">
      <div className="hero-content flex-col my-20">
        <div className="text-center ">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Name"
              />
              <label className="fieldset-label">Photo-URL</label>
              <input
                type="text"
                className="input"
                name="photoURL"
                placeholder="Photo-URL"
              />
              <label className="fieldset-label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              <label className="fieldset-label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />

              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
            <p>
              already registered?{" "}
              <Link className="text-red-500" to="/register">
                login now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Register;
