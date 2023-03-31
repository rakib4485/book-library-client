import React, { useContext } from "react";
import loginBg from "../../assets/images/login/bh02.jpg";
import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {

  const {createUser, updateUser, googleSignIn} = useContext(AuthContext);
  const navigate = useNavigate();

const handleSignup = event =>{
  event.preventDefault();

  const form = event.target;
  const name = form.name.value;
  const email = form.email.value;
  const password = form.password.value;

  const userInfo = {
    displayName: name
  }

  createUser(email, password)
  .then(result =>{
    const user = result.user;
    console.log(user);
    updateUser(userInfo)
    .then( () =>{
      saveUser(name, email);
    })
    .then(err => console.error(err));
  })
  .then(err => console.error(err));
  form.reset();
}

const handleGoogleSignIn = () => {
  googleSignIn()
  .then(result => {
    const user = result.user;
    console.log(user);
    saveUser(user.displayName, user.email);
  })
  .then(error => console.error(error))
}

const saveUser = (name, email) => {
  const user = {name, email};
  fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data => {
      navigate('/');
    })
}

  return (
    <div className="">
      <div
        className=""
        style={{
          background: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className=" py-20">
        <form onSubmit={handleSignup} className="card-body bg-white md:w-[40%] mx-auto rounded-md">
          <div className="flex justify-between items-center">
            <div className="text-center md:w-1/2">
              <h1 className="text-xl font-bold md:text-3xl uppercase">
                Sign UP
              </h1>
            </div>
            <div>
              <Link to="/login">
                <button className="btn btn-dark btn-outline mr-2">Login</button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-dark">Sign Up</button>
              </Link>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">sign up</button>
          </div>
          <div className="divider">OR</div>
          <div className="form-control mt-6 ">
            <button onClick={handleGoogleSignIn} className="flex items-center justify-center btn btn-secondary btn-outline">
              <FaGoogle className="mr-2"></FaGoogle> sign up With Google
            </button>
          </div>
        </form>
      </div>
      </div>

      
    </div>
  );
};

export default SignUp;
