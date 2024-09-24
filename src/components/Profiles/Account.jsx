/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Account = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
   <>
   
   <Navbar/>
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg w-2/3 flex">
        {/* Left Side: Sign In Section */}
        <div className="w-1/2 p-10 bg-teal-500 text-white">
          <h2 className="text-4xl font-bold mb-6">Welcome Back!</h2>
          <p className="text-lg mb-10">
            To keep connected with us, please login with your personal info
          </p>
          <button
            className="bg-white text-teal-500 py-2 px-4 rounded-lg font-semibold"
            onClick={() => setShowLogin(true)}
          >
            Sign In
          </button>
        </div>

        {/* Right Side: Create Account */}
        <div className="w-1/2 p-10">
          {showLogin ? <Login /> : <Register />}
          <p className="text-center mt-4">
            {showLogin ? (
              <>
                Dont have an account?{" "}
                <span
                  className="text-teal-500 cursor-pointer"
                  onClick={() => setShowLogin(false)}
                >
                  Sign Up
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  className="text-teal-500 cursor-pointer"
                  onClick={() => setShowLogin(true)}
                >
                  Sign In
                </span>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
    <Footer></Footer>
   </>
  );
};

export default Account;
