import React, { useState } from "react";
import Header from "./Header";
import heroImage from "../images/hero.png";

const Login = () => {
  let [isSignForm, setIsSignForm] = useState(true);

  const handleButton = function () {
    setIsSignForm(!isSignForm);
  };

  return (
    <div className="relative">
      <Header />
      <div className="z--1">
        <img src={heroImage} alt="heropage" />
      </div>

      {/* login form */}
      <div className="absolute bg-black p-10 top-36 mx-auto left-0 right-0 w-3/12 bg-opacity-80">
        <h2 className="text-white text-3xl font-semibold mb-10">{isSignForm ? 'Sign In' : 'SIgn Up'}</h2>
        <form className="text-center">
       {!isSignForm && <input
            type="text"
            placeholder="Enter your name"
            className="p-4 mb-4 text-xl text-gray-300  bg-black border border-gray-300 rounded-sm w-72"
          />}
          <input
            type="text"
            placeholder="Email or mobile number"
            className="p-4 mb-4 text-xl text-gray-300  bg-black border border-gray-300 rounded-sm w-72"
          />
          <input
            type="password"
            placeholder="Password"
            className="p-4 mb-4  bg-black text-xl border border-gray-300 rounded-sm w-72 text-gray-300"
          />
          <button className="bg-red-600 w-full p-2 text-white text-lg rounded-md">
           {isSignForm ? 'Sign In' : 'SIgn Up'}{" "}
          </button>
        </form>
        <h2 className="text-gray-300 text-lg  mt-2 text-center">OR</h2>
        <button className="bg-gray-600 w-full p-2 text-white text-lg rounded-md mt-2">  
          Use a sign-in code
        </button>
        <p className="text-center text-gray-200 mt-4"> Forgot passoword?</p>
        <button className="text-gray-300 mt-5" onClick={()=>handleButton()}>
         {isSignForm ? <> New to Netflix?{" "}
         <span className="text-while font-bold">Sign up now.</span> </>: <>Already have an account, 
         <span className="text-while font-bold"> Sign in now.</span> </>}
        </button>
      </div>
    </div>
  );
};

export default Login;
