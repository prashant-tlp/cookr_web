import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();
  const handler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const signup = () => {
    axios
      .post("http://localhost:5000/user/register-user", input)
      .then((res) => {
        toast(res.data.message);
        toast("now login with your account");
        setTimeout(()=>{
          navigate("/");
        },5000)
      });
  };

  return <>
      <div>
      <div className="p-10">
        <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form>
            <div>
              <label className="block font-semibold" htmlFor="name">
                Name
              </label>
              <input
                className="shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                id="name"
                type="text"
                name="name"
                required="required"
                autoFocus="autoFocus"
                value={input.name} onChange={handler}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                id="email"
                type="email"
                name="email"
                required="required"
                value={input.email} onChange={handler}
              />
            </div>

            <div className="mt-4">
              <label className="block font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className=" shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
                id="password"
                type="password"
                name="password"
                value={input.password} onChange={handler}
                required="required"
              />
            </div>

            <div className="flex items-center justify-between mt-8">
              <button
                type="button"
                onClick={signup}
                className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Register
              </button>
              <Link className="font-semibold" to="/login" >Already registered?</Link>
            </div>
          </form>

          <aside className="">
            <div className="bg-gray-100 p-8 rounded">
              <h2 className="font-bold text-2xl">Instructions</h2>
              <ul className="list-disc mt-4 list-inside">
                <li>
                  All users must provide a valid email address and password to
                  create an account.
                </li>
                <li>
                  Users must not use offensive, vulgar, or otherwise
                  inappropriate language in their username or profile
                  information
                </li>
                <li>
                  Users must not create multiple accounts htmlFor the same person.
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
    <ToastContainer/>
  </>;
};

export default Signup;
